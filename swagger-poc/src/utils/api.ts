import axios from 'axios';
import { SwaggerSpec, ApiError } from '../types/api';

export const fetchSwaggerSpec = async (url: string): Promise<SwaggerSpec> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        message: `Failed to fetch API spec from ${url}: ${error.message}`,
        status: error.response?.status,
        url
      } as ApiError;
    }
    throw {
      message: `Unknown error fetching API spec from ${url}`,
      url
    } as ApiError;
  }
};

export const validateSwaggerSpec = (spec: any): boolean => {
  return spec && (
    (spec.openapi && spec.openapi.startsWith('3.')) ||
    (spec.swagger && spec.swagger.startsWith('2.'))
  );
};

export const getApiTitle = (spec: SwaggerSpec): string => {
  return spec.info?.title || 'Unknown API';
};

export const getApiVersion = (spec: SwaggerSpec): string => {
  return spec.info?.version || 'Unknown Version';
};

export const getApiDescription = (spec: SwaggerSpec): string => {
  return spec.info?.description || 'No description available';
};
