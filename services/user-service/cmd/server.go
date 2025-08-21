package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"user-service/internal/app"
	"user-service/internal/config"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	cfg := config.Load() // load from env/file/flags

	application, err := app.NewApp(ctx, cfg)
	if err != nil {
		log.Fatalf("failed to create app: %v", err)
	}

	go func() {
		if err := application.Run(); err != nil {
			log.Fatalf("app run error: %v", err)
		}
	}()

	// graceful shutdown
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop

	if err := application.Stop(ctx); err != nil {
		log.Printf("error on shutdown: %v", err)
	}

	log.Println("application stopped gracefully")
}
