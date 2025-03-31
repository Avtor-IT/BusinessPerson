#!/bin/sh

python3 manage.py makemigrations  || exit 1
python3 manage.py migrate || exit 1
uvicorn drf_auth.asgi:application --host 0.0.0.0 --port 8000 

exec "$@"