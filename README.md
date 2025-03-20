# Business Person

## Technologies

-   React for frontend
-   DRF for backend
-   SQLite db (Postgre soon)
-   NGINX web server

## Run

Run containers locally
```
docker-compose up --build
```
\**`--build` flag is not neccessary if you want to just turn containers on*

## Guide

### Update submodules:

```
git submodule update --remote
```

### Deployment guide:

1. Create new `docker context`:
```
docker context create business-person --docker "host=ssh://root@5.35.82.235"
```

2. Use created context by default:
```
docker context use business-person
```

3. Run created context:
```
docker ps
```

4. Initialize `docker swarm`:
```
docker swarm init
```

5. Run `docker stack deploy`:
```
docker stack deploy -c ./docker-compose.yaml business-person
```

### Updates containers

*Before following steps make sure you are using the right docker context – must be default to your local machine*:
```
docker use default
```

1. Build images locally:
```
docker-compose up --build
```


2. Push images to `docker hub`:
```
docker push holakarme/businessperson-frontend:latest
docker push holakarme/businessperson-backend:latest
docker push holakarme/businessperson-nginx:latest
```


3. Change `docker context` to one that created on vps
```
docker context use business-person
```

4. Run `docker stack deploy`:
```
docker stack deploy -c ./compose.swarm.yaml business-person --with-registry-auth 
```
\**The backend image is private so creditinals are required*