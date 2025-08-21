package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	App  AppConfig
	HTTP HTTPConfig
	GRPC GRPCConfig
	DB   DBConfig
}

type AppConfig struct {
	Name     string
	LogLevel string
}

type HTTPConfig struct {
	Host string
	Port int
}

type GRPCConfig struct {
	Host string
	Port int
}

type DBConfig struct {
	Driver string
	DSN    string
}

func Load() *Config {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./configs")

	// allow overriding via env vars like APP_NAME, HTTP_PORT
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("failed to read config: %v", err)
	}

	var cfg Config
	if err := viper.Unmarshal(&cfg); err != nil {
		log.Fatalf("failed to unmarshal config: %v", err)
	}

	return &cfg
}
