package routes

import "github.com/gin-gonic/gin"

func AuthRoutes(authGroup *gin.RouterGroup) {
	authGroup.POST("/login", LoginHandler)
	authGroup.POST("/register", RegisterHandler)
	authGroup.GET("/logout", LogoutHandler)
	authGroup.GET("/profile", ProfileHandler)
	authGroup.PUT("/profile", UpdateProfileHandler)
	authGroup.DELETE("/account", DeleteAccountHandler)
}
