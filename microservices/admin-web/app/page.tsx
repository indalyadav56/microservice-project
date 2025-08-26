'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { useRBACStore } from '@/lib/store/rbac-store'
import { mockData } from '@/lib/api/rbac-api'
import { Users, Shield, Key, TrendingUp, Activity, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const {
    users,
    roles,
    permissions,
    setUsers,
    setRoles,
    setPermissions
  } = useRBACStore()

  // Load mock data on component mount
  useEffect(() => {
    if (users.length === 0) {
      setUsers(mockData.users)
    }
    if (roles.length === 0) {
      setRoles(mockData.roles)
    }
    if (permissions.length === 0) {
      setPermissions(mockData.permissions)
    }
  }, [users.length, roles.length, permissions.length, setUsers, setRoles, setPermissions])

  const activeUsers = users.filter(user => user.isActive).length
  const inactiveUsers = users.length - activeUsers
  const adminUsers = users.filter(user => user.role === 'admin').length
  const regularUsers = users.filter(user => user.role === 'user').length

  const stats = [
    {
      title: 'Total Users',
      value: users.length,
      description: 'Active and inactive users',
      icon: Users,
      trend: '+12%',
      trendUp: true,
    },
    {
      title: 'Active Users',
      value: activeUsers,
      description: 'Currently active users',
      icon: UserCheck,
      trend: '+8%',
      trendUp: true,
    },
    {
      title: 'Total Roles',
      value: roles.length,
      description: 'Available user roles',
      icon: Shield,
      trend: '+2',
      trendUp: true,
    },
    {
      title: 'Total Permissions',
      value: permissions.length,
      description: 'System permissions',
      icon: Key,
      trend: '+5',
      trendUp: true,
    },
  ]

  const recentUsers = users.slice(0, 5)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your RBAC administration dashboard
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            View Reports
          </Button>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <div className="flex items-center mt-2">
                <TrendingUp className={`h-3 w-3 mr-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-xs ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* User Overview */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>User Overview</CardTitle>
            <CardDescription>
              User distribution and activity status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Users</span>
                  <Badge variant="secondary">{activeUsers}</Badge>
                </div>
                <Progress value={(activeUsers / users.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Inactive Users</span>
                  <Badge variant="secondary">{inactiveUsers}</Badge>
                </div>
                <Progress value={(inactiveUsers / users.length) * 100} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Admin Users</span>
                  <Badge variant="destructive">{adminUsers}</Badge>
                </div>
                <Progress value={(adminUsers / users.length) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Regular Users</span>
                  <Badge variant="outline">{regularUsers}</Badge>
                </div>
                <Progress value={(regularUsers / users.length) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>
              Latest user registrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/avatars/${user.id}.png`} alt={user.firstName} />
                    <AvatarFallback>
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <Badge variant={user.isActive ? "default" : "secondary"}>
                    {user.role}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/users">View All Users</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </CardTitle>
            <CardDescription>
              Add, edit, or remove user accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link href="/users">View Users</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/users/new">Add New User</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Manage Roles
            </CardTitle>
            <CardDescription>
              Configure user roles and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link href="/roles">View Roles</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/roles/new">Create New Role</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-4 w-4" />
              Manage Permissions
            </CardTitle>
            <CardDescription>
              Define system permissions and access rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link href="/permissions">View Permissions</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/permissions/new">Add Permission</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
