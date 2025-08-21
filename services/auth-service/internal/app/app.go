package app

import (
	"context"
	"fmt"
	"log"

	"user-service/internal/config"
	"user-service/internal/delivery/grpc"
	"user-service/internal/delivery/http"
	"user-service/internal/repository"
	"user-service/internal/usecase"
	"user-service/pkg/db"
	"user-service/pkg/logger"
)

type App struct {
	httpServer *http.Server
	grpcServer *grpc.Server
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

	// database
	db, err := db.InitDB("postgres", config.GetDatabaseDSN(cfg))
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
		return nil, err
	}

	// Initialize repository
	userRepo := repository.NewPostgresUserRepository(db)

	// Initialize use cases
	userService := usecase.NewUserService(userRepo)

	// ---- delivery layer ----
	httpServer := http.NewServer(fmt.Sprintf(":%d", 8080))
	grpcServer := grpc.NewServer(50051)

	grpcServer.RegisterHandler(grpc.NewUserGRPCHandler(userService))

	return &App{
		httpServer: httpServer,
		grpcServer: grpcServer,
	}, nil
}

func (a *App) Run() error {
	go func() {
		if err := a.httpServer.Start(); err != nil {
			log.Printf("http server stopped: %v", err)
		}
	}()

	if err := a.grpcServer.Start(); err != nil {
		return fmt.Errorf("grpc server stopped: %v", err)
	}

	return nil
}

func (a *App) Stop(ctx context.Context) error {
	if err := a.httpServer.Stop(ctx); err != nil {
		return err
	}
	if err := a.grpcServer.Stop(ctx); err != nil {
		return err
	}
	return nil
}
