# react-app/Dockerfile
FROM node:20.15.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "dev"]