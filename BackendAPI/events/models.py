from django.db import models

# Create your models here.
class Events(models.Model):
    #image input required
    event_name = models.CharField(max_length=50, null=True)
    event_date_time = models.DateTimeField(max_length=50, null=True)
    event_location = models.CharField(max_length=50, null=True)
    event_description = models.TextField(null=True)