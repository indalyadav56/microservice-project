package grpc

import (
	"fmt"
	"net"

	pb "user-service/pb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type Server struct {
	grpcServer *grpc.Server
	port       int
}

func NewServer(port int) *Server {
	grpcServer := grpc.NewServer()

	return &Server{
		grpcServer: grpcServer,
		port:       port,
	}
}

// RegisterHandler registers the gRPC handler with the server
func (s *Server) RegisterHandler(handler *UserGRPCHandler) {
	pb.RegisterAuthServiceServer(s.grpcServer, handler)

	// Enable reflection for debugging
	reflection.Register(s.grpcServer)
}

// Start starts the gRPC server
func (s *Server) Start() error {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", s.port))
	if err != nil {
		return fmt.Errorf("failed to listen: %v", err)
	}

	fmt.Printf("gRPC server starting on port %d\n", s.port)

	if err := s.grpcServer.Serve(lis); err != nil {
		return fmt.Errorf("failed to serve: %v", err)
	}

	return nil
}

// Stop gracefully stops the gRPC server
func (s *Server) Stop() {
	if s.grpcServer != nil {
		s.grpcServer.GracefulStop()
	}
}
