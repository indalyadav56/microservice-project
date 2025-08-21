package routes

import (
	"auth-service/internal/delivery/http/handlers"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(e *gin.Engine, authHandler handlers.AuthHandler) {
	authGroup := e.Group("/auth/v1")

	authGroup.POST("/login", authHandler.Login)
	authGroup.POST("/register", authHandler.Register)
}
