from django.contrib import admin
from .models import CustomUser
from services.models import Service, UserService


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email',
                    'first_name', 'last_name',
                    'contactId', 'is_staff')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('email', 'last_name')


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'provider', 'price')
    search_fields = ('name', 'provider')


class UserServiceAdmin(admin.ModelAdmin):
    list_display = ('user', 'service', 'date_connected',
                    'expiration_date', 'status')
    list_filter = ('status',)
    search_fields = ('user__username', 'service__name') 


admin.site.register(Service, ServiceAdmin)
admin.site.register(UserService, UserServiceAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
