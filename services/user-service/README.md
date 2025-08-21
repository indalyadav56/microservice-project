# User Service

A comprehensive user management microservice built with Go, following clean architecture principles. This service provides both gRPC and REST API endpoints for user authentication and management.

## Features

- **Clean Architecture**: Follows Go best practices with clear separation of concerns
- **Dual API Support**: Both gRPC and REST API endpoints
- **JWT Authentication**: Secure token-based authentication
- **PostgreSQL Database**: Persistent data storage
- **Structured Logging**: Comprehensive logging with zerolog
- **Configuration Management**: Environment-based configuration
- **Docker Support**: Containerized deployment
- **Health Checks**: Built-in health monitoring

## Architecture

```
user-service/
├── cmd/                    # Application entry points
├── configs/               # Configuration management
├── internal/              # Private application code
│   ├── delivery/          # Transport layer (gRPC, HTTP)
│   ├── domain/            # Business logic and interfaces
│   ├── repository/        # Data access layer
│   └── usecase/           # Application business logic
├── pkg/                   # Public packages
│   └── logger/            # Logging utilities
├── proto/                 # Protocol buffer definitions
├── pb/                    # Generated protobuf code
└── scripts/               # Build and deployment scripts
```

## Prerequisites

- Go 1.24.5 or higher
- PostgreSQL 12 or higher
- Protocol Buffers compiler
- Docker (optional)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-service
   ```

2. **Install dependencies**
   ```bash
   go mod download
   ```

3. **Install protobuf plugins**
   ```bash
   make install-proto
   ```

4. **Set up environment variables**
   ```bash
   export GRPC_PORT=50051
   export HTTP_PORT=8080
   export DB_HOST=localhost
   export DB_PORT=5432
   export DB_USERNAME=postgres
   export DB_PASSWORD=password
   export DB_NAME=user_service
   export JWT_SECRET_KEY=your-secret-key
   export JWT_EXPIRY_HOURS=24
   export LOG_LEVEL=info
   export LOG_FORMAT=json
   ```

5. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE user_service;
   ```

## Usage

### Development

1. **Generate protobuf code**
   ```bash
   make proto
   ```

2. **Build the application**
   ```bash
   make build
   ```

3. **Run the service**
   ```bash
   make run
   ```

### Docker

1. **Build Docker image**
   ```bash
   make docker-build
   ```

2. **Run with Docker**
   ```bash
   make docker-run
   ```

## API Endpoints

### gRPC Endpoints

The service exposes the following gRPC methods:

- `Login(LoginRequest) returns (LoginResponse)`
- `Register(RegisterRequest) returns (RegisterResponse)`
- `ValidateToken(ValidateTokenRequest) returns (ValidateTokenResponse)`
- `GetUser(GetUserRequest) returns (GetUserResponse)`
- `UpdateUser(UpdateUserRequest) returns (UpdateUserResponse)`
- `DeleteUser(DeleteUserRequest) returns (DeleteUserResponse)`
- `ListUsers(ListUsersRequest) returns (ListUsersResponse)`

### REST API Endpoints

The service also provides REST API endpoints through gRPC-gateway:

- `POST /v1/auth/login` - User login
- `POST /v1/auth/register` - User registration
- `POST /v1/auth/validate` - Token validation
- `GET /v1/users/{id}` - Get user by ID
- `PUT /v1/users/{id}` - Update user
- `DELETE /v1/users/{id}` - Delete user
- `GET /v1/users` - List users with pagination

## Configuration

The service uses environment variables for configuration:

| Variable | Default | Description |
|----------|---------|-------------|
| `GRPC_PORT` | 50051 | gRPC server port |
| `HTTP_PORT` | 8080 | HTTP server port |
| `DB_HOST` | localhost | Database host |
| `DB_PORT` | 5432 | Database port |
| `DB_USERNAME` | postgres | Database username |
| `DB_PASSWORD` | password | Database password |
| `DB_NAME` | user_service | Database name |
| `JWT_SECRET_KEY` | your-secret-key | JWT signing key |
| `JWT_EXPIRY_HOURS` | 24 | JWT token expiry in hours |
| `LOG_LEVEL` | info | Logging level |
| `LOG_FORMAT` | json | Logging format |

## Testing

Run the test suite:

```bash
make test
```

## Development

### Project Structure

- **Domain Layer**: Contains business entities and interfaces
- **Use Case Layer**: Implements business logic
- **Repository Layer**: Handles data persistence
- **Delivery Layer**: Manages transport protocols (gRPC, HTTP)

### Adding New Features

1. Define protobuf messages in `proto/auth.proto`
2. Generate code with `make proto`
3. Implement business logic in usecase layer
4. Add repository methods if needed
5. Update gRPC handler
6. Add tests

## Deployment

### Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  user-service:
    build: .
    ports:
      - "50051:50051"
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USERNAME=postgres
      - DB_PASSWORD=password
      - DB_NAME=user_service
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_DB=user_service
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Run with:
```bash
docker-compose up -d
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.
