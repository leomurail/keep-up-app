FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Le "if" ici fonctionne car NODE_ENV est défini plus haut
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# On utilise une valeur par défaut pour le port si APP_PORT n'est pas défini
EXPOSE ${APP_PORT}

# Correction finale du bloc CMD
CMD if [ "$NODE_ENV" = "development" ]; then \
    npm run dev; \
    elif [ "$NODE_ENV" = "production" ]; then \
    npm run start; \
    else \
    npm run start; \
    fi