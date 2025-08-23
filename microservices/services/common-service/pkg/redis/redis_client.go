package redis

import (
	"context"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
)

// Config holds Redis connection parameters
type Config struct {
	Host           string        `json:"host" yaml:"host"`
	Port           int           `json:"port" yaml:"port"`
	Password       string        `json:"password" yaml:"password"`
	DB             int           `json:"db" yaml:"db"`
	MaxPoolSize    int           `json:"max_pool_size" yaml:"max_pool_size"`
	ConnectTimeout time.Duration `json:"connect_timeout" yaml:"connect_timeout"`
	ReadTimeout    time.Duration `json:"read_timeout" yaml:"read_timeout"`
	WriteTimeout   time.Duration `json:"write_timeout" yaml:"write_timeout"`
}

// Client manages Redis connections
type Client struct {
	client *redis.Client
}

// NewClient creates a new Redis client with validation
func NewClient(cfg Config) (*Client, error) {
	// Validate required fields
	if cfg.Host == "" || cfg.Port == 0 {
		return nil, fmt.Errorf("missing required Redis configuration: host or port")
	}

	// Configure connection options
	options := &redis.Options{
		Addr:         fmt.Sprintf("%s:%d", cfg.Host, cfg.Port),
		Password:     cfg.Password,
		DB:           cfg.DB,
		PoolSize:     cfg.MaxPoolSize,
		DialTimeout:  cfg.ConnectTimeout,
		ReadTimeout:  cfg.ReadTimeout,
		WriteTimeout: cfg.WriteTimeout,
	}

	// Create client
	client := redis.NewClient(options)

	// Verify connection with health check
	if _, err := client.Ping(context.Background()).Result(); err != nil {
		return nil, fmt.Errorf("failed to connect to Redis: %w", err)
	}

	return &Client{client: client}, nil
}

// Close terminates the Redis connection
func (c *Client) Close() error {
	return c.client.Close()
}

// Ping checks Redis connection health
func (c *Client) Ping() error {
	_, err := c.client.Ping(context.Background()).Result()
	return err
}

// Get returns a value from Redis (example method)
func (c *Client) Get(ctx context.Context, key string) (string, error) {
	return c.client.Get(ctx, key).Result()
}

// Set stores a value in Redis (example method)
func (c *Client) Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error {
	return c.client.Set(ctx, key, value, expiration).Err()
}
