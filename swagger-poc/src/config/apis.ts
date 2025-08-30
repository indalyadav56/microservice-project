import { ApiConfig } from '../types/api';

export const apiConfigs: ApiConfig[] = [
  {
    id: 'auth-service',
    name: 'Auth Service API',
    url: 'http://localhost:8081/docs/swagger/swagger.json',
    description: 'Authentication and authorization service API',
    isActive: true,
    category: 'Microservices'
  },
  {
    id: 'user-service',
    name: 'User Service API',
    url: 'http://localhost:8082/docs/swagger/swagger.json',
    description: 'User management service API',
    isActive: true,
    category: 'Microservices'
  },
  {
    id: 'role-service',
    name: 'Role Service API',
    url: 'http://localhost:8083/docs/swagger/swagger.json',
    description: 'Role management service API',
    isActive: true,
    category: 'Microservices'
  },
  {
    id: 'permission-service',
    name: 'Permission Service API',
    url: 'http://localhost:8084/docs/swagger/swagger.json',
    description: 'Permission management service API',
    isActive: true,
    category: 'Microservices'
  },
  {
    id: 'notification-service',
    name: 'Notification Service API',
    url: 'http://localhost:8085/docs/swagger/swagger.json',
    description: 'Notification service API',
    isActive: true,
    category: 'Microservices'
  },
  {
    id: 'petstore',
    name: 'Petstore API',
    url: 'https://petstore.swagger.io/v2/swagger.json',
    description: 'Sample Petstore API for testing',
    isActive: true,
    category: 'Examples'
  },
  {
    id: 'stripe',
    name: 'Stripe API',
    url: 'https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json',
    description: 'Stripe Payment API',
    isActive: true,
    category: 'Examples'
  },
  {
    id: 'github',
    name: 'GitHub API',
    url: 'https://api.github.com/',
    description: 'GitHub REST API v3',
    isActive: true,
    category: 'Examples'
  }
];

export const getActiveApis = (): ApiConfig[] => {
  return apiConfigs.filter(api => api.isActive);
};

export const getApisByCategory = (): Record<string, ApiConfig[]> => {
  return apiConfigs.reduce((acc, api) => {
    const category = api.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(api);
    return acc;
  }, {} as Record<string, ApiConfig[]>);
};
