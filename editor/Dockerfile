FROM node:latest

WORKDIR /app

COPY package.json ./
RUN yarn

COPY . .
RUN yarn build
RUN yarn global pm2 serve

CMD ["pm2", "serve", "build", "80"]