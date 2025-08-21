package grpc

import (
	"context"
	"fmt"

	"google.golang.org/grpc"
)

func NewGrpcClient(ctx context.Context, port int) (*grpc.ClientConn, error) {
	conn, err := grpc.NewClient(fmt.Sprintf("localhost:%d", port), grpc.WithInsecure())
	if err != nil {
		return nil, err
	}

	return conn, err
}
