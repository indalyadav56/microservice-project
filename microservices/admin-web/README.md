# RBAC Admin Dashboard

A modern, responsive admin dashboard for Role-Based Access Control (RBAC) management built with Next.js, shadcn/ui, and Zustand.

## 🚀 Features

### Core RBAC Management
- **User Management**: Create, edit, delete, and manage user accounts
- **Role Management**: Define and configure user roles with permissions
- **Permission Management**: Granular permission system with resource-based access control
- **Real-time Updates**: Live data synchronization across all components

### Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Theme switching with system preference detection
- **Accessible**: WCAG compliant with keyboard navigation support
- **Modern Components**: Built with shadcn/ui for consistent design

### State Management
- **Zustand Store**: Lightweight and performant state management
- **Persistent State**: Automatic state persistence across sessions
- **Type Safety**: Full TypeScript support with strict typing

### Data Management
- **React Query**: Efficient data fetching and caching
- **Optimistic Updates**: Instant UI feedback for better UX
- **Error Handling**: Comprehensive error states and recovery

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Theme**: next-themes

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
services/admin-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Dashboard home page
│   ├── users/             # User management pages
│   ├── roles/             # Role management pages
│   ├── permissions/       # Permission management pages
│   └── settings/          # Settings and configuration
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                  # Utility libraries
│   ├── store/            # Zustand stores
│   ├── api/              # API client and services
│   └── utils/            # Helper functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎯 Key Components

### Dashboard Layout
- **Sidebar Navigation**: Collapsible sidebar with navigation links
- **Header**: Page titles and action buttons
- **Responsive Design**: Mobile-friendly with hamburger menu

### User Management
- **User List**: Searchable table with user information
- **User Details**: Edit user information and roles
- **Status Toggle**: Enable/disable user accounts
- **Role Assignment**: Assign roles to users

### Role Management
- **Role List**: View all roles with descriptions
- **Permission Assignment**: Assign permissions to roles
- **Role Creation**: Create new roles with custom permissions
- **User Count**: See how many users have each role

### Permission Management
- **Permission List**: View all system permissions
- **Resource-based**: Organize permissions by resource type
- **Action-based**: Define specific actions (read, write, delete)
- **Role Assignment**: See which roles have each permission

## 🔧 Configuration

### API Configuration
The dashboard connects to your microservices via the API client in `lib/api/rbac-api.ts`. Configure the base URL and endpoints as needed.

### Theme Configuration
Theme settings are managed in `components/theme-provider.tsx`. Supports:
- Light mode
- Dark mode
- System preference

### State Persistence
Zustand store persistence is configured in `lib/store/rbac-store.ts`. Data is automatically saved to localStorage.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker
```bash
# Build the image
docker build -t rbac-admin .

# Run the container
docker run -p 3000:3000 rbac-admin
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security Features

- **Authentication**: JWT token-based authentication
- **Authorization**: Role-based access control
- **Input Validation**: Form validation with Zod
- **XSS Protection**: Built-in Next.js security features
- **CSRF Protection**: Automatic CSRF token handling

## 📊 Data Flow

1. **User Action**: User interacts with UI component
2. **State Update**: Zustand store updates local state
3. **API Call**: React Query makes API request to backend
4. **Backend Processing**: Microservice processes request
5. **Response**: Data returned and cached by React Query
6. **UI Update**: Component re-renders with new data

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

## 📈 Performance

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js Image component optimization
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: React Query caching for API responses
- **Lazy Loading**: Component lazy loading for better performance

## 🔧 Development

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` file
3. Import `DashboardLayout` component
4. Add navigation link in sidebar

### Adding New Components
1. Create component in `components/`
2. Use shadcn/ui components for consistency
3. Add TypeScript interfaces
4. Export from index file

### Adding New API Endpoints
1. Add method to appropriate API service in `lib/api/`
2. Create React Query hook in `hooks/`
3. Use hook in components

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔄 Updates

Stay updated with the latest changes:
- Follow the repository
- Check release notes
- Update dependencies regularly
