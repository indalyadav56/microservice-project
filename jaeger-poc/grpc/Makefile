.PHONY: help build up down logs test clean client

# Default target
help:
	@echo "Jaeger gRPC POC - Distributed Tracing Demo"
	@echo "=========================================="
	@echo ""
	@echo "Available commands:"
	@echo "  build    - Build all Docker images"
	@echo "  up       - Start all services"
	@echo "  down     - Stop all services"
	@echo "  logs     - Show logs from all services"
	@echo "  test     - Run gRPC client tests"
	@echo "  clean    - Remove all containers and images"
	@echo "  client   - Build and run gRPC client"
	@echo ""

# Build all images
build:
	@echo "Building gRPC Docker images..."
	docker-compose build

# Start all services
up:
	@echo "Starting gRPC services..."
	docker-compose up -d
	@echo "Services started!"
	@echo "Service A gRPC: localhost:9090"
	@echo "Service B gRPC: localhost:9091"
	@echo "Jaeger UI: http://localhost:16686"

# Stop all services
down:
	@echo "Stopping gRPC services..."
	docker-compose down

# Show logs
logs:
	docker-compose logs -f

# Run gRPC client tests
test:
	@echo "Running gRPC client tests..."
	cd client && go run main.go

# Build and run gRPC client
client:
	@echo "Building gRPC client..."
	cd client && go mod tidy && go run main.go

# Clean up everything
clean:
	@echo "Cleaning up..."
	docker-compose down -v --rmi all
	@echo "Cleanup complete!"

# Quick start (build and up)
start: build up
	@echo "gRPC services are ready!"
	@echo "Run 'make test' to test the services"
	@echo "Run 'make logs' to see service logs"
