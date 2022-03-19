## this is the stage one , also know as the build step
FROM node:17.0.1-alpine3.12 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

## this is stage two , where the app actually runs
FROM node:17.0.1-alpine3.12

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --only=production
COPY --from=build /usr/src/app/dist ./dist

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
