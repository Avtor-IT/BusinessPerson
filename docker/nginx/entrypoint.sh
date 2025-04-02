#!/bin/sh

until wget --no-verbose --tries=1 --spider http://127.0.0.1:8000; do
    echo "Waiting for backend..."
    sleep 10
done

nginx-debug -g "daemon off";

exec "$@"