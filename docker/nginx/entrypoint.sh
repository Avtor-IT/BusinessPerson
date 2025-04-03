#!/bin/sh

curl http://frontend:3000;
curl http://backend:8000;

echo "Starting nginx...";
nginx-debug -g "daemon off";

exec "$@"