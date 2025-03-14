from django.urls import path
from .views import (
    ChatRoomView,
    MessageListView,
    b24_chat_view,
)

urlpatterns = [
    # API для работы с чат-комнатами
    path('v1/chat/<str:b24_user_id>/', ChatRoomView.as_view(), name='chat-room'),
    path('v1/chat/<int:chat_room_id>/messages/', MessageListView.as_view(), name='message-list'),

    # Веб-вью для Bitrix24
    path('b24/chat/<int:chat_room_id>/', b24_chat_view, name='b24-chat'),
]