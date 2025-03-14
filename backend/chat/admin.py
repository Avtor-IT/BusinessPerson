from django.contrib import admin
from .models import ChatRoom, Message  # Импортируем модели

# Регистрируем модели в админке
@admin.register(ChatRoom)
class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'b24_user_id', 'created_at')  # Поля, которые будут отображаться в списке
    list_filter = ('user', 'b24_user_id', 'created_at')  # Фильтры
    search_fields = ('user__username', 'b24_user_id')  # Поиск по полям

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'chat_room', 'sender_type', 'contactId', 'timestamp')  # Поля для отображения
    list_filter = ('sender_type', 'timestamp')  # Фильтры
    search_fields = ('contactId', 'content')  # Поиск по полям