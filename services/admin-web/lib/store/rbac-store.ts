import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  createdAt: string
  updatedAt: string
}

export interface Permission {
  id: string
  name: string
  description: string
  resource: string
  action: string
  createdAt: string
  updatedAt: string
}

export interface RBACState {
  // State
  users: User[]
  roles: Role[]
  permissions: Permission[]
  selectedUser: User | null
  selectedRole: Role | null
  selectedPermission: Permission | null
  isLoading: boolean
  error: string | null
  
  // Actions
  setUsers: (users: User[]) => void
  setRoles: (roles: Role[]) => void
  setPermissions: (permissions: Permission[]) => void
  setSelectedUser: (user: User | null) => void
  setSelectedRole: (role: Role | null) => void
  setSelectedPermission: (permission: Permission | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // User actions
  addUser: (user: User) => void
  updateUser: (id: string, updates: Partial<User>) => void
  deleteUser: (id: string) => void
  toggleUserStatus: (id: string) => void
  
  // Role actions
  addRole: (role: Role) => void
  updateRole: (id: string, updates: Partial<Role>) => void
  deleteRole: (id: string) => void
  assignPermissionToRole: (roleId: string, permissionId: string) => void
  removePermissionFromRole: (roleId: string, permissionId: string) => void
  
  // Permission actions
  addPermission: (permission: Permission) => void
  updatePermission: (id: string, updates: Partial<Permission>) => void
  deletePermission: (id: string) => void
  
  // Utility actions
  getUserById: (id: string) => User | undefined
  getRoleById: (id: string) => Role | undefined
  getPermissionById: (id: string) => Permission | undefined
  getUsersByRole: (roleName: string) => User[]
  getPermissionsByRole: (roleId: string) => Permission[]
  clearError: () => void
  reset: () => void
}

const initialState = {
  users: [],
  roles: [],
  permissions: [],
  selectedUser: null,
  selectedRole: null,
  selectedPermission: null,
  isLoading: false,
  error: null,
}

export const useRBACStore = create<RBACState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Setters
        setUsers: (users) => set({ users }),
        setRoles: (roles) => set({ roles }),
        setPermissions: (permissions) => set({ permissions }),
        setSelectedUser: (user) => set({ selectedUser: user }),
        setSelectedRole: (role) => set({ selectedRole: role }),
        setSelectedPermission: (permission) => set({ selectedPermission: permission }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),

        // User actions
        addUser: (user) => set((state) => ({ 
          users: [...state.users, user] 
        })),
        
        updateUser: (id, updates) => set((state) => ({
          users: state.users.map(user => 
            user.id === id ? { ...user, ...updates } : user
          )
        })),
        
        deleteUser: (id) => set((state) => ({
          users: state.users.filter(user => user.id !== id)
        })),
        
        toggleUserStatus: (id) => set((state) => ({
          users: state.users.map(user =>
            user.id === id ? { ...user, isActive: !user.isActive } : user
          )
        })),

        // Role actions
        addRole: (role) => set((state) => ({ 
          roles: [...state.roles, role] 
        })),
        
        updateRole: (id, updates) => set((state) => ({
          roles: state.roles.map(role => 
            role.id === id ? { ...role, ...updates } : role
          )
        })),
        
        deleteRole: (id) => set((state) => ({
          roles: state.roles.filter(role => role.id !== id)
        })),
        
        assignPermissionToRole: (roleId, permissionId) => set((state) => ({
          roles: state.roles.map(role =>
            role.id === roleId
              ? { ...role, permissions: [...role.permissions, permissionId] }
              : role
          )
        })),
        
        removePermissionFromRole: (roleId, permissionId) => set((state) => ({
          roles: state.roles.map(role =>
            role.id === roleId
              ? { ...role, permissions: role.permissions.filter(p => p !== permissionId) }
              : role
          )
        })),

        // Permission actions
        addPermission: (permission) => set((state) => ({ 
          permissions: [...state.permissions, permission] 
        })),
        
        updatePermission: (id, updates) => set((state) => ({
          permissions: state.permissions.map(permission => 
            permission.id === id ? { ...permission, ...updates } : permission
          )
        })),
        
        deletePermission: (id) => set((state) => ({
          permissions: state.permissions.filter(permission => permission.id !== id)
        })),

        // Utility actions
        getUserById: (id) => get().users.find(user => user.id === id),
        getRoleById: (id) => get().roles.find(role => role.id === id),
        getPermissionById: (id) => get().permissions.find(permission => permission.id === id),
        
        getUsersByRole: (roleName) => 
          get().users.filter(user => user.role === roleName),
        
        getPermissionsByRole: (roleId) => {
          const role = get().getRoleById(roleId)
          if (!role) return []
          return get().permissions.filter(permission => 
            role.permissions.includes(permission.id)
          )
        },
        
        clearError: () => set({ error: null }),
        reset: () => set(initialState),
      }),
      {
        name: 'rbac-store',
        partialize: (state) => ({
          users: state.users,
          roles: state.roles,
          permissions: state.permissions,
        }),
      }
    ),
    {
      name: 'rbac-store',
    }
  )
)
