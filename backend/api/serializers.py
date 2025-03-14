from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer

from user.models import CustomUser
from services.models import UserService, Service


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'contactId')
        ref_name = 'CustomUserSerializer'


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = CustomUser
        fields = ('id', 'email', 'username', 'password', 'contactId')
        extra_kwargs = {
            'contactId': {'required': True},
            'password': {'write_only': True}
        }
        ref_name = 'CustomUserCreateSerializer'


class UserServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserService
        fields = ['user', 'service', 'status', 'date_connected',
                  'expiration_date']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'provider', 'price']


class UploadDocumentSerializer(serializers.Serializer):
    fileContent = serializers.CharField()
    fileName = serializers.CharField()
