# --- Stage 1: Build the React Application ---
FROM node:18-alpine as build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
RUN npm run build

# --- Stage 2: Serve with Nginx (Production Server) ---
FROM nginx:alpine

# Copy the build output from Stage 1 to the Nginx html folder
# NOTE: If using Vite, change '/app/build' to '/app/dist' below
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 (standard web port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]