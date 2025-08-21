package grpc

import (
	"context"
	"fmt"

	"user-service/internal/domain"
	"user-service/internal/usecase"
	pb "user-service/pb"
)

type UserGRPCHandler struct {
	pb.UnimplementedAuthServiceServer
	authService domain.AuthService
	userService *usecase.UserService
}

func NewUserGRPCHandler(authService domain.AuthService, userService *usecase.UserService) *UserGRPCHandler {
	return &UserGRPCHandler{
		authService: authService,
		userService: userService,
	}
}

// Register handles user registration
func (h *UserGRPCHandler) Register(ctx context.Context, req *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	// Create user from request
	user := &domain.User{
		Username:  req.Username,
		Email:     req.Email,
		Password:  req.Password,
		FirstName: req.FirstName,
		LastName:  req.LastName,
		Role:      req.Role,
	}

	// Call the auth service
	response, err := h.authService.Register(user)
	if err != nil {
		return &pb.RegisterResponse{
			Success: false,
			Message: "Internal server error",
		}, err
	}

	// Convert domain response to protobuf response
	return &pb.RegisterResponse{
		Success: response.Success,
		Message: response.Message,
	}, nil
}

// GetUser handles getting a user by ID
func (h *UserGRPCHandler) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	user, err := h.userService.GetUser(req.Id)
	if err != nil {
		return &pb.GetUserResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to get user: %v", err),
		}, nil
	}

	return &pb.GetUserResponse{
		Success: true,
		Message: "User retrieved successfully",
		User: &pb.User{
			Id:        user.ID,
			Username:  user.Username,
			Email:     user.Email,
			FirstName: user.FirstName,
			LastName:  user.LastName,
			IsActive:  user.IsActive,
			Role:      user.Role,
		},
	}, nil
}

// UpdateUser handles updating a user
func (h *UserGRPCHandler) UpdateUser(ctx context.Context, req *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	user := &domain.User{
		ID:        req.Id,
		Username:  req.Username,
		Email:     req.Email,
		FirstName: req.FirstName,
		LastName:  req.LastName,
		Role:      req.Role,
	}

	// Note: In protobuf, bool fields are not pointers, so we use the value directly
	user.IsActive = req.IsActive

	err := h.userService.UpdateUser(user)
	if err != nil {
		return &pb.UpdateUserResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to update user: %v", err),
		}, nil
	}

	return &pb.UpdateUserResponse{
		Success: true,
		Message: "User updated successfully",
	}, nil
}

// DeleteUser handles deleting a user
func (h *UserGRPCHandler) DeleteUser(ctx context.Context, req *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	err := h.userService.DeleteUser(req.Id)
	if err != nil {
		return &pb.DeleteUserResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to delete user: %v", err),
		}, nil
	}

	return &pb.DeleteUserResponse{
		Success: true,
		Message: "User deleted successfully",
	}, nil
}

// ListUsers handles listing users with pagination
func (h *UserGRPCHandler) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	limit := int(req.Limit)
	if limit <= 0 {
		limit = 10
	}
	if limit > 100 {
		limit = 100
	}

	offset := int(req.Offset)
	if offset < 0 {
		offset = 0
	}

	response, err := h.userService.GetUserListResponse(limit, offset)
	if err != nil {
		return &pb.ListUsersResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to list users: %v", err),
		}, nil
	}

	// Convert domain users to protobuf users
	var protoUsers []*pb.User
	for _, user := range response.Users {
		protoUsers = append(protoUsers, &pb.User{
			Id:        user.ID,
			Username:  user.Username,
			Email:     user.Email,
			FirstName: user.FirstName,
			LastName:  user.LastName,
			IsActive:  user.IsActive,
			Role:      user.Role,
		})
	}

	return &pb.ListUsersResponse{
		Success:    true,
		Message:    "Users retrieved successfully",
		Users:      protoUsers,
		Total:      response.Total,
		Limit:      int32(response.Limit),
		Offset:     int32(response.Offset),
		HasMore:    response.HasMore,
		NextOffset: int32(response.NextOffset),
	}, nil
}
