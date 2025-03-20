FROM node:alpine AS builder
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .

# @TODO: switch `npm serve` frontend to static files
CMD ["npm", "run", "docker"]