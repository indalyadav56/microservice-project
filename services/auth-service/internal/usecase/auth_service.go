package usecase

import (
	"time"
)

type authService struct {
	jwtSecret string
	jwtExpiry time.Duration
}

func NewAuthService() *authService {
	return &authService{}
}
