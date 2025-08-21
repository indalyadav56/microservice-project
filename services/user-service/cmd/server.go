package main

import (
	"context"
	"log"

	"user-service/internal/app"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	application, err := app.NewApp(ctx)
	if err != nil {
		log.Fatalf("failed to create app: %v", err)
	}

	if err := application.Run(); err != nil {
		log.Fatalf("app run error: %v", err)
	}

	defer application.Stop(ctx)
}
