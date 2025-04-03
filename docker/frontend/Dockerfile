FROM node:alpine AS build
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
ENTRYPOINT  ["npm", "run", "build"]


# mb CMD cp -r docs ./docs
# CMD cp -r docs docs