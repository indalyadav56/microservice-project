package app

import (
	"context"
	"fmt"
	"log"

	"auth-service/internal/config"
	"auth-service/internal/delivery/http/handlers"
	"auth-service/internal/delivery/http/routes"
	"auth-service/internal/usecase"
	"auth-service/pb"
	"auth-service/pkg/logger"

	"github.com/gin-gonic/gin"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type App struct {
	ctx        context.Context
	httpServer *gin.Engine
	grpcConn   *grpc.ClientConn
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
	grpcConn, err := grpc.NewClient("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
		return nil, fmt.Errorf("failed to connect to gRPC server: %w", err)
	}

	userGrpcClient := pb.NewUserServiceClient(grpcConn)

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

	// server := &http.Server{
	// 	Addr:    fmt.Sprintf(":%d", 8081),
	// 	Handler: a.httpServer,
	// }

	return &App{
		httpServer: httpServer,
		grpcConn:   grpcConn,
		ctx:        ctx,
	}, nil
}

func (a *App) Run() error {
	if err := a.httpServer.Run(":8081"); err != nil {
		return fmt.Errorf("http server stopped: %v", err)
	}

	return nil
}

func (a *App) Stop() error {
	// if err := server.Shutdown(a.ctx); err != nil {
	// 	return fmt.Errorf("server forced to shutdown: %v", err)
	// }
	defer a.grpcConn.Close()
	return nil
}
