package usecase

import (
	"fmt"

	"user-service/internal/domain"
)

// UserService implements the user business logic
type UserService struct {
	userRepo domain.UserRepository
}

// NewUserService creates a new instance of UserService
func NewUserService(userRepo domain.UserRepository) *UserService {
	return &UserService{
		userRepo: userRepo,
	}
}

// CreateUser creates a new user
func (s *UserService) CreateUser(user *domain.User) error {
	// Validate user data
	if err := user.Validate(); err != nil {
		return fmt.Errorf("validation failed: %w", err)
	}

	// Check if username already exists
	existingUser, _ := s.userRepo.GetByUsername(user.Username)
	if existingUser != nil {
		return domain.ErrUserAlreadyExists
	}

	// Check if email already exists
	existingUser, _ = s.userRepo.GetByEmail(user.Email)
	if existingUser != nil {
		return domain.ErrUserAlreadyExists
	}

	// Create user
	if err := s.userRepo.Create(user); err != nil {
		return fmt.Errorf("failed to create user: %w", err)
	}

	return nil
}

// GetUser retrieves a user by ID
func (s *UserService) GetUser(id string) (*domain.User, error) {
	user, err := s.userRepo.GetByID(id)
	if err != nil {
		return nil, fmt.Errorf("failed to get user: %w", err)
	}

	return user, nil
}

// UpdateUser updates an existing user
func (s *UserService) UpdateUser(user *domain.User) error {
	// Check if user exists
	existingUser, err := s.userRepo.GetByID(user.ID)
	if err != nil {
		return fmt.Errorf("user not found: %w", err)
	}

	// Update fields
	if user.Username != "" {
		existingUser.Username = user.Username
	}
	if user.Email != "" {
		existingUser.Email = user.Email
	}
	if user.FirstName != "" {
		existingUser.FirstName = user.FirstName
	}
	if user.LastName != "" {
		existingUser.LastName = user.LastName
	}
	if user.Role != "" {
		existingUser.Role = user.Role
	}

	// Update user
	if err := s.userRepo.Update(existingUser); err != nil {
		return fmt.Errorf("failed to update user: %w", err)
	}

	// Copy updated data back to input user
	*user = *existingUser

	return nil
}

// DeleteUser deletes a user
func (s *UserService) DeleteUser(id string) error {
	// Check if user exists
	_, err := s.userRepo.GetByID(id)
	if err != nil {
		return fmt.Errorf("user not found: %w", err)
	}

	// Delete user
	if err := s.userRepo.Delete(id); err != nil {
		return fmt.Errorf("failed to delete user: %w", err)
	}

	return nil
}

// ListUsers retrieves a paginated list of users
func (s *UserService) ListUsers(limit, offset int) ([]*domain.User, error) {
	users, err := s.userRepo.List(limit, offset)
	if err != nil {
		return nil, fmt.Errorf("failed to list users: %w", err)
	}

	return users, nil
}

// ValidateUser validates user data
func (s *UserService) ValidateUser(user *domain.User) error {
	return user.Validate()
}

// GetUserListResponse returns a paginated user list response
func (s *UserService) GetUserListResponse(limit, offset int) (*domain.UserListResponse, error) {
	users, err := s.ListUsers(limit, offset)
	if err != nil {
		return nil, err
	}

	total, err := s.userRepo.Count()
	if err != nil {
		return nil, fmt.Errorf("failed to count users: %w", err)
	}

	hasMore := int64(offset+limit) < total
	nextOffset := 0
	if hasMore {
		nextOffset = offset + limit
	}

	return &domain.UserListResponse{
		Users:      users,
		Total:      total,
		Limit:      limit,
		Offset:     offset,
		HasMore:    hasMore,
		NextOffset: nextOffset,
	}, nil
}
