import type { ApiDocConfig } from '../types/api';

export const defaultApiConfig: ApiDocConfig = {
  apis: [
    {
      id: 'petstore',
      name: 'Petstore API',
      url: 'https://petstore.swagger.io/v2/swagger.json',
      description: 'Sample Petstore API for testing',
      isActive: true,
    },
    {
      id: 'weather',
      name: 'Weather API',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=demo',
      description: 'OpenWeatherMap API example',
      isActive: true,
    },
    {
      id: 'jsonplaceholder',
      name: 'JSONPlaceholder API',
      url: 'https://jsonplaceholder.typicode.com/',
      description: 'Fake Online REST API for Testing and Prototyping',
      isActive: true,
    },
    {
      id: 'github',
      name: 'GitHub API',
      url: 'https://api.github.com/',
      description: 'GitHub REST API v3',
      isActive: true,
    },
    {
      id: 'custom',
      name: 'Custom API',
      url: '',
      description: 'Add your own API endpoint',
      isActive: false,
    },
  ],
};

// Local storage key for saving custom configurations
export const STORAGE_KEY = 'scalar-api-docs-config';
