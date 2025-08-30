# Scalar API Docs Aggregator

A modern React application that aggregates multiple API documentation sources using Scalar API Reference in one unified interface. Built with Vite, TypeScript, and React.

## Features

- **Multi-API Documentation**: View multiple API documentation sources in a single tabbed interface
- **Scalar Integration**: Powered by Scalar API Reference for beautiful, interactive API documentation
- **Customizable**: Add, remove, and configure API endpoints through an intuitive settings interface
- **Persistent Storage**: Configuration is automatically saved to local storage
- **Import/Export**: Export and import API configurations as JSON files
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, modern interface with smooth animations and transitions

## Supported API Documentation Formats

- OpenAPI 3.0/3.1 specifications
- Swagger 2.0 specifications
- Any API endpoint that returns valid OpenAPI/Swagger JSON or YAML

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swagger-poc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding API Documentation

1. Click the settings icon (⚙️) in the top-right corner
2. In the "Add New API" section, enter:
   - **API Name**: A descriptive name for your API
   - **API URL**: The URL to your OpenAPI/Swagger specification
   - **Description**: Optional description of the API
3. Click "Add API"
4. Click "Save Configuration"

### Managing APIs

- **Switch between APIs**: Click on any tab to view its documentation
- **Remove APIs**: Click the trash icon (🗑️) on any tab (except the custom tab)
- **External links**: Click the external link icon (🔗) to open the API spec in a new tab

### Import/Export Configuration

- **Export**: Click "Export Config" to download your current configuration as a JSON file
- **Import**: Click "Import Config" to upload a previously exported configuration file

## Default APIs

The application comes with several pre-configured APIs for demonstration:

- **Petstore API**: Sample Petstore API for testing
- **Weather API**: OpenWeatherMap API example
- **JSONPlaceholder API**: Fake Online REST API for Testing and Prototyping
- **GitHub API**: GitHub REST API v3

## Project Structure

```
src/
├── components/          # React components
│   ├── ApiViewer.tsx   # Scalar API documentation viewer
│   ├── Settings.tsx    # Configuration modal
│   └── Tab.tsx         # Individual API tab component
├── config/             # Configuration files
│   └── apiConfig.ts    # Default API configurations
├── types/              # TypeScript type definitions
│   └── api.ts          # API-related interfaces
├── utils/              # Utility functions
│   └── storage.ts      # Local storage management
├── App.tsx             # Main application component
├── App.css             # Application styles
└── main.tsx            # Application entry point
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Scalar API Reference**: Beautiful API documentation viewer
- **Lucide React**: Modern icon library
- **CSS3**: Custom styling with modern CSS features

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add TypeScript interfaces in `src/types/`
3. Update the main App component as needed
4. Add styles to `src/App.css`

## Configuration

### Customizing Default APIs

Edit `src/config/apiConfig.ts` to modify the default API configurations:

```typescript
export const defaultApiConfig: ApiDocConfig = {
  apis: [
    {
      id: 'my-api',
      name: 'My API',
      url: 'https://api.example.com/openapi.json',
      description: 'My custom API',
      isActive: true,
    },
    // ... more APIs
  ],
};
```

### Styling

The application uses custom CSS with a modern design system. Key color variables and styles can be modified in `src/App.css`.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Scalar](https://scalar.com/) for the excellent API documentation viewer
- [Vite](https://vitejs.dev/) for the fast build tool
- [Lucide](https://lucide.dev/) for the beautiful icons
