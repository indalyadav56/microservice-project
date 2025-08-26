package usecase

import (
	"fmt"

	"user-service/internal/domain"

	"golang.org/x/crypto/bcrypt"
)

type userService struct {
	userRepo domain.UserRepository
}

func NewUserService(userRepo domain.UserRepository) *userService {
	return &userService{
		userRepo: userRepo,
	}
}

// CreateUser creates a new user
func (s *userService) CreateUser(user *domain.User) error {
	// Validate user data
	if err := user.Validate(); err != nil {
		return fmt.Errorf("validation failed: %w", err)
	}

	// Check if email already exists
	existingUser, _ := s.userRepo.GetByEmail(user.Email)
	if existingUser != nil {
		return domain.ErrUserAlreadyExists
	}

	// Hash password
	hashedPassword, err := s.hashPassword(user.Password)
	if err != nil {
		return fmt.Errorf("failed to hash password: %w", err)
	}

	user.Password = hashedPassword

	// Create user
	if err := s.userRepo.Create(user); err != nil {
		return fmt.Errorf("failed to create user: %w", err)
	}

	return nil
}

func (s *userService) hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

// GetUser retrieves a user by ID
func (s *userService) GetUser(id string) (*domain.User, error) {
	user, err := s.userRepo.GetByID(id)
	if err != nil {
		return nil, fmt.Errorf("failed to get user: %w", err)
	}

	return user, nil
}

// UpdateUser updates an existing user
func (s *userService) UpdateUser(user *domain.User) error {
	// Check if user exists
	existingUser, err := s.userRepo.GetByID(user.ID)
	if err != nil {
		return fmt.Errorf("user not found: %w", err)
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
func (s *userService) DeleteUser(id string) error {
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
func (s *userService) ListUsers(limit, offset int) ([]*domain.User, error) {
	users, err := s.userRepo.List(limit, offset)
	if err != nil {
		return nil, fmt.Errorf("failed to list users: %w", err)
	}

	return users, nil
}

// ValidateUser validates user data
func (s *userService) ValidateUser(user *domain.User) error {
	return user.Validate()
}

// GetUserListResponse returns a paginated user list response
func (s *userService) GetUserListResponse(limit, offset int) (*domain.UserListResponse, error) {
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

// GetUserByEmail retrieves a user by email
func (s *userService) GetUserByEmail(email string) (*domain.User, error) {
	user, err := s.userRepo.GetByEmail(email)
	if err != nil {
		return nil, fmt.Errorf("failed to get user: %w", err)
	}
	return user, nil
}

// CreateAdminUser creates an admin user
func (s *userService) CreateAdminUser() error {
	adminUser := &domain.User{
		Email:     "admin@example.com",
		Password:  "admin",
		Role:      "admin",
		FirstName: "System",
		LastName:  "Administrator",
		IsActive:  true,
	}

	return s.CreateUser(adminUser)
}
