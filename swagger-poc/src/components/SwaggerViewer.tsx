import React, { useState, useEffect } from 'react';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import { ApiConfig, SwaggerSpec, ApiError } from '../types/api';
import { fetchSwaggerSpec, validateSwaggerSpec } from '../utils/api';
import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';

interface SwaggerViewerProps {
  selectedApi: ApiConfig | null;
}

const SwaggerViewer: React.FC<SwaggerViewerProps> = ({ selectedApi }) => {
  const [swaggerSpec, setSwaggerSpec] = useState<SwaggerSpec | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const loadSwaggerSpec = async (api: ApiConfig) => {
    setLoading(true);
    setError(null);
    setSwaggerSpec(null);

    try {
      const spec = await fetchSwaggerSpec(api.url);

      if (!validateSwaggerSpec(spec)) {
        throw {
          message: 'Invalid Swagger/OpenAPI specification',
          url: api.url
        } as ApiError;
      }

      setSwaggerSpec(spec);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedApi) {
      loadSwaggerSpec(selectedApi);
    }
  }, [selectedApi]);

  const handleRefresh = () => {
    if (selectedApi) {
      loadSwaggerSpec(selectedApi);
    }
  };

  if (!selectedApi) {
    return (
      <div className="swagger-viewer-empty">
        <div className="empty-state">
          <h2>Select an API</h2>
          <p>Choose an API from the sidebar to view its documentation</p>
        </div>
        <style jsx>{`
          .swagger-viewer-empty {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f0f0f;
            color: #e5e7eb;
          }

          .empty-state {
            text-align: center;
            max-width: 400px;
          }

          .empty-state h2 {
            margin-bottom: 1rem;
            color: #fff;
          }

          .empty-state p {
            color: #9ca3af;
            line-height: 1.5;
          }
        `}</style>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="swagger-viewer-loading">
        <div className="loading-state">
          <Loader2 className="loading-spinner" size={32} />
          <p>Loading {selectedApi.name} documentation...</p>
        </div>
        <style jsx>{`
          .swagger-viewer-loading {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f0f0f;
            color: #e5e7eb;
          }

          .loading-state {
            text-align: center;
          }

          .loading-spinner {
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="swagger-viewer-error">
        <div className="error-state">
          <AlertCircle size={48} color="#ef4444" />
          <h2>Failed to load API documentation</h2>
          <p>{error.message}</p>
          {error.status && (
            <p className="error-details">Status: {error.status}</p>
          )}
          <button onClick={handleRefresh} className="retry-btn">
            <RefreshCw size={16} />
            Retry
          </button>
        </div>
        <style jsx>{`
          .swagger-viewer-error {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f0f0f;
            color: #e5e7eb;
          }

          .error-state {
            text-align: center;
            max-width: 500px;
            padding: 2rem;
          }

          .error-state h2 {
            margin: 1rem 0;
            color: #fff;
          }

          .error-state p {
            color: #9ca3af;
            line-height: 1.5;
            margin-bottom: 0.5rem;
          }

          .error-details {
            font-family: monospace;
            background: #374151;
            padding: 0.5rem;
            border-radius: 4px;
            margin: 1rem 0;
          }

          .retry-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 1rem auto 0;
            padding: 0.75rem 1.5rem;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .retry-btn:hover {
            background: #1d4ed8;
          }
        `}</style>
      </div>
    );
  }

  if (!swaggerSpec) {
    return null;
  }

  return (
    <div className="swagger-viewer">
      <div className="swagger-header">
        <div className="api-info">
          <h1>{selectedApi.name}</h1>
          <p>{selectedApi.description}</p>
        </div>
        <button onClick={handleRefresh} className="refresh-btn" title="Refresh">
          <RefreshCw size={16} />
        </button>
      </div>

      <div className="swagger-content">
        <ApiReferenceReact
          configuration={{
            spec: {
              content: swaggerSpec,
            },
            theme: 'dark',
            layout: 'modern',
            showSidebar: true,
            showHeader: false,
          }}
        />
      </div>

      <style jsx>{`
        .swagger-viewer {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #0f0f0f;
          height: 100vh;
          overflow: hidden;
        }

        .swagger-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #1a1a1a;
          border-bottom: 1px solid #333;
        }

        .api-info h1 {
          margin: 0 0 0.5rem 0;
          color: #fff;
          font-size: 1.5rem;
        }

        .api-info p {
          margin: 0;
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .refresh-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #374151;
          border: none;
          border-radius: 4px;
          color: #e5e7eb;
          cursor: pointer;
        }

        .refresh-btn:hover {
            background: #4b5563;
          }

        .swagger-content {
          flex: 1;
          overflow: hidden;
        }

        .swagger-content :global(.scalar-api-reference) {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default SwaggerViewer;
