# Business Person


## Гайд

### Клонировать репу:

```
git clone --recurse-submodules  https://github.com/Avtor-IT/BusinessPerson.git
```

### Получить сабмодули:

```
git submodule init
git submodule update
```

### Обновить версии сабмодулей (подтянуть новые коммиты):

```
git submodule update --remote
```

### Деплой:

На коммиты в ветку main настроен github actions:

1. _build\_backend_: Сборка и пуш в докерхаб контейнера бекенда по докерфайлу `./docker/backend/Dockerfile`
2. _build\_nginx_: Сборка и пуш в докерхаб контейнера nginx со статикой (фронтенд) по докерфайлу `./docker/nginx/Dockerfile`
3. _deploy_: Копирование `docker-compose.yaml` в директорию на сервере, а затем запуск `docker compose` с последующей очисткой от старых контейнеров.
    - Запуск контейнеров происходит через `entrypoint.sh`, в котором запускается миграция бд.


_Миграции для бекенда:_

```sh
docker exec -it <container-id> python3 manage.py makemigrations
docker exec -it <container-id> python3 manage.py migrate
docker exec -it <container-id> python3 manage.py createsupersuser
```
