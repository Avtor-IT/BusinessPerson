#!/bin/sh

until curl -s --fail http://frontend:3000; do
    echo "Waiting for frontend..."
    sleep 10
done

until curl -s --fail http://backend:8000; do
    echo "Waiting for backend..."
    sleep 10
done


nginx-debug -g "daemon off";

exec "$@"