package server

import (
	middlewars "common-service/pkg/grpc/middlewares"
	"net"

	"google.golang.org/grpc"
)

type grpcServer struct {
	grpcServer *grpc.Server
	listener   net.Listener
	port       int
}

func NewGrpcServer() *grpc.Server {
	grpcServer := grpc.NewServer(
		grpc.UnaryInterceptor(middlewars.GrpcLogginMiddleware()),
	)

	return grpcServer
}
