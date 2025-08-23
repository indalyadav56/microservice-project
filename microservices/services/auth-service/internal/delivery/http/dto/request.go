package dto

type RegisterRequest struct {
	Email      string `json:"email" binding:"required,email" validate:"required,email"`
	FirstName  string `json:"first_name" binding:"required" validate:"required,min=3,max=50"`
	MiddleName string `json:"middle_name" binding:"omitempty" validate:"omitempty,min=3,max=50"`
	LastName   string `json:"last_name" binding:"required" validate:"required,min=3,max=50"`
	Password   string `json:"password" binding:"required" validate:"required,min=6"`
	Role       string `json:"role" binding:"required" validate:"required,oneof=user admin"`
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email" validate:"required,email"`
	Password string `json:"password" binding:"required" validate:"required,min=6"`
}
