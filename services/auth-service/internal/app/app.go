package app

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"auth-service/internal/config"
	"auth-service/internal/usecase"
	"auth-service/pkg/logger"

	"github.com/gin-gonic/gin"
)

type App struct {
	httpServer *gin.Engine
}

func NewApp(ctx context.Context) (*App, error) {
	// Load configuration
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
		return nil, err
	}

	// logging
	logger.InitLogger(cfg.App.LogLevel)

	// Initialize use cases
	authService := usecase.NewAuthService()
	fmt.Println(authService)

	// ---- delivery layer ----
	httpServer := gin.Default()

	httpServer.Use(gin.Recovery())
	httpServer.Use(gin.Logger())
	httpServer.Use(gin.ErrorLogger())

	return &App{
		httpServer: httpServer,
	}, nil
}

func (a *App) Run() error {
	if err := a.httpServer.Run(); err != nil {
		return fmt.Errorf("http server stopped: %v", err)
	}

	return nil
}

func (a *App) Stop(ctx context.Context) error {
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", 8080),
		Handler: a.httpServer,
	}

	if err := server.Shutdown(ctx); err != nil {
		return fmt.Errorf("server forced to shutdown: %v", err)
	}
	return nil
}
