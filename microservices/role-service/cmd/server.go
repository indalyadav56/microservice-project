package main

import (
	"context"
	"role-service/internal/app"
)

func main() {
	app := app.NewApp(context.Background())
	if err := app.Run(); err != nil {
		panic(err)
	}

	defer app.Shutdown()
}
