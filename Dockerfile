FROM node:22-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 8082

CMD ["npm", "run","dev"]