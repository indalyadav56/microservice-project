package http

import (
	"context"
	"fmt"
	"net/http"
	"time"
)

type Server struct {
	server   *http.Server
	httpAddr string
}

func NewServer(httpAddr string) *Server {
	return &Server{
		httpAddr: httpAddr,
	}
}

// Start starts the HTTP server
func (s *Server) Start() error {
	// Create HTTP server with basic health check and swagger
	mux := http.NewServeMux()
	mux.HandleFunc("/health", s.healthHandler)

	// Add swagger routes
	swaggerHandler := NewSwaggerHandler()
	mux.HandleFunc("/swagger.json", swaggerHandler.ServeSwagger)
	mux.HandleFunc("/swagger-ui/", swaggerHandler.ServeSwaggerUI)

	// Create HTTP server
	s.server = &http.Server{
		Addr:         s.httpAddr,
		Handler:      s.setupMiddleware(mux),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	fmt.Printf("HTTP server starting on %s\n", s.httpAddr)
	return s.server.ListenAndServe()
}

// healthHandler handles health check requests
func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status":"ok","service":"user-service"}`))
}

// Stop gracefully stops the HTTP server
func (s *Server) Stop(ctx context.Context) error {
	if s.server != nil {
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		return s.server.Shutdown(ctx)
	}
	return nil
}

// setupMiddleware sets up HTTP middleware
func (s *Server) setupMiddleware(handler http.Handler) http.Handler {
	return s.corsMiddleware(handler)
}

// corsMiddleware adds CORS headers
func (s *Server) corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Max-Age", "86400")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// errorHandler handles HTTP errors
func (s *Server) errorHandler(w http.ResponseWriter, r *http.Request, err error) {
	fmt.Printf("HTTP error: %v\n", err)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusInternalServerError)

	// In a real implementation, you would properly marshal this
	w.Write([]byte(`{"error":"Internal server error","message":"` + err.Error() + `"}`))
}

// responseWriter wraps http.ResponseWriter to capture status code
type responseWriter struct {
	http.ResponseWriter
	statusCode int
}

func (rw *responseWriter) WriteHeader(code int) {
	rw.statusCode = code
	rw.ResponseWriter.WriteHeader(code)
}
