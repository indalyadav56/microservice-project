package domain

import "time"

type UserService interface {
	CreateUser(user *User) error
	GetUser(id string) (*User, error)
	GetUserByEmail(email string) (*User, error)
	UpdateUser(user *User) error
	DeleteUser(id string) error
	ListUsers(limit, offset int) ([]*User, error)
	ValidateUser(user *User) error
}

// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------

// RegisterResponse represents the response from a registration operation
type RegisterResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	User    *User  `json:"user,omitempty"`
}

// CreateUserRequest represents a request to create a user
type CreateUserRequest struct {
	Username  string `json:"username" validate:"required,min=3,max=50"`
	Email     string `json:"email" validate:"required,email"`
	Password  string `json:"password" validate:"required,min=8"`
	FirstName string `json:"first_name" validate:"required,min=2,max=50"`
	LastName  string `json:"last_name" validate:"required,min=2,max=50"`
	Role      string `json:"role" validate:"omitempty,oneof=user admin"`
}

// UpdateUserRequest represents a request to update a user
type UpdateUserRequest struct {
	ID        string `json:"id" validate:"required"`
	FirstName string `json:"first_name" validate:"omitempty,min=2,max=50"`
	LastName  string `json:"last_name" validate:"omitempty,min=2,max=50"`
	Email     string `json:"email" validate:"omitempty,email"`
	IsActive  *bool  `json:"is_active"`
	Role      string `json:"role" validate:"omitempty,oneof=user admin"`
}

// LoginRequest represents a login request
type LoginRequest struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
}

// Pagination represents pagination parameters
type Pagination struct {
	Limit  int `json:"limit" validate:"min=1,max=100"`
	Offset int `json:"offset" validate:"min=0"`
}

// UserListResponse represents a paginated list of users
type UserListResponse struct {
	Users      []*User `json:"users"`
	Total      int64   `json:"total"`
	Limit      int     `json:"limit"`
	Offset     int     `json:"offset"`
	HasMore    bool    `json:"has_more"`
	NextOffset int     `json:"next_offset,omitempty"`
}

// HealthCheck represents a health check response
type HealthCheck struct {
	Status    string            `json:"status"`
	Timestamp time.Time         `json:"timestamp"`
	Services  map[string]string `json:"services,omitempty"`
}
