FROM golang:1.24-alpine AS build
WORKDIR /app
COPY go.mod .
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o /svc-a-grpc

# run
FROM gcr.io/distroless/static-debian12
COPY --from=build /svc-a-grpc /svc-a-grpc
EXPOSE 9090
ENTRYPOINT ["/svc-a-grpc"]
