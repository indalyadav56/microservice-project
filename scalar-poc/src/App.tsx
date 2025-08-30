import { useState, useEffect } from 'react';
import { defaultApiConfig } from './config/apiConfig';
import { loadApiConfig } from './utils/storage';
import ApiViewer from './components/ApiViewer';
import './App.css';

function App() {
  const [config, setConfig] = useState(defaultApiConfig);
  const [activeApiId, setActiveApiId] = useState<string>('petstore');

  useEffect(() => {
    const savedConfig = loadApiConfig();
    if (savedConfig) {
      setConfig(savedConfig);
      // Set the first active API as active
      const firstActive = savedConfig.apis.find(api => api.isActive);
      if (firstActive) {
        setActiveApiId(firstActive.id);
      }
    }
  }, []);

  const activeApi = config.apis.find(api => api.id === activeApiId) || config.apis[0];

  return (
    <div className="app">
      <ApiViewer api={activeApi} />
    </div >
  );
}

export default App;
