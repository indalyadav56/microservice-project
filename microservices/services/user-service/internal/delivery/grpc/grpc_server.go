package grpc

import (
	"context"
	"fmt"
	"net"

	pb "user-service/pb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type Server struct {
	grpcServer *grpc.Server
	listener   net.Listener
	port       int
}

func NewServer(port int, opts ...grpc.ServerOption) (*Server, error) {
	// Create listener first to validate port binding
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return nil, fmt.Errorf("failed to listen on port %d: %w", port, err)
	}

	// Apply server options (interceptors, etc.)
	grpcServer := grpc.NewServer(opts...)

	return &Server{
		grpcServer: grpcServer,
		listener:   listener,
		port:       port,
	}, nil
}

// RegisterHandler registers the gRPC handler with the server
func (s *Server) RegisterHandler(handler *UserGRPCHandler) {
	pb.RegisterUserServiceServer(s.grpcServer, handler)

	// Enable reflection for debugging
	reflection.Register(s.grpcServer)
}

// Start starts the gRPC server
func (s *Server) Start() error {
	fmt.Printf("gRPC server starting on port %d\n", s.port)

	if err := s.grpcServer.Serve(s.listener); err != nil {
		return fmt.Errorf("failed to serve: %v", err)
	}

	return nil
}

// Stop gracefully stops the gRPC server
func (s *Server) Stop(ctx context.Context) error {
	if s.grpcServer != nil {
		s.grpcServer.GracefulStop()
	}
	return nil
}

func (s *Server) Use(interceptors ...grpc.UnaryServerInterceptor) {
	s.grpcServer = grpc.NewServer(
		grpc.ChainUnaryInterceptor(interceptors...),
	)
}
