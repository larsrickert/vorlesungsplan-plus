# build stage
FROM node:20-alpine as build
WORKDIR /app

COPY pnpm-lock.yaml package.json ./

# install pnpm as defined in package.json
RUN npm i -g $(node -p "require('./package.json').packageManager")

RUN pnpm install --frozen-lockfile

COPY . ./

ARG VITE_APP_API_HOST
ENV VITE_APP_API_HOST $VITE_APP_API_HOST

RUN pnpm build

# production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
