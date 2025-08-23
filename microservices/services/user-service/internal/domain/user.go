package domain

import (
	"errors"
	"time"
)

// User represents a user in the system
type User struct {
	ID         string     `json:"id"`
	Email      string     `json:"email"`
	Password   string     `json:"-"`
	FirstName  string     `json:"first_name"`
	MiddleName string     `json:"middle_name"`
	LastName   string     `json:"last_name"`
	IsActive   bool       `json:"is_active"`
	Role       string     `json:"role"`
	CreatedAt  time.Time  `json:"created_at"`
	UpdatedAt  time.Time  `json:"updated_at"`
	DeletedAt  *time.Time `json:"deleted_at"`
}

// Common errors
var (
	ErrUserNotFound      = errors.New("user not found")
	ErrUserAlreadyExists = errors.New("user already exists")
	ErrInvalidUser       = errors.New("invalid user data")
	ErrInvalidEmail      = errors.New("invalid email format")
	ErrInvalidUsername   = errors.New("invalid username")
	ErrWeakPassword      = errors.New("password is too weak")
)

// Validate validates user data
func (u *User) Validate() error {
	if u.Email == "" {
		return ErrInvalidEmail
	}
	if u.Password == "" {
		return ErrWeakPassword
	}
	return nil
}

// FullName returns the user's full name
func (u *User) FullName() string {
	if u.FirstName != "" && u.LastName != "" {
		return u.FirstName + " " + u.LastName
	}
	if u.FirstName != "" {
		return u.FirstName
	}
	if u.LastName != "" {
		return u.LastName
	}
	return u.Email
}

// IsAdmin checks if user has admin role
func (u *User) IsAdmin() bool {
	return u.Role == "admin"
}

// BeforeCreate sets timestamps before creating
func (u *User) BeforeCreate() {
	now := time.Now()
	u.CreatedAt = now
	u.UpdatedAt = now
	if u.Role == "" {
		u.Role = "user"
	}
	if !u.IsActive {
		u.IsActive = true
	}
}

// BeforeUpdate sets updated timestamp
func (u *User) BeforeUpdate() {
	u.UpdatedAt = time.Now()
}
