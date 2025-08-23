# Third-Party Dependencies

This directory contains third-party protobuf dependencies used by the user service.

## Dependencies

### 1. protoc-gen-validate
- **Purpose**: Provides validation rules for protobuf messages
- **Repository**: https://github.com/envoyproxy/protoc-gen-validate
- **Usage**: Adds validation annotations to protobuf messages for input validation

### 2. grpc-gateway
- **Purpose**: Generates HTTP/REST endpoints from gRPC services
- **Repository**: https://github.com/grpc-ecosystem/grpc-gateway
- **Usage**: Enables both gRPC and HTTP/REST APIs from the same protobuf definitions

### 3. googleapis
- **Purpose**: Google's official protobuf definitions and HTTP annotations
- **Repository**: https://github.com/googleapis/googleapis
- **Usage**: Provides HTTP annotation support for gRPC services

## Setup

1. Install the required tools:
```bash
make install-proto
```

2. Generate the protobuf code with validation and swagger:
```bash
make generate-proto
```

3. Generate swagger documentation:
```bash
make generate-swagger
```

## Validation Rules

The following validation rules are applied to the user service:

### User Message
- `id`: Must be a valid UUID
- `username`: 3-50 characters, alphanumeric and underscore only
- `email`: Must be a valid email format
- `first_name`: 1-50 characters
- `last_name`: 1-50 characters
- `role`: Must be one of ["admin", "user", "moderator"]

### RegisterRequest
- `username`: 3-50 characters, alphanumeric and underscore only
- `email`: Must be a valid email format
- `password`: 8-128 characters
- `first_name`: 1-50 characters
- `last_name`: 1-50 characters
- `role`: Must be one of ["admin", "user", "moderator"]

### Other Request Messages
- `GetUserRequest.id`: Must be a valid UUID
- `UpdateUserRequest.id`: Must be a valid UUID
- `DeleteUserRequest.id`: Must be a valid UUID
- `ListUsersRequest.limit`: 1-100
- `ListUsersRequest.offset`: >= 0
- `ValidateTokenRequest.token`: Minimum 1 character

## HTTP Endpoints

The following HTTP endpoints are automatically generated:

- `POST /v1/auth/register` - Register a new user
- `POST /v1/auth/validate` - Validate a token
- `GET /v1/users/{id}` - Get a user by ID
- `PUT /v1/users/{id}` - Update a user
- `DELETE /v1/users/{id}` - Delete a user
- `GET /v1/users` - List users with pagination

## Swagger Documentation

Swagger documentation is automatically generated and available at:
- `/swagger-ui/` - Swagger UI interface
- `/swagger.json` - OpenAPI specification
