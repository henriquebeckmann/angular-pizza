FROM node:20-alpine AS build
WORKDIR /frontend
RUN npm install -g @angular/cli
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ngnix.conf /etc/ngnix/conf.d/default.conf
COPY --from=build /frontend/dist/it-logia35-module-angular-pizza /usr/share/nginx/html
EXPOSE 80
