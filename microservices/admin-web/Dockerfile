# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
# COPY .env.production .env.production

RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Run the production server
CMD ["npx", "next", "start"]
