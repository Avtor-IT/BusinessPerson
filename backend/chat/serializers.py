from rest_framework import serializers

from api.serializers import UserSerializer
from .models import ChatRoom, Message


class MessageSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели Message.
    """
    class Meta:
        model = Message
        fields = ['id', 'sender_type', 'contactId', 'content', 'timestamp']


class ChatRoomSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели ChatRoom.
    Включает связанные сообщения.
    """
    messages = MessageSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = ChatRoom
        fields = ['id', 'user', 'b24_user_id', 'created_at', 'messages']