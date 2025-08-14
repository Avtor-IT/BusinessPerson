FROM node:alpine AS build
WORKDIR /apps/frontend
COPY ./frontend/package*.json .
RUN npm i
COPY ./frontend .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /apps/frontend/docs /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./docker/nginx/entrypoint.sh .
# RUN chmod +x ./entrypoint.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT [ "./entrypoint.sh" ]