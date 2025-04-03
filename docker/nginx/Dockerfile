FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
# COPY ./docker/nginx/entrypoint.sh .
# RUN chmod +x ./entrypoint.sh
CMD ["nginx","-g","daemon off;"]
# ENTRYPOINT [ "./entrypoint.sh" ]