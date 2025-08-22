package client

import "google.golang.org/grpc"

type grpcClient struct {
	conn *grpc.ClientConn
	addr string
}

func NewGrpcClient(addr string) *grpc.ClientConn {
	conn, err := grpc.NewClient(addr)
	if err != nil {
		panic(err)
	}
	return conn
}

func (g *grpcClient) GetConnection() *grpc.ClientConn {
	return g.conn
}

func (g *grpcClient) CloseConnection() error {
	return g.conn.Close()
}
