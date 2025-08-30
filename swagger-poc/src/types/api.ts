export interface ApiConfig {
  id: string;
  name: string;
  url: string;
  description: string;
  isActive: boolean;
  category?: string;
}

export interface SwaggerSpec {
  openapi?: string;
  swagger?: string;
  info: {
    title: string;
    description?: string;
    version: string;
  };
  paths: Record<string, any>;
  components?: Record<string, any>;
  servers?: Array<{
    url: string;
    description?: string;
  }>;
}

export interface ApiError {
  message: string;
  status?: number;
  url?: string;
}
