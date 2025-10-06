#!/bin/sh
set -e

echo "=== Удаляем старую базу данных и миграции ==="

# Удаляем старую SQLite базу
rm -f /apps/backend/db.sqlite3 || true

# Удаляем миграции (кроме __init__.py)
find /apps/backend -path "*/migrations/*.py" ! -name "__init__.py" -delete || true
find /apps/backend -path "*/migrations/*.pyc" -delete || true

echo "=== Создаём миграции и применяем их ==="
python3 manage.py makemigrations || exit 1
python3 manage.py migrate || exit 1

echo "=== Проверяем суперюзера admin ==="
echo "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
" | python3 manage.py shell || exit 1

echo "=== Собираем статику ==="
python3 manage.py collectstatic --noinput || exit 1

echo "=== Запускаем сервер ==="
exec uvicorn drf_auth.asgi:application --host 0.0.0.0 --port 8000