package usecase

import (
	"time"
)

type authService struct {
	jwtSecret string
	jwtExpiry time.Duration
}

func NewAuthService(jwtSecret string, jwtExpiry time.Duration) *authService {
	return &authService{
		jwtSecret: jwtSecret,
		jwtExpiry: jwtExpiry,
	}
}
