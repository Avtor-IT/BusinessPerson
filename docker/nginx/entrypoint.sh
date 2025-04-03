#!/bin/sh

until curl -s http://frontend:3000; do
    echo "Waiting for frontend..."
    sleep 10
done

until curl -s http://backend:8000; do
    echo "Waiting for backend..."
    sleep 10
done

echo "Starting nginx...";
nginx-debug -g "daemon off;";

exec "$@";