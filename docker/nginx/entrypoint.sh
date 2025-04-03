#!/bin/sh

nginx-debug -g "daemon off";

exec "$@"