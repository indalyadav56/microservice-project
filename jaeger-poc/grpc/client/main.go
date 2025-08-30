package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	pb "svc-a-grpc/pb"
)

func main() {
	// Connect to Service A
	conn, err := grpc.NewClient("localhost:9090", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewServiceAClient(conn)
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	// Test Hello method
	fmt.Println("Testing Service A Hello method...")
	helloResp, err := client.Hello(ctx, &pb.HelloRequest{Name: "World"})
	if err != nil {
		log.Fatalf("Hello failed: %v", err)
	}
	fmt.Printf("Hello Response: %s\n", helloResp.Message)

	// Test Work method
	fmt.Println("\nTesting Service A Work method...")
	workResp, err := client.Work(ctx, &pb.WorkRequest{Task: "test task", DurationMs: 100})
	if err != nil {
		log.Fatalf("Work failed: %v", err)
	}
	fmt.Printf("Work Response: %s\n", workResp.Message)

	fmt.Println("\n✅ All gRPC tests completed successfully!")
}
