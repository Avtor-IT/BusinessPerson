import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.apps import apps
from channels.db import database_sync_to_async

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Ленивая загрузка моделей
        self.ChatRoom = apps.get_model('chat.ChatRoom')
        self.Message = apps.get_model('chat.Message')

        self.chat_room_id = self.scope['url_route']['kwargs']['chat_room_id']
        self.room_group_name = f'chat_{self.chat_room_id}'

        # Присоединяемся к группе
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        # Отключаемся от группы
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Получение сообщения от WebSocket
    async def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json['message']
            sender_type = text_data_json['sender_type']
            contactId = text_data_json['contactId']  # Используем contactId из CustomUser

            # Логируем полученные данные
            print(f"Получено сообщение: {message}, sender_type: {sender_type}, contactId: {contactId}")

            # Сохраняем сообщение в базе данных
            chat_room = await self.get_chat_room(self.chat_room_id)

            created_message = await self.create_message(chat_room, sender_type, contactId, message)
            print(f"Сообщение сохранено в базе данных. ID сообщения: {created_message.id}")

            # Отправляем сообщение в группу
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': message,
                    'sender_type': sender_type,
                    'contactId': contactId,
                }
            )

        except Exception as e:
            print(f"Ошибка при обработке сообщения: {e}")
            await self.close()

    # Получение сообщения из группы
    async def chat_message(self, event):
        message = event['message']
        sender_type = event['sender_type']
        contactId = event['contactId']

        # Логируем отправку сообщения обратно в WebSocket
        print(f"Отправка сообщения в WebSocket: {message}, sender_type: {sender_type}, contactId: {contactId}")

        # Отправляем сообщение обратно в WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'sender_type': sender_type,
            'contactId': contactId,
        }))

    @database_sync_to_async
    def get_chat_room(self, chat_room_id):
        return self.ChatRoom.objects.get(id=chat_room_id)

    @database_sync_to_async
    def create_message(self, chat_room, sender_type, contactId, message):
        return self.Message.objects.create(
            chat_room=chat_room,
            sender_type=sender_type,
            contactId=contactId,
            content=message
        )