export interface ApiDoc {
  id: string;
  name: string;
  url: string;
  description?: string;
  isActive: boolean;
  spec?: any;
}

export interface ApiDocConfig {
  apis: ApiDoc[];
}

export interface TabProps {
  api: ApiDoc;
  isActive: boolean;
  onSelect: (id: string) => void;
  onRemove?: (id: string) => void;
}

export interface ApiViewerProps {
  api: ApiDoc;
}
