package domain

type AuthService interface {
	Login(email, password string) (string, error)
	Register(email, username, password string) error
}
