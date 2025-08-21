package app

import (
	"context"
	"log"

	"user-service/internal/config"
	"user-service/internal/delivery/grpc"
	"user-service/internal/delivery/http"
)

type App struct {
	httpServer *http.Server
	grpcServer *grpc.Server
}

func NewApp(ctx context.Context, cfg *config.Config) (*App, error) {
	// // // Load configuration
	// // cfg, err := config.Load()
	// // if err != nil {
	// // 	log.Fatalf("Failed to load config: %v", err)
	// // }

	// // Initialize repository
	// userRepo := repository.NewInMemoryUserRepository()

	// // Initialize use cases
	// userService := usecase.NewUserService(userRepo)

	// // ---- delivery layer ----
	// httpServer := http.NewServer(fmt.Sprintf(":%d", cfg.HTTP.Port), userService)
	// grpcServer := grpc.NewServer(cfg.GRPC.Port, userService)

	// return &App{
	// 	httpServer: httpServer,
	// 	grpcServer: grpcServer,
	// }, nil

	return nil, nil
}

func (a *App) Run() error {
	// Run both HTTP and gRPC servers
	go func() {
		if err := a.httpServer.Start(); err != nil {
			log.Printf("http server stopped: %v", err)
		}
	}()
	return a.grpcServer.Start()
}

func (a *App) Stop(ctx context.Context) error {
	// Graceful shutdown
	// if err := a.httpServer.Stop(ctx); err != nil {
	// 	return err
	// }
	// return a.grpcServer.Stop(ctx)
	return nil
}
