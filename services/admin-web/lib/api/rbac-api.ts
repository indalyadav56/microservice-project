import axios from 'axios'
import { User, Role, Permission } from '../store/rbac-store'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth-token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// User API
export const userAPI = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    const response = await api.get('/users')
    return response.data.users || response.data
  },

  // Get user by ID
  getUser: async (id: string): Promise<User> => {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  // Create user
  createUser: async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    const response = await api.post('/users', userData)
    return response.data
  },

  // Update user
  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    const response = await api.put(`/users/${id}`, userData)
    return response.data
  },

  // Delete user
  deleteUser: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`)
  },

  // Toggle user status
  toggleUserStatus: async (id: string): Promise<User> => {
    const response = await api.patch(`/users/${id}/toggle-status`)
    return response.data
  },
}

// Role API
export const roleAPI = {
  // Get all roles
  getRoles: async (): Promise<Role[]> => {
    const response = await api.get('/roles')
    return response.data.roles || response.data
  },

  // Get role by ID
  getRole: async (id: string): Promise<Role> => {
    const response = await api.get(`/roles/${id}`)
    return response.data
  },

  // Create role
  createRole: async (roleData: Omit<Role, 'id' | 'createdAt' | 'updatedAt'>): Promise<Role> => {
    const response = await api.post('/roles', roleData)
    return response.data
  },

  // Update role
  updateRole: async (id: string, roleData: Partial<Role>): Promise<Role> => {
    const response = await api.put(`/roles/${id}`, roleData)
    return response.data
  },

  // Delete role
  deleteRole: async (id: string): Promise<void> => {
    await api.delete(`/roles/${id}`)
  },

  // Assign permission to role
  assignPermission: async (roleId: string, permissionId: string): Promise<Role> => {
    const response = await api.post(`/roles/${roleId}/permissions`, { permissionId })
    return response.data
  },

  // Remove permission from role
  removePermission: async (roleId: string, permissionId: string): Promise<Role> => {
    const response = await api.delete(`/roles/${roleId}/permissions/${permissionId}`)
    return response.data
  },
}

// Permission API
export const permissionAPI = {
  // Get all permissions
  getPermissions: async (): Promise<Permission[]> => {
    const response = await api.get('/permissions')
    return response.data.permissions || response.data
  },

  // Get permission by ID
  getPermission: async (id: string): Promise<Permission> => {
    const response = await api.get(`/permissions/${id}`)
    return response.data
  },

  // Create permission
  createPermission: async (permissionData: Omit<Permission, 'id' | 'createdAt' | 'updatedAt'>): Promise<Permission> => {
    const response = await api.post('/permissions', permissionData)
    return response.data
  },

  // Update permission
  updatePermission: async (id: string, permissionData: Partial<Permission>): Promise<Permission> => {
    const response = await api.put(`/permissions/${id}`, permissionData)
    return response.data
  },

  // Delete permission
  deletePermission: async (id: string): Promise<void> => {
    await api.delete(`/permissions/${id}`)
  },
}

// Auth API
export const authAPI = {
  // Login
  login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  },

  // Logout
  logout: async (): Promise<void> => {
    await api.post('/auth/logout')
  },

  // Get current user
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/auth/me')
    return response.data
  },

  // Refresh token
  refreshToken: async (): Promise<{ token: string }> => {
    const response = await api.post('/auth/refresh')
    return response.data
  },
}

// Mock data for development (when API is not available)
export const mockData = {
  users: [
    {
      id: '1',
      email: 'admin@example.com',
      firstName: 'System',
      lastName: 'Administrator',
      role: 'admin',
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user',
      isActive: true,
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  ],
  roles: [
    {
      id: '1',
      name: 'admin',
      description: 'Full system administrator with all permissions',
      permissions: ['1', '2', '3', '4', '5'],
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'user',
      description: 'Standard user with limited permissions',
      permissions: ['1'],
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '3',
      name: 'moderator',
      description: 'Moderator with content management permissions',
      permissions: ['1', '2', '3'],
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ],
  permissions: [
    {
      id: '1',
      name: 'read:users',
      description: 'Read user information',
      resource: 'users',
      action: 'read',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'write:users',
      description: 'Create and update users',
      resource: 'users',
      action: 'write',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '3',
      name: 'delete:users',
      description: 'Delete users',
      resource: 'users',
      action: 'delete',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '4',
      name: 'manage:roles',
      description: 'Manage roles and permissions',
      resource: 'roles',
      action: 'manage',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '5',
      name: 'system:admin',
      description: 'Full system administration',
      resource: 'system',
      action: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ],
}

export default api
