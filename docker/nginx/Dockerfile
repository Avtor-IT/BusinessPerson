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
RUN apk add --no-cache openssl && \
    mkdir -p /etc/letsencrypt/live/xn--24-6kcduamh0cckkold.xn--p1ai && \
    openssl req -x509 -nodes -newkey rsa:2048 \
    -days 1 \
    -keyout /etc/letsencrypt/live/xn--24-6kcduamh0cckkold.xn--p1ai/privkey.pem \
    -out /etc/letsencrypt/live/xn--24-6kcduamh0cckkold.xn--p1ai/fullchain.pem \
    -subj "/CN=localhost"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT [ "./entrypoint.sh" ]