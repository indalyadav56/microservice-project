import React, { useState } from 'react';
import { ApiConfig } from '../types/api';
import { getApisByCategory } from '../config/apis';
import { BookOpen, ChevronDown, ChevronRight, Globe, Settings } from 'lucide-react';

interface ApiSelectorProps {
  selectedApi: ApiConfig | null;
  onApiSelect: (api: ApiConfig) => void;
  onAddCustomApi: () => void;
}

const ApiSelector: React.FC<ApiSelectorProps> = ({ 
  selectedApi, 
  onApiSelect, 
  onAddCustomApi 
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const apisByCategory = getApisByCategory();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const isCategoryExpanded = (category: string) => expandedCategories[category] ?? true;

  return (
    <div className="api-selector">
      <div className="api-selector-header">
        <h2>API Documentation</h2>
        <button 
          className="add-api-btn"
          onClick={onAddCustomApi}
          title="Add Custom API"
        >
          <Settings size={16} />
          Add API
        </button>
      </div>

      <div className="api-categories">
        {Object.entries(apisByCategory).map(([category, apis]) => (
          <div key={category} className="api-category">
            <button
              className="category-header"
              onClick={() => toggleCategory(category)}
            >
              {isCategoryExpanded(category) ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="category-name">{category}</span>
              <span className="api-count">({apis.length})</span>
            </button>

            {isCategoryExpanded(category) && (
              <div className="api-list">
                {apis.map((api) => (
                  <button
                    key={api.id}
                    className={`api-item ${selectedApi?.id === api.id ? 'selected' : ''}`}
                    onClick={() => onApiSelect(api)}
                    title={api.description}
                  >
                    <Globe size={14} />
                    <div className="api-info">
                      <span className="api-name">{api.name}</span>
                      <span className="api-description">{api.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .api-selector {
          width: 300px;
          background: #1a1a1a;
          border-right: 1px solid #333;
          height: 100vh;
          overflow-y: auto;
        }

        .api-selector-header {
          padding: 1rem;
          border-bottom: 1px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .api-selector-header h2 {
          margin: 0;
          font-size: 1.2rem;
          color: #fff;
        }

        .add-api-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .add-api-btn:hover {
          background: #1d4ed8;
        }

        .api-categories {
          padding: 0.5rem;
        }

        .api-category {
          margin-bottom: 0.5rem;
        }

        .category-header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: transparent;
          border: none;
          color: #e5e7eb;
          cursor: pointer;
          border-radius: 4px;
          text-align: left;
        }

        .category-header:hover {
          background: #374151;
        }

        .category-name {
          font-weight: 600;
          flex: 1;
        }

        .api-count {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .api-list {
          margin-left: 1.5rem;
        }

        .api-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: transparent;
          border: none;
          color: #d1d5db;
          cursor: pointer;
          border-radius: 4px;
          text-align: left;
          margin-bottom: 0.25rem;
        }

        .api-item:hover {
          background: #374151;
        }

        .api-item.selected {
          background: #2563eb;
          color: white;
        }

        .api-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .api-name {
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .api-description {
          font-size: 0.75rem;
          color: #9ca3af;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .api-item.selected .api-description {
          color: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default ApiSelector;
