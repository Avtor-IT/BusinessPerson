FROM python:3.10-slim
WORKDIR /apps/backend
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt
COPY ./backend .
COPY ./docker/backend/entrypoint.sh .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]