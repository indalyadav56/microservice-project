package mongodb

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type Config struct {
	Host           string        `json:"host" yaml:"host"`
	Port           int           `json:"port" yaml:"port"`
	Username       string        `json:"username" yaml:"username"`
	Password       string        `json:"password" yaml:"password"`
	Database       string        `json:"database" yaml:"database"`
	MaxPoolSize    int           `json:"max_pool_size" yaml:"max_pool_size"`
	ConnectTimeout time.Duration `json:"connect_timeout" yaml:"connect_timeout"`
}

type mongoClient struct {
	client *mongo.Client
	db     *mongo.Database
}

func NewMongoDBClient(cfg Config) (*mongoClient, error) {
	// Validate configuration
	if cfg.Host == "" || cfg.Port == 0 || cfg.Database == "" {
		return nil, fmt.Errorf("missing required MongoDB configuration: host, port, or database")
	}

	// Create connection URI
	uri := fmt.Sprintf(
		"mongodb://%s:%s@%s:%d/%s?connectTimeoutMS=%d",
		cfg.Username,
		cfg.Password,
		cfg.Host,
		cfg.Port,
		cfg.Database,
		cfg.ConnectTimeout.Milliseconds(),
	)

	// Set up client options
	opts := options.Client().
		ApplyURI(uri).
		SetMaxPoolSize(uint64(cfg.MaxPoolSize)).
		SetConnectTimeout(cfg.ConnectTimeout)

	// Create client
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to MongoDB: %w", err)
	}

	// Verify connection
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		return nil, fmt.Errorf("failed to ping MongoDB: %w", err)
	}

	// Create database instance
	db := client.Database(cfg.Database)

	return &mongoClient{
		client: client,
		db:     db,
	}, nil
}

// DB returns the current database instance
func (c *mongoClient) DB() *mongo.Database {
	return c.db
}

// Close terminates the MongoDB connection
func (c *mongoClient) Close() error {
	if c.client == nil {
		return nil
	}
	return c.client.Disconnect(context.TODO())
}

// Ping checks the health of the MongoDB connection
func (c *mongoClient) Ping() error {
	return c.client.Ping(context.TODO(), readpref.Primary())
}
