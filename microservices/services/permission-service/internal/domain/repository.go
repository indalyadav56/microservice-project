package domain

type PermissionRepository interface {
	CreatePermission(permission *Permission) error
	GetPermission(id string) (*Permission, error)
	UpdatePermission(permission *Permission) error
	DeletePermission(id string) error
}
