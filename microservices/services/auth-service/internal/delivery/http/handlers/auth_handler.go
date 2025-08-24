package handlers

import (
	"net/http"

	"auth-service/internal/delivery/http/dto"
	"auth-service/internal/domain"

	"github.com/gin-gonic/gin"
)

type AuthHandler interface {
	Login(c *gin.Context)
	Register(c *gin.Context)
}

type authHandler struct {
	authService domain.AuthService
}

func NewAuthHandler(authService domain.AuthService) *authHandler {
	return &authHandler{authService: authService}
}

// Login handles user login.
func (h *authHandler) Login(c *gin.Context) {
	var req dto.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := h.authService.Login(c.Request.Context(), req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "invalid credentials", "data": nil})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}

// Register handles user registration.
func (h *authHandler) Register(c *gin.Context) {
	var req dto.RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := h.authService.Register(c.Request.Context(), req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "user registered successfully"})
}
