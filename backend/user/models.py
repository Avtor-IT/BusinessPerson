from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    contactId = models.CharField(max_length=100,
                                 blank=False,
                                 null=False)
