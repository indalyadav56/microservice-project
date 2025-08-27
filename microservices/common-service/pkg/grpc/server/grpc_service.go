package grpcserver

import (
	"fmt"
	"net"

	middlewars "github.com/indalyadav56/rbac/microservices/common-service/pkg/grpc/middlewares"

	"google.golang.org/grpc"
)

type GrpcServer struct {
	GrpcServer *grpc.Server
	listener   net.Listener
	port       int
}

func NewGrpcServer(port int) *GrpcServer {
	grpcSrv := grpc.NewServer(
		grpc.UnaryInterceptor(middlewars.GrpcLogginMiddleware()),
	)

	return &GrpcServer{
		GrpcServer: grpcSrv,
		port:       port,
	}
}

func (s *GrpcServer) Serve() error {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		return err
	}
	s.listener = lis
	fmt.Println("gRPC server listening on port", s.port)
	return s.GrpcServer.Serve(s.listener)
}

func (s *GrpcServer) Stop() {
	// s.GrpcServer.GracefulStop()
}
