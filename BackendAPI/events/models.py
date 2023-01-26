from django.db import models

# Create your models here.
class Events(models.Model):
    #image input required
    event_image = models.ImageField(null=True) # will have to figure out where this image is uploaded to
    event_name = models.CharField(max_length=50, null=True)
    event_date_time = models.DateTimeField(max_length=50, null=True)
    event_location = models.CharField(max_length=50, null=True)
    event_description = models.TextField(null=True)
    event_interested = models.IntegerField(null=True)
    event_going = models.IntegerField(null=True)