package usecase

import (
	"auth-service/pb"
	"context"
	"fmt"
	"time"
)

type authService struct {
	jwtSecret      string
	jwtExpiry      time.Duration
	userGrpcClient pb.UserServiceClient
}

func NewAuthService(client pb.UserServiceClient) *authService {
	return &authService{
		userGrpcClient: client,
	}
}

func (s *authService) Register(ctx context.Context, email, password string) error {
	res, err := s.userGrpcClient.CreateUser(ctx, &pb.CreateUserRequest{
		Email:    email,
		Password: password,
	})
	if err != nil {
		fmt.Println("Error creating user:", err)
		return err
	}

	fmt.Println("User created successfully:", res)

	return nil
}

func (s *authService) Login(ctx context.Context, email, password string) (string, error) {
	return "", nil
}
