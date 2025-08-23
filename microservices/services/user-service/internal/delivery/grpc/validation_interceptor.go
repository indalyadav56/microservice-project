package grpc

import (
	"context"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// ValidationInterceptor is a gRPC interceptor that validates incoming requests
func ValidationInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	// Check if the request implements the Validator interface
	if validator, ok := req.(interface {
		Validate() error
	}); ok {
		if err := validator.Validate(); err != nil {
			// Convert validation error to gRPC status
			// if validationErr, ok := err.(validate.ValidationError); ok {
			// 	return nil, status.Errorf(codes.InvalidArgument, "validation failed: %s", validationErr.Error())
			// }
			return nil, status.Errorf(codes.InvalidArgument, "validation failed: %v", err)
		}
	}

	// Call the next handler
	return handler(ctx, req)
}

// ValidationStreamInterceptor is a gRPC stream interceptor that validates incoming requests
func ValidationStreamInterceptor(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	// For stream operations, we'll validate on each message
	wrappedStream := &validationServerStream{
		ServerStream: ss,
	}
	return handler(srv, wrappedStream)
}

type validationServerStream struct {
	grpc.ServerStream
}

func (s *validationServerStream) RecvMsg(m interface{}) error {
	if err := s.ServerStream.RecvMsg(m); err != nil {
		return err
	}

	// Validate the received message
	if validator, ok := m.(interface {
		Validate() error
	}); ok {
		if err := validator.Validate(); err != nil {
			// if validationErr, ok := err.(validate.ValidationError); ok {
			// 	return status.Errorf(codes.InvalidArgument, "validation failed: %s", validationErr.Error())
			// }
			return status.Errorf(codes.InvalidArgument, "validation failed: %v", err)
		}
	}

	return nil
}
