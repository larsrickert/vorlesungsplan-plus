FROM node:18-alpine

WORKDIR /usr/src/app

COPY pnpm-lock.yaml package.json ./

# install pnpm as defined in package.json
RUN npm i -g $(node -p "require('./package.json').packageManager")

COPY . ./

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000
CMD ["pnpm", "start"]
