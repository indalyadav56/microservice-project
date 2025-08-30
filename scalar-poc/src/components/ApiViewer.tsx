import React from 'react';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import type { ApiViewerProps } from '../types/api';

const ApiViewer: React.FC<ApiViewerProps> = ({ api }) => {
  if (!api.url) {
    return (
      <div className="api-viewer-empty">
        <h3>No API URL provided</h3>
        <p>Please add a valid API endpoint URL to view documentation.</p>
      </div>
    );
  }

  return (
    <div className="api-viewer">
      <ApiReferenceReact
        configuration={{
          spec: {
            url: api.url,
          },
          theme: 'light',
          layout: 'sidebar',
        }}
      />
    </div>
  );
};

export default ApiViewer;
