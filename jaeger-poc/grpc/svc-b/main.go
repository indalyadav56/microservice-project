package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"time"

	"svc-b-grpc/pb"

	"go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.24.0"
	"go.opentelemetry.io/otel/trace"
	"google.golang.org/grpc"
)

var tracer trace.Tracer

type server struct {
	pb.UnimplementedServiceBServer
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
	ctx, span := tracer.Start(ctx, "ServiceB.Hello")
	defer span.End()

	// Add some attributes to the span
	span.SetAttributes(
		semconv.RPCService("ServiceB"),
		semconv.RPCMethod("Hello"),
	)

	// Simulate some work
	time.Sleep(15 * time.Millisecond)

	return &pb.HelloResponse{
		Message:   fmt.Sprintf("Hello %s from Service B!", req.Name),
		Service:   "svc-b-grpc",
		Timestamp: time.Now().Unix(),
	}, nil
}

func (s *server) Work(ctx context.Context, req *pb.WorkRequest) (*pb.WorkResponse, error) {
	// Create a span for this request
	ctx, span := tracer.Start(ctx, "ServiceB.Work")
	defer span.End()

	// Add some attributes to the span
	span.SetAttributes(
		semconv.RPCService("ServiceB"),
		semconv.RPCMethod("Work"),
	)

	// Simulate some work
	time.Sleep(100 * time.Millisecond)

	return &pb.WorkResponse{
		Message:          fmt.Sprintf("Work completed by Service B! Task: %s", req.Task),
		Service:          "svc-b-grpc",
		ProcessingTimeMs: 100,
		Timestamp:        time.Now().Unix(),
	}, nil
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
	tracer = otel.Tracer("svc-b-grpc")

	// Create gRPC server with tracing
	s := grpc.NewServer(
		grpc.UnaryInterceptor(otelgrpc.UnaryServerInterceptor()),
	)
	pb.RegisterServiceBServer(s, &server{})

	// Start server
	port := ":9091"
	log.Printf("Service B gRPC server starting on port %s", port)

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	log.Fatal(s.Serve(lis))
}
