#!/bin/sh

python3 manage.py makemigrations  || exit 1
python3 manage.py migrate || exit 1

# Создаём суперюзера admin-admin, если его ещё нет
# echo "from django.contrib.auth import get_user_model; User = get_user_model(); \
# if not User.objects.filter(username='admin').exists(): \
#     User.objects.create_superuser('admin', 'admin@example.com', 'admin')" | python3 manage.py shell || exit 1

python3 manage.py collectstatic --noinput || exit 1
uvicorn drf_auth.asgi:application --host 0.0.0.0 --port 8000

exec "$@"