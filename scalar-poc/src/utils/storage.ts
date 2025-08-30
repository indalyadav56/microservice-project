import { STORAGE_KEY } from '../config/apiConfig';
import type { ApiDocConfig } from '../types/api';

export const saveApiConfig = (config: ApiDocConfig): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Failed to save API config:', error);
  }
};

export const loadApiConfig = (): ApiDocConfig | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to load API config:', error);
    return null;
  }
};

export const clearApiConfig = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear API config:', error);
  }
};
