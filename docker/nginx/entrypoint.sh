#!/bin/sh

echo "Starting nginx...";
nginx-debug -g "daemon off";

exec "$@"