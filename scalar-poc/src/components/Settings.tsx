import React, { useState } from 'react';
import type { ApiDoc, ApiDocConfig } from '../types/api';
import { Plus, Save, Trash2, Download, Upload } from 'lucide-react';

interface SettingsProps {
  config: ApiDocConfig;
  onConfigChange: (config: ApiDocConfig) => void;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ config, onConfigChange, onClose }) => {
  const [localConfig, setLocalConfig] = useState<ApiDocConfig>(config);
  const [newApi, setNewApi] = useState<Partial<ApiDoc>>({
    name: '',
    url: '',
    description: '',
  });

  const handleAddApi = () => {
    if (newApi.name && newApi.url) {
      const api: ApiDoc = {
        id: `custom-${Date.now()}`,
        name: newApi.name,
        url: newApi.url,
        description: newApi.description || '',
        isActive: true,
      };

      setLocalConfig({
        ...localConfig,
        apis: [...localConfig.apis, api],
      });

      setNewApi({ name: '', url: '', description: '' });
    }
  };

  const handleRemoveApi = (id: string) => {
    setLocalConfig({
      ...localConfig,
      apis: localConfig.apis.filter(api => api.id !== id),
    });
  };

  const handleSave = () => {
    onConfigChange(localConfig);
    onClose();
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(localConfig, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'api-config.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedConfig = JSON.parse(e.target?.result as string);
          setLocalConfig(importedConfig);
        } catch (error) {
          alert('Invalid configuration file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <div className="settings-header">
          <h2>API Configuration</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3>Add New API</h3>
            <div className="add-api-form">
              <input
                type="text"
                placeholder="API Name"
                value={newApi.name}
                onChange={(e) => setNewApi({ ...newApi, name: e.target.value })}
              />
              <input
                type="url"
                placeholder="API URL (OpenAPI/Swagger spec)"
                value={newApi.url}
                onChange={(e) => setNewApi({ ...newApi, url: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description (optional)"
                value={newApi.description}
                onChange={(e) => setNewApi({ ...newApi, description: e.target.value })}
              />
              <button onClick={handleAddApi} className="add-btn">
                <Plus size={16} />
                Add API
              </button>
            </div>
          </div>

          <div className="settings-section">
            <h3>Configured APIs</h3>
            <div className="api-list">
              {localConfig.apis.map((api) => (
                <div key={api.id} className="api-item">
                  <div className="api-info">
                    <strong>{api.name}</strong>
                    <span className="api-url">{api.url}</span>
                    {api.description && <span className="api-description">{api.description}</span>}
                  </div>
                  <button
                    onClick={() => handleRemoveApi(api.id)}
                    className="remove-btn"
                    disabled={api.id === 'custom'}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="settings-section">
            <h3>Import/Export</h3>
            <div className="import-export-buttons">
              <button onClick={handleExport} className="export-btn">
                <Download size={16} />
                Export Config
              </button>
              <label className="import-btn">
                <Upload size={16} />
                Import Config
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleSave} className="save-btn">
            <Save size={16} />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
