#!/bin/sh

until curl --fail http://127.0.0.1:3000; do
    echo "Waiting for frontend..."
    sleep 10
done

until curl --fail http://127.0.0.1:8000; do
    echo "Waiting for backend..."
    sleep 10
done


nginx-debug -g "daemon off";

exec "$@"