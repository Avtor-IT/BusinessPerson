FROM node:alpine AS builder
WORKDIR /apps/frontend
COPY ./frontend .
RUN npm install
CMD ["npm", "run", "docker"]