package app

import (
	"context"
	"fmt"
	"log"

	"user-service/internal/config"
	"user-service/internal/delivery/grpc"
	grpcmiddlewares "user-service/internal/delivery/grpc/middlewares"
	grpcserver "user-service/internal/delivery/grpc/server"
	"user-service/internal/delivery/http"
	"user-service/internal/domain"
	"user-service/internal/repository"
	"user-service/internal/usecase"
	"user-service/pb"
	"user-service/pkg/db"
	"user-service/pkg/logger"
)

type App struct {
	httpServer *http.Server
	grpcServer *grpcserver.Server
}

func NewApp(ctx context.Context) (*App, error) {
	// Load configuration
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
		return nil, err
	}

	fmt.Println()
	fmt.Println("========= Config ========= ")
	fmt.Println()

	fmt.Println(cfg)

	fmt.Println()
	fmt.Println("========= Config ========= ")
	fmt.Println()

	// logging
	logger.InitLogger(cfg.App.LogLevel)

	// database
	dbConn, err := db.InitDB("postgres", config.GetDatabaseDSN(cfg))
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
		return nil, err
	}

	// migrations
	if err := db.ApplyMigrations(dbConn, "postgres", "./migrations"); err != nil {
		log.Fatalf("Failed to apply migrations: %v", err)
		return nil, err
	}

	// Initialize repository
	userRepo := repository.NewPostgresUserRepository(dbConn)

	// Initialize use cases
	userService := usecase.NewUserService(userRepo)

	// create admin user
	if err := userService.CreateAdminUser(); err != nil {
		if err == domain.ErrUserAlreadyExists {
			log.Println("Admin user already exists, skipping creation")
		} else {
			log.Fatalf("Failed to create admin user: %v", err)
			return nil, err
		}
	}

	// ---- delivery layer ----
	httpServer := http.NewServer(fmt.Sprintf(":%d", cfg.HTTP.Port))

	// gRPC server
	log.Printf("Starting gRPC server on port %d", cfg.GRPC.Port)
	grpcServer, err := grpcserver.NewServer(cfg.GRPC.Port, grpcmiddlewares.GrpcLoggingMiddleware())
	if err != nil {
		log.Fatalf("Failed: %v", err)
		return nil, err
	}

	// register gRPC services
	pb.RegisterUserServiceServer(grpcServer.GrpcServer, grpc.NewUserGRPCHandler(userService))

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
