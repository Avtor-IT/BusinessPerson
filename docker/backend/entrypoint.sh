#!/bin/sh

python3 manage.py makemigrations
python3 manage.py migrate
uvicorn drf_auth.asgi:application --host 0.0.0.0 --port 8000 

exec "$@"