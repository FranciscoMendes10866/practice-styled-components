# build environment
FROM node:alpine as build

WORKDIR /app

COPY package*.json .
RUN npm i --force

COPY . .

RUN npm run build

# production environment
FROM caddy:2.3.0-alpine

COPY conf/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/build /var/www