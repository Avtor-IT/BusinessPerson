FROM python:3.10-slim
WORKDIR /apps/backend
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt
COPY ./backend .
CMD ["uvicorn", "drf_auth.asgi:application", "--host", "0.0.0.0", "--port", "8000"]