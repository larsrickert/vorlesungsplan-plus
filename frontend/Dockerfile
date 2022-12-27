# build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci

ARG VITE_APP_API_HOST
ENV VITE_APP_API_HOST $VITE_APP_API_HOST

COPY . ./
RUN npm run build

# production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
