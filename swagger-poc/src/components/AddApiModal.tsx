import React, { useState } from 'react';
import { ApiConfig } from '../types/api';
import { X, Plus } from 'lucide-react';

interface AddApiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (api: Omit<ApiConfig, 'id'>) => void;
}

const AddApiModal: React.FC<AddApiModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    category: 'Custom'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.url.trim()) {
      return;
    }

    onAdd({
      name: formData.name.trim(),
      url: formData.url.trim(),
      description: formData.description.trim(),
      category: formData.category.trim(),
      isActive: true
    });

    // Reset form
    setFormData({
      name: '',
      url: '',
      description: '',
      category: 'Custom'
    });
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Custom API</h2>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name">API Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter API name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Swagger JSON URL *</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://api.example.com/swagger.json"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Custom">Custom</option>
              <option value="Microservices">Microservices</option>
              <option value="Examples">Examples</option>
              <option value="Third Party">Third Party</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter API description"
              rows={3}
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="add-btn">
              <Plus size={16} />
              Add API
            </button>
          </div>
        </form>

        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal {
            background: #1a1a1a;
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid #333;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #333;
          }

          .modal-header h2 {
            margin: 0;
            color: #fff;
            font-size: 1.25rem;
          }

          .close-btn {
            background: transparent;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
          }

          .close-btn:hover {
            background: #374151;
            color: #fff;
          }

          .modal-form {
            padding: 1.5rem;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #e5e7eb;
            font-weight: 500;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            background: #374151;
            border: 1px solid #4b5563;
            border-radius: 4px;
            color: #fff;
            font-size: 0.875rem;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
          }

          .form-group textarea {
            resize: vertical;
            min-height: 80px;
          }

          .modal-actions {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            margin-top: 2rem;
          }

          .cancel-btn {
            padding: 0.75rem 1.5rem;
            background: transparent;
            border: 1px solid #4b5563;
            color: #e5e7eb;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .cancel-btn:hover {
            background: #374151;
          }

          .add-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: #2563eb;
            border: none;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .add-btn:hover {
            background: #1d4ed8;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AddApiModal;
