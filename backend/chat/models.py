from django.db import models
from django.conf import settings
from user.models import CustomUser


class ChatRoom(models.Model):
    """
    Модель для хранения информации о чат-комнате.
    """
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='chat_rooms')
    b24_user_id = models.CharField(max_length=100)  # ID пользователя Bitrix24
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"ChatRoom: {self.user.username} <-> B24 User {self.b24_user_id}"


class Message(models.Model):
    """
    Модель для хранения сообщений в чате.
    """
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name='messages')
    sender_type = models.CharField(max_length=10, choices=[('user', 'User'), ('b24', 'Bitrix24')])  # Тип отправителя
    contactId = models.CharField(max_length=100)  # Идентификатор клиента (contactId из CustomUser или b24_user_id)
    content = models.TextField()  # Текст сообщения
    timestamp = models.DateTimeField(auto_now_add=True)  # Время отправки сообщения

    def __str__(self):
        return f"Message from {self.sender_type} ({self.contactId}): {self.content[:50]}"