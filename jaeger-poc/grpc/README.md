# Jaeger gRPC Distributed Tracing POC

This is a proof of concept demonstrating distributed tracing with Jaeger using gRPC services and OpenTelemetry. The setup includes two gRPC microservices that communicate with each other, with all requests being traced and visualized in the Jaeger UI.

## Architecture

```
┌─────────────┐    gRPC Request    ┌─────────────┐    gRPC Request    ┌─────────────┐
│   Client    │ ──────────────────► │ Service A   │ ──────────────────► │ Service B   │
│             │                     │   (9090)    │                     │   (9091)    │
└─────────────┘                     └─────────────┘                     └─────────────┘
                                             │                                │
                                             │                                │
                                             ▼                                ▼
                                    ┌─────────────────────────────────────────────────┐
                                    │                    Jaeger                      │
                                    │              (Port 16686)                      │
                                    └─────────────────────────────────────────────────┘
```

## Services

### Service A (Port 9090)
- Entry point for client requests
- Calls Service B for additional processing
- Implements distributed tracing with OpenTelemetry
- gRPC methods:
  - `Hello(HelloRequest) HelloResponse` - Simple hello message
  - `Work(WorkRequest) WorkResponse` - Performs work and calls Service B

### Service B (Port 9091)
- Downstream service that performs additional processing
- Implements distributed tracing with OpenTelemetry
- gRPC methods:
  - `Hello(HelloRequest) HelloResponse` - Simple hello message
  - `Work(WorkRequest) WorkResponse` - Performs work and returns results

### Jaeger (Port 16686)
- Distributed tracing backend
- Collects traces from both services
- Provides web UI for trace visualization

## Prerequisites

- Docker and Docker Compose
- Go 1.24+ (for local development)

## Quick Start

1. **Start the services:**
   ```bash
   cd grpc
   make start
   ```

2. **Test the services:**
   ```bash
   make test
   ```

3. **Access Jaeger UI:**
   - Open http://localhost:16686
   - Select a service (svc-a-grpc or svc-b-grpc)
   - Click "Find Traces"

## gRPC Methods

### Hello Method
```protobuf
rpc Hello(HelloRequest) returns (HelloResponse)

message HelloRequest {
    string name = 1;
}

message HelloResponse {
    string message = 1;
    string service = 2;
    int64 timestamp = 3;
}
```

### Work Method
```protobuf
rpc Work(WorkRequest) returns (WorkResponse)

message WorkRequest {
    string task = 1;
    int32 duration_ms = 2;
}

message WorkResponse {
    string message = 1;
    string service = 2;
    int32 processing_time_ms = 3;
    int64 timestamp = 4;
}
```

## Trace Flow Example

When you call `Work` method on Service A:

1. **Client** → **Service A** (`Work`)
   - Creates span: `ServiceA.Work`
   - Simulates work (50ms)
   - Calls Service B

2. **Service A** → **Service B** (`Work`)
   - Creates span: `ServiceA.callServiceB`
   - gRPC call to Service B

3. **Service B** (`Work`)
   - Creates span: `ServiceB.Work`
   - Simulates work (100ms)
   - Returns response

4. **Service A** receives response and completes

The trace will show the complete gRPC request flow with timing, making it easy to identify bottlenecks and understand service dependencies.

## Environment Variables

### Service A
- `OTEL_SERVICE_NAME=svc-a-grpc` - Service name for tracing

### Service B
- `OTEL_SERVICE_NAME=svc-b-grpc` - Service name for tracing

## Development

### Local Development
```bash
# Service A
cd svc-a
go mod tidy
go run main.go

# Service B
cd svc-b
go mod tidy
go run main.go

# Client
cd client
go mod tidy
go run main.go
```

### Building Images
```bash
# Build all services
make build

# Build individual services
docker build -t svc-a-grpc ./svc-a
docker build -t svc-b-grpc ./svc-b
```

## Key Features

- **gRPC Communication**: High-performance RPC calls between services
- **Distributed Tracing**: Complete request flow tracking across services
- **OpenTelemetry**: Standard tracing implementation
- **Jaeger Integration**: Powerful trace visualization
- **gRPC Instrumentation**: Automatic gRPC method and service tracking
- **Custom Attributes**: Additional metadata on spans
- **Error Tracking**: Automatic error recording in spans

## Available Commands

- `make help` - Show all available commands
- `make build` - Build Docker images
- `make up` - Start services in background
- `make down` - Stop all services
- `make logs` - Show service logs
- `make test` - Run gRPC client tests
- `make client` - Build and run gRPC client
- `make clean` - Remove all containers and images
- `make start` - Build and start (quick start)

## Troubleshooting

### Services not starting
- Check if ports 9090, 9091, and 16686 are available
- Ensure Docker is running
- Check logs: `make logs`

### No traces in Jaeger
- Verify services are running: `docker-compose ps`
- Check environment variables are set correctly
- Ensure Jaeger is accessible from services

### Build errors
- Run `go mod tidy` in service directories
- Ensure Go version is 1.24+
- Check Docker build logs

### gRPC connection issues
- Verify Service B is running before Service A
- Check network connectivity between containers
- Ensure correct port mappings

## Next Steps

This POC can be extended with:
- More complex gRPC service interactions
- Streaming gRPC calls with tracing
- Database operations with tracing
- Custom metrics and attributes
- Sampling configuration
- Production-ready Jaeger setup
- Integration with other observability tools
- Load testing with trace analysis

## Comparison with HTTP POC

| Feature | HTTP POC | gRPC POC |
|---------|----------|----------|
| Protocol | HTTP/REST | gRPC |
| Performance | Good | Excellent |
| Type Safety | JSON | Protocol Buffers |
| Code Generation | Manual | Automatic |
| Tracing | HTTP spans | gRPC spans |
| Complexity | Simple | Moderate |

The gRPC version provides better performance and type safety while maintaining the same distributed tracing capabilities.
