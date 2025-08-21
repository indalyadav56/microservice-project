package logger

import (
	"os"
	"time"

	"github.com/rs/zerolog"
)

// Logger wraps zerolog logger
type Logger struct {
	logger zerolog.Logger
}

// New creates a new logger instance
func New(level, format string) *Logger {
	// Set log level
	logLevel, err := zerolog.ParseLevel(level)
	if err != nil {
		logLevel = zerolog.InfoLevel
	}

	// Configure output format
	var output zerolog.ConsoleWriter
	if format == "json" {
		output = zerolog.ConsoleWriter{Out: os.Stdout, TimeFormat: time.RFC3339}
	} else {
		output = zerolog.ConsoleWriter{
			Out:        os.Stdout,
			TimeFormat: time.RFC3339,
			FormatLevel: func(i interface{}) string {
				if ll, ok := i.(string); ok {
					switch ll {
					case "trace":
						return "\x1b[37mTRACE\x1b[0m"
					case "debug":
						return "\x1b[36mDEBUG\x1b[0m"
					case "info":
						return "\x1b[32mINFO\x1b[0m"
					case "warn":
						return "\x1b[33mWARN\x1b[0m"
					case "error":
						return "\x1b[31mERROR\x1b[0m"
					case "fatal":
						return "\x1b[35mFATAL\x1b[0m"
					case "panic":
						return "\x1b[35mPANIC\x1b[0m"
					default:
						return ll
					}
				}
				return ""
			},
		}
	}

	logger := zerolog.New(output).Level(logLevel).With().Timestamp().Logger()

	return &Logger{
		logger: logger,
	}
}

// Info logs an info message
func (l *Logger) Info(msg string, fields map[string]interface{}) {
	event := l.logger.Info()
	for key, value := range fields {
		event = event.Interface(key, value)
	}
	event.Msg(msg)
}

// Error logs an error message
func (l *Logger) Error(msg string, err error, fields map[string]interface{}) {
	event := l.logger.Error().Err(err)
	for key, value := range fields {
		event = event.Interface(key, value)
	}
	event.Msg(msg)
}

// Debug logs a debug message
func (l *Logger) Debug(msg string, fields map[string]interface{}) {
	event := l.logger.Debug()
	for key, value := range fields {
		event = event.Interface(key, value)
	}
	event.Msg(msg)
}

// Warn logs a warning message
func (l *Logger) Warn(msg string, fields map[string]interface{}) {
	event := l.logger.Warn()
	for key, value := range fields {
		event = event.Interface(key, value)
	}
	event.Msg(msg)
}

// Fatal logs a fatal message and exits
func (l *Logger) Fatal(msg string, err error, fields map[string]interface{}) {
	event := l.logger.Fatal().Err(err)
	for key, value := range fields {
		event = event.Interface(key, value)
	}
	event.Msg(msg)
}

// WithContext returns a logger with additional context
func (l *Logger) WithContext(fields map[string]interface{}) *Logger {
	logger := l.logger
	for key, value := range fields {
		logger = logger.With().Interface(key, value).Logger()
	}
	return &Logger{logger: logger}
}

// GetZerolog returns the underlying zerolog logger
func (l *Logger) GetZerolog() zerolog.Logger {
	return l.logger
}
