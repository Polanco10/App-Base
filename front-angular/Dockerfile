#Primera Etapa
# FROM node:14-alpine 
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# CMD npm run start

## Build Angular
FROM node:14-alpine as builder
WORKDIR /app
COPY . .
RUN npm install @angular/cli@latest -g
RUN npm install
RUN npm run build --prod

##  Nginx config
FROM nginx:alpine
VOLUME  /var/cache/nginx
COPY --from=builder /app/dist/proyect /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# EXPOSE Port 80
EXPOSE 80