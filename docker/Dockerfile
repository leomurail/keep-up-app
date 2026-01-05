# ———————————————————————————————————————
# ETAPE 1 : BASE
# ———————————————————————————————————————
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ———————————————————————————————————————
# ETAPE 2 : BUILD
# ———————————————————————————————————————
FROM base AS build-stage
RUN npm run build

# ———————————————————————————————————————
# ETAPE 3 : PRODUCTION (Nginx)
# ———————————————————————————————————————
FROM nginx:stable-alpine AS production
# On copie les fichiers de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuration Nginx (utilisera APP_PORT injecté par docker-compose)
COPY docker/nginx.conf.template /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]

# ———————————————————————————————————————
# ETAPE 4 : DEVELOPMENT (Node)
# ———————————————————————————————————————
FROM base AS development

CMD ["npm", "run", "dev"]