#!/bin/sh

until curl http://frontend:3000; do
    echo "Waiting for frontend..."
    sleep 10
done

until curl http://backend:8000; do
    echo "Waiting for backend..."
    sleep 10
done

echo "Starting nginx...";
nginx-debug -g "daemon off;";

exec "$@";