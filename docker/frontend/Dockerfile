FROM node:alpine
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
RUN npm run build
# mb CMD cp -r docs ./docs
# CMD cp -r docs docs