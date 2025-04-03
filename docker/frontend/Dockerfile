FROM node:alpine as build
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
RUN npm run build
# CMD cp -r docs .