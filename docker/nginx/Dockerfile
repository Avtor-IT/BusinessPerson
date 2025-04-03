FROM nginx:stable-alpine

COPY --from=build /apps/frontend/docs /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./docker/nginx/entrypoint.sh .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]