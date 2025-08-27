package app

import (
	"common-service/pkg/db/mongodb"
	grpcserver "common-service/pkg/grpc/server"
	"context"
	"fmt"
)

type App struct {
	ctx        context.Context
	grpcServer *grpcserver.GrpcServer
}

func NewApp(ctx context.Context) *App {
	db, err := mongodb.NewMongoDBClient(mongodb.Config{
		URI:      "mongodb://indal:indal@localhost:27017",
		Database: "role_service",
	})
	if err != nil {
		fmt.Println("Failed to connect to MongoDB:", err)
		return nil
	}
	fmt.Println(db)
	grpcServer := grpcserver.NewGrpcServer(50051)

	db.CreateCollection("roles")

	return &App{
		ctx:        ctx,
		grpcServer: grpcServer,
	}
}

func (a *App) Run() error {
	if err := a.grpcServer.Serve(); err != nil {
		return err
	}
	return nil
}

func (a *App) Shutdown() error {
	a.grpcServer.Stop()
	return nil
}
