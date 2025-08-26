package grpcserver

import (
	"context"
	"fmt"
	"net"

	"google.golang.org/grpc"
)

type Server struct {
	port               int
	listener           net.Listener
	GrpcServer         *grpc.Server
	unaryInterceptors  []grpc.UnaryServerInterceptor
	streamInterceptors []grpc.StreamServerInterceptor
	opts               []grpc.ServerOption
}

func NewServer(port int, interceptors ...grpc.UnaryServerInterceptor) (*Server, error) {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return nil, fmt.Errorf("failed to listen on port %d: %w", port, err)
	}

	var opts []grpc.ServerOption
	if len(interceptors) > 0 {
		opts = append(opts, grpc.ChainUnaryInterceptor(interceptors...))
	}

	grpcServer := grpc.NewServer(opts...)

	return &Server{
		listener:   listener,
		port:       port,
		GrpcServer: grpcServer,
	}, nil
}

// Start starts the gRPC server
func (s *Server) Start() error {
	fmt.Printf("gRPC server starting on port %d\n", s.port)
	return s.GrpcServer.Serve(s.listener)
}

// Stop gracefully stops
func (s *Server) Stop(ctx context.Context) error {
	if s.GrpcServer != nil {
		s.GrpcServer.GracefulStop()
	}
	return nil
}
