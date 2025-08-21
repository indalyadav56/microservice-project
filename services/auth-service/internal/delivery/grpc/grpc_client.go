package grpc

import (
	"google.golang.org/grpc"
)

func NewGrpcClient(target string) (*grpc.ClientConn, error) {
	conn, err := grpc.NewClient(target)
	if err != nil {
		return nil, err
	}

	return conn, err
}
