import React, { useState, useEffect } from 'react';
import ApiSelector from './components/ApiSelector';
import SwaggerViewer from './components/SwaggerViewer';
import AddApiModal from './components/AddApiModal';
import { ApiConfig } from './types/api';
import { apiConfigs } from './config/apis';

const App: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<ApiConfig | null>(null);
  const [apis, setApis] = useState<ApiConfig[]>(apiConfigs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load custom APIs from localStorage on mount
  useEffect(() => {
    const savedApis = localStorage.getItem('custom-apis');
    if (savedApis) {
      try {
        const customApis: ApiConfig[] = JSON.parse(savedApis);
        setApis((prev: ApiConfig[]) => [...prev, ...customApis]);
      } catch (error) {
        console.error('Failed to load custom APIs from localStorage:', error);
      }
    }
  }, []);

  const handleApiSelect = (api: ApiConfig) => {
    setSelectedApi(api);
  };

  const handleAddCustomApi = () => {
    setIsModalOpen(true);
  };

  const handleAddApi = (newApi: Omit<ApiConfig, 'id'>) => {
    const apiWithId: ApiConfig = {
      ...newApi,
      id: `custom-${Date.now()}`
    };

    setApis((prev: ApiConfig[]) => [...prev, apiWithId]);

    // Save to localStorage
    const customApis = apis.filter((api: ApiConfig) => api.id.startsWith('custom-'));
    customApis.push(apiWithId);
    localStorage.setItem('custom-apis', JSON.stringify(customApis));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <ApiSelector
        selectedApi={selectedApi}
        onApiSelect={handleApiSelect}
        onAddCustomApi={handleAddCustomApi}
      />
      <SwaggerViewer selectedApi={selectedApi} />
      <AddApiModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddApi}
      />

      <style jsx>{`
        .app {
          display: flex;
          height: 100vh;
          background: #0f0f0f;
          color: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default App;
