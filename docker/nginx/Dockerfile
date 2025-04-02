FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
CMD ["nginx-debug", "-g", "daemon off;"]