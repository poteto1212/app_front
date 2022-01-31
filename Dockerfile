FROM node:14.17.4-alpine

WORKDIR /usr/src/app/app_front

COPY ./package*.json ./

RUN npm install