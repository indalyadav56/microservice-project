package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"time"

	"svc-a-grpc/pb"

	"go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.24.0"
	"go.opentelemetry.io/otel/trace"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var tracer trace.Tracer

type server struct {
	pb.UnimplementedServiceAServer
	serviceBClient pb.ServiceBClient
}

func initTracer() (*sdktrace.TracerProvider, error) {
	ctx := context.Background()

	// Create OTLP exporter
	exporter, err := otlptracehttp.New(ctx,
		otlptracehttp.WithEndpoint("jaeger:4318"),
		otlptracehttp.WithInsecure(),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create OTLP exporter: %w", err)
	}

	// Create resource
	res, err := resource.New(ctx,
		resource.WithAttributes(
			semconv.ServiceName(os.Getenv("OTEL_SERVICE_NAME")),
		),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create resource: %w", err)
	}

	// Create TracerProvider
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(exporter),
		sdktrace.WithResource(res),
	)

	// Set global TracerProvider
	otel.SetTracerProvider(tp)

	return tp, nil
}

func (s *server) Hello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {
	// Create a span for this request
	ctx, span := tracer.Start(ctx, "ServiceA.Hello")
	defer span.End()

	// Add some attributes to the span
	span.SetAttributes(
		semconv.RPCService("ServiceA"),
		semconv.RPCMethod("Hello"),
	)

	// Simulate some work
	time.Sleep(10 * time.Millisecond)

	return &pb.HelloResponse{
		Message:   fmt.Sprintf("Hello %s from Service A!", req.Name),
		Service:   "svc-a-grpc",
		Timestamp: time.Now().Unix(),
	}, nil
}

func (s *server) Work(ctx context.Context, req *pb.WorkRequest) (*pb.WorkResponse, error) {
	// Create a span for this request
	ctx, span := tracer.Start(ctx, "ServiceA.Work")
	defer span.End()

	// Add some attributes to the span
	span.SetAttributes(
		semconv.RPCService("ServiceA"),
		semconv.RPCMethod("Work"),
	)

	// Simulate some work
	time.Sleep(50 * time.Millisecond)

	// Call Service B
	serviceBResp, err := s.callServiceB(ctx, req)
	if err != nil {
		span.RecordError(err)
		return nil, err
	}

	return &pb.WorkResponse{
		Message:          fmt.Sprintf("Work completed by Service A! Service B said: %s", serviceBResp.Message),
		Service:          "svc-a-grpc",
		ProcessingTimeMs: 50,
		Timestamp:        time.Now().Unix(),
	}, nil
}

func (s *server) callServiceB(ctx context.Context, req *pb.WorkRequest) (*pb.WorkResponse, error) {
	// Create a span for the Service B call
	ctx, span := tracer.Start(ctx, "ServiceA.callServiceB")
	defer span.End()

	// Add attributes
	span.SetAttributes(
		semconv.RPCService("ServiceB"),
		semconv.RPCMethod("Work"),
	)

	// Call Service B
	resp, err := s.serviceBClient.Work(ctx, req)
	if err != nil {
		span.RecordError(err)
		return nil, err
	}

	log.Printf("Called Service B: %s", resp.Message)
	return resp, nil
}

func main() {
	// Initialize tracer
	tp, err := initTracer()
	if err != nil {
		log.Fatalf("Failed to initialize tracer: %v", err)
	}
	defer func() {
		if err := tp.Shutdown(context.Background()); err != nil {
			log.Printf("Error shutting down tracer provider: %v", err)
		}
	}()

	// Get tracer
	tracer = otel.Tracer("svc-a-grpc")

	// Connect to Service B
	serviceBConn, err := grpc.Dial("svc-b:9091",
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithUnaryInterceptor(otelgrpc.UnaryClientInterceptor()),
	)
	if err != nil {
		log.Fatalf("Failed to connect to Service B: %v", err)
	}
	defer serviceBConn.Close()

	serviceBClient := pb.NewServiceBClient(serviceBConn)

	// Create gRPC server with tracing
	s := grpc.NewServer(
		grpc.UnaryInterceptor(otelgrpc.UnaryServerInterceptor()),
	)
	pb.RegisterServiceAServer(s, &server{serviceBClient: serviceBClient})

	// Start server
	port := ":9090"
	log.Printf("Service A gRPC server starting on port %s", port)

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	log.Fatal(s.Serve(lis))
}
