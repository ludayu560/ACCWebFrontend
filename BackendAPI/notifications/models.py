from django.db import models

# Create your models here.
class Notifications(models.Model):
    message = models.CharField(max_length=200, null=True)
    link = models.URLField(max_length=128)

