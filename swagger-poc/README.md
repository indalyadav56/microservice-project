# Swagger API Documentation Aggregator

A modern React application built with Vite that aggregates multiple API documentation sources in one unified interface. This tool allows you to view and manage multiple Swagger/OpenAPI specifications from different services in a single, beautiful interface.

## Features

- **Multi-API Support**: View multiple Swagger/OpenAPI specifications in one place
- **Modern UI**: Clean, dark-themed interface with excellent UX
- **Custom API Addition**: Add your own API endpoints dynamically
- **Categorized Organization**: APIs are organized by categories (Microservices, Examples, Custom, etc.)
- **Persistent Storage**: Custom APIs are saved to localStorage
- **Real-time Loading**: Fetch and display API specs in real-time
- **Error Handling**: Graceful error handling with retry functionality
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: Scalar API Reference (modern Swagger UI alternative)
- **Styling**: CSS-in-JS with styled-jsx
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
```bash
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

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

### Pre-configured APIs

The application comes with several pre-configured APIs:

**Microservices:**
- Auth Service API (http://localhost:8081/docs/swagger/swagger.json)
- User Service API (http://localhost:8082/docs/swagger/swagger.json)
- Role Service API (http://localhost:8083/docs/swagger/swagger.json)
- Permission Service API (http://localhost:8084/docs/swagger/swagger.json)
- Notification Service API (http://localhost:8085/docs/swagger/swagger.json)

**Examples:**
- Petstore API (https://petstore.swagger.io/v2/swagger.json)
- Stripe API (https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json)
- GitHub API (https://api.github.com/)

### Adding Custom APIs

1. Click the "Add API" button in the sidebar
2. Fill in the API details:
   - **API Name**: A descriptive name for your API
   - **Swagger JSON URL**: The URL to your Swagger/OpenAPI JSON specification
   - **Category**: Choose from predefined categories or use "Custom"
   - **Description**: Optional description of your API
3. Click "Add API" to save

Custom APIs are automatically saved to localStorage and will persist between sessions.

## Project Structure

```
swagger-poc/
├── src/
│   ├── components/
│   │   ├── ApiSelector.tsx      # Sidebar for API selection
│   │   ├── SwaggerViewer.tsx    # Main API documentation viewer
│   │   └── AddApiModal.tsx      # Modal for adding custom APIs
│   ├── config/
│   │   └── apis.ts              # API configuration
│   ├── types/
│   │   └── api.ts               # TypeScript type definitions
│   ├── utils/
│   │   └── api.ts               # API utility functions
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## API Configuration

APIs are configured in `src/config/apis.ts`. Each API has the following structure:

```typescript
interface ApiConfig {
  id: string;           // Unique identifier
  name: string;         // Display name
  url: string;          // Swagger JSON URL
  description: string;  // API description
  isActive: boolean;    // Whether the API is enabled
  category?: string;    // Category for organization
}
```

## Supported Formats

The application supports both Swagger 2.0 and OpenAPI 3.x specifications:

- **Swagger 2.0**: `swagger: "2.0"`
- **OpenAPI 3.x**: `openapi: "3.0.x"` or `openapi: "3.1.x"`

## Troubleshooting

### CORS Issues

If you encounter CORS issues when loading API specifications:

1. Ensure your API server allows cross-origin requests
2. Add appropriate CORS headers to your API server
3. Consider using a CORS proxy for development

### Invalid Swagger Spec

If an API specification fails to load:

1. Verify the URL is accessible
2. Ensure the response is valid JSON
3. Check that the specification follows Swagger 2.0 or OpenAPI 3.x format

### Local Development

For local development with your microservices:

1. Ensure your services are running on the configured ports
2. Verify the Swagger endpoints are accessible
3. Update the URLs in `src/config/apis.ts` if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Acknowledgments

- [Scalar](https://scalar.com/) for the excellent API Reference component
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the UI framework
- [Lucide](https://lucide.dev/) for the beautiful icons
