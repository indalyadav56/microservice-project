package domain

import "context"

type AuthService interface {
	Login(ctx context.Context, email, password string) (string, error)
	Register(ctx context.Context, email, username, password string) error
}
