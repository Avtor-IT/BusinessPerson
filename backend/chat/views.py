from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from .models import ChatRoom, Message
from .serializers import ChatRoomSerializer, MessageSerializer


class ChatRoomView(APIView):
    """
    API для получения или создания чат-комнаты.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, b24_user_id):
        """
        Получение или создание чат-комнаты для пользователя Django и пользователя Bitrix24.
        """
        user = request.user
        chat_room, created = ChatRoom.objects.get_or_create(user=user, b24_user_id=b24_user_id)
        serializer = ChatRoomSerializer(chat_room)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MessageListView(APIView):
    """
    API для получения списка сообщений в чат-комнате.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, chat_room_id):
        """
        Получение списка сообщений в чат-комнате.
        """
        messages = Message.objects.filter(chat_room_id=chat_room_id).order_by('timestamp')
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


def b24_chat_view(request, chat_room_id):
    """
    Веб-вью для отображения чата в Bitrix24.
    """
    chat_room = ChatRoom.objects.get(id=chat_room_id)
    return render(request, 'b24_chat.html', {
        'chat_room_id': chat_room.id,
        'b24_user_id': chat_room.b24_user_id,
        'contactId': request.user.contactId,  # Используем contactId из CustomUser
    })
