import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { TabProps } from '../types/api';

const Tab: React.FC<TabProps> = ({ api, isActive, onSelect, onRemove }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(api.id);
    }
  };

  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(api.id)}
    >
      <div className="tab-content">
        <span className="tab-name">{api.name}</span>
        {api.description && (
          <span className="tab-description">{api.description}</span>
        )}
      </div>
      <div className="tab-actions">
        {api.url && (
          <a
            href={api.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tab-external-link"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
          </a>
        )}
        {api.id !== 'custom' && (
          <button
            className="tab-remove"
            onClick={handleRemove}
            title="Remove API"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Tab;
