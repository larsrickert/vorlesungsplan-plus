## this is the stage one , also know as the build step
FROM node:15.13.0-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./
RUN npm ci
RUN npm run build

## this is stage two , where the app actually runs
FROM node:15.13.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /usr/src/app/dist ./dist

ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
