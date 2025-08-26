package grpcmiddlewares

import (
	"context"
	"log"

	"google.golang.org/grpc"
)

func GrpcLoggingMiddleware() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {
		// Log the incoming request
		log.Printf("gRPC Request - Method:%s; %v", info.FullMethod, req)

		// Call the handler to proceed with the request
		resp, err := handler(ctx, req)

		// Log the response or error
		if err != nil {
			log.Printf("gRPC Response - Method:%s; Error:%v", info.FullMethod, err)
		} else {
			log.Printf("gRPC Response - Method:%s; %v", info.FullMethod, resp)
		}

		return resp, err
	}
}
