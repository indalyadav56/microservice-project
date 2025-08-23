package http

import (
	"encoding/json"
	"net/http"
)

// ValidationMiddleware is an HTTP middleware that validates incoming JSON requests
func ValidationMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Only validate POST, PUT, PATCH requests
		if r.Method == "GET" || r.Method == "DELETE" {
			next.ServeHTTP(w, r)
			return
		}

		// Check if the request has a body
		if r.Body == nil {
			http.Error(w, "Request body is required", http.StatusBadRequest)
			return
		}

		// Parse the JSON body
		var requestBody map[string]interface{}
		if err := json.NewDecoder(r.Body).Decode(&requestBody); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// For now, we'll do basic validation
		// In a real implementation, you would map the JSON to your protobuf message
		// and call the Validate() method

		next.ServeHTTP(w, r)
	}
}

// ValidationError represents a validation error
type ValidationError struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}

// ValidationResponse represents a validation error response
type ValidationResponse struct {
	Success bool              `json:"success"`
	Message string            `json:"message"`
	Errors  []ValidationError `json:"errors,omitempty"`
}

// WriteValidationError writes a validation error response
func WriteValidationError(w http.ResponseWriter, err error) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)

	response := ValidationResponse{
		Success: false,
		Message: "Validation failed",
	}

	// if validationErr, ok := err.(validate.ValidationError); ok {
	// 	response.Errors = append(response.Errors, ValidationError{
	// 		Field:   validationErr.Field(),
	// 		Message: validationErr.Error(),
	// 	})
	// } else {
	// 	response.Message = err.Error()
	// }

	json.NewEncoder(w).Encode(response)
}
