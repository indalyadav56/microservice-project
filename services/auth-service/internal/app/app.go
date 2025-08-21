package app

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"auth-service/internal/config"
	"auth-service/internal/delivery/grpc"
	"auth-service/internal/delivery/http/handlers"
	"auth-service/internal/delivery/http/routes"
	"auth-service/internal/usecase"
	"auth-service/pb"
	"auth-service/pkg/logger"

	"github.com/gin-gonic/gin"
)

type App struct {
	ctx        context.Context
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

	// Initialize gRPC client
	grpcClient, err := grpc.NewGrpcClient("localhost:50051")
	if err != nil {
		return nil, fmt.Errorf("failed to create gRPC client")
	}

	userGrpcClient := pb.NewUserServiceClient(grpcClient)

	// Initialize use cases
	authService := usecase.NewAuthService(userGrpcClient)
	fmt.Println(authService)

	// ---- delivery layer ----
	httpServer := gin.Default()

	httpServer.Use(gin.Recovery())
	httpServer.Use(gin.Logger())
	httpServer.Use(gin.ErrorLogger())

	handler := handlers.NewAuthHandler(authService)

	routes.AuthRoutes(httpServer, handler)

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

func (a *App) Stop() error {
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", 8080),
		Handler: a.httpServer,
	}

	if err := server.Shutdown(a.ctx); err != nil {
		return fmt.Errorf("server forced to shutdown: %v", err)
	}
	return nil
}
