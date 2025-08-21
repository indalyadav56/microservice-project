.PHONY: proto build run clean test docker-build docker-run

# Generate protobuf, gRPC, and gRPC-gateway code
lint-proto:
	go tool buf lint --config buf.yaml

generate-proto:
	buf generate --template buf.gen.yaml

proto:
	mkdir -p pb
	protoc \
		-Iapi/proto \
		--go_out=pb --go_opt=paths=source_relative \
		--go-grpc_out=pb --go-grpc_opt=paths=source_relative \
		--grpc-gateway_out=pb --grpc-gateway_opt=paths=source_relative \
		user.proto

# Build the application
build: proto
	go build -o bin/server ./cmd/server.go

# Run the application
run: build
	./bin/server

# Run tests
test:
	go test -v ./...

# Clean build artifacts
clean:
	rm -rf bin/
	rm -f pb/proto/*.pb.go
	rm -f pb/*.pb.go

# Install protobuf plugins (run this once)
install-proto:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest

# Docker build
docker-build:
	docker build -t user-service .

# Docker run
docker-run:
	docker run -p 50051:50051 -p 8080:8080 user-service

# Database migration commands using goose
install-goose:
	go install github.com/pressly/goose/v3/cmd/goose@latest

migrate-create:
	@read -p "Enter migration name: " name; \
	goose -dir mgirations create $$name sql

migrate-up:
	goose -dir mgirations postgres "host=localhost port=5432 user=postgres password=postgres dbname=user_service sslmode=disable" up

migrate-down:
	goose -dir mgirations postgres "host=localhost port=5432 user=postgres password=postgres dbname=user_service sslmode=disable" down

migrate-status:
	goose -dir mgirations postgres "host=localhost port=5432 user=postgres password=postgres dbname=user_service sslmode=disable" status

migrate-reset:
	goose -dir mgirations postgres "host=localhost port=5432 user=postgres password=postgres dbname=user_service sslmode=disable" reset

# Help target
help:
	@echo "Available targets:"
	@echo "  proto        - Generate protobuf, gRPC, and gRPC-gateway code"
	@echo "  build        - Build the application"
	@echo "  run          - Run the application"
	@echo "  test         - Run tests"
	@echo "  clean        - Clean build artifacts"
	@echo "  install-proto - Install protobuf plugins"
	@echo "  docker-build - Build Docker image"
	@echo "  docker-run   - Run Docker container"
	@echo "  install-goose - Install goose migration tool"
	@echo "  migrate-create - Create a new migration file"
	@echo "  migrate-up   - Run all pending migrations"
	@echo "  migrate-down - Rollback the last migration"
	@echo "  migrate-status - Show migration status"
	@echo "  migrate-reset - Rollback all migrations"
	@echo "  help         - Show this help message"


