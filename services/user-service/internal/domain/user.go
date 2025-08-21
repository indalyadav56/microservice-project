package domain

import (
	"errors"
	"time"
)

// User represents a user in the system
type User struct {
	ID        string    `json:"id" bson:"_id,omitempty" db:"id"`
	Username  string    `json:"username" bson:"username" db:"username"`
	Email     string    `json:"email" bson:"email" db:"email"`
	Password  string    `json:"-" bson:"password" db:"password"`
	FirstName string    `json:"first_name" bson:"first_name" db:"first_name"`
	LastName  string    `json:"last_name" bson:"last_name" db:"last_name"`
	IsActive  bool      `json:"is_active" bson:"is_active" db:"is_active"`
	Role      string    `json:"role" bson:"role" db:"role"`
	CreatedAt time.Time `json:"created_at" bson:"created_at" db:"created_at"`
	UpdatedAt time.Time `json:"updated_at" bson:"updated_at" db:"updated_at"`
}

// UserRepository defines the interface for user data operations
type UserRepository interface {
	Create(user *User) error
	GetByID(id string) (*User, error)
	GetByUsername(username string) (*User, error)
	GetByEmail(email string) (*User, error)
	Update(user *User) error
	Delete(id string) error
	List(limit, offset int) ([]*User, error)
	Count() (int64, error)
}

// UserService defines the interface for user business operations
type UserService interface {
	CreateUser(user *User) error
	GetUser(id string) (*User, error)
	UpdateUser(user *User) error
	DeleteUser(id string) error
	ListUsers(limit, offset int) ([]*User, error)
	ValidateUser(user *User) error
}

// Common errors
var (
	ErrUserNotFound     = errors.New("user not found")
	ErrUserAlreadyExists = errors.New("user already exists")
	ErrInvalidUser      = errors.New("invalid user data")
	ErrInvalidEmail     = errors.New("invalid email format")
	ErrInvalidUsername  = errors.New("invalid username")
	ErrWeakPassword     = errors.New("password is too weak")
)

// Validate validates user data
func (u *User) Validate() error {
	if u.Username == "" {
		return ErrInvalidUsername
	}
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
	return u.Username
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
