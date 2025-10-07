# Stage 1: Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependencies and install
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source files and build
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build app from the previous stage
COPY --from=build /app/dist/ice-cream-world/browser /usr/share/nginx/html

# Optional: replace default nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.config

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
