FROM node:12-alpine

WORKDIR /api

COPY package.json .
RUN npm install --quiet
RUN npm install -g nodemon

COPY . .
