package main

import (
	"fmt"

	"github.com/indalyadav56/rbac/microservices/common-service/pkg/db/mongodb"
)

func main() {
	db, err := mongodb.NewMongoDBClient(mongodb.Config{
		URI:            "mongodb://indal:indal@localhost:27017/?authSource=admin",
		ConnectTimeout: 10,
		MaxPoolSize:    10,
	})
	if err != nil {
		panic(err)
	}

	defer db.Close()

	fmt.Println("MongoDB connection established successfully")

}
