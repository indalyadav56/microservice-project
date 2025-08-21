package routes

import (
	"auth-service/internal/delivery/http/handlers"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(authGroup *gin.RouterGroup, authHandler handlers.AuthHandler) {
	authGroup.POST("/auth/v1/login", authHandler.Login)
	authGroup.POST("/auth/v1/register", authHandler.Register)
}
