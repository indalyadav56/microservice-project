package grpc

import (
	"context"

	"google.golang.org/grpc"
)

// UnaryInterceptorChain chains multiple unary interceptors into a single interceptor
func UnaryInterceptorChain(interceptors ...grpc.UnaryServerInterceptor) grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {
		// Apply in reverse order so the first added is outermost
		chain := handler
		for i := len(interceptors) - 1; i >= 0; i-- {
			curr := interceptors[i]
			next := chain
			chain = func(ctx context.Context, req interface{}) (interface{}, error) {
				return curr(ctx, req, info, next)
			}
		}
		return chain(ctx, req)
	}
}

// StreamInterceptorChain chains multiple stream interceptors into a single interceptor
func StreamInterceptorChain(interceptors ...grpc.StreamServerInterceptor) grpc.StreamServerInterceptor {
	return func(
		srv interface{},
		ss grpc.ServerStream,
		info *grpc.StreamServerInfo,
		handler grpc.StreamHandler,
	) error {
		chain := handler
		for i := len(interceptors) - 1; i >= 0; i-- {
			curr := interceptors[i]
			next := chain
			chain = func(srv interface{}, stream grpc.ServerStream) error {
				return curr(srv, stream, info, next)
			}
		}
		return chain(srv, ss)
	}
}
