from django.db import models
from django.conf import settings
from datetime import date


class Service(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    provider = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} ({self.provider})"


class UserService(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('blocked', 'Blocked'),
        ('expired', 'Expired'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date_connected = models.DateField(auto_now_add=True)
    expiration_date = models.DateField()
    status = models.CharField(max_length=10,
                              choices=STATUS_CHOICES,
                              default='active')

    def __str__(self):
        return f"{self.user.username} - {self.service.name} ({self.status})"

    def check_status(self):
        """Проверка срока действия услуги и блокировка по истечению"""
        if date.today() > self.expiration_date and self.status == 'active':
            self.status = 'expired'
            self.save()
