FROM node:alpine
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm install
COPY ./frontend .
CMD ["npm", "run", "build"]
# mb CMD cp -r docs ./docs
# CMD cp -r docs docs