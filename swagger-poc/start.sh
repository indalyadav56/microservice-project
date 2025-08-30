#!/bin/bash

echo "🚀 Starting Swagger API Documentation Aggregator..."
echo "📖 This application aggregates multiple Swagger/OpenAPI specifications"
echo "🌐 Server will be available at: http://localhost:5173"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🔥 Starting development server..."
npm run dev
