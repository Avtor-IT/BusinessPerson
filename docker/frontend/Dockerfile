FROM node:alpine AS builder
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
CMD ["npm", "run", "docker"]