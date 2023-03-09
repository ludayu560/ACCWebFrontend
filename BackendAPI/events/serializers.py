from rest_framework import serializers
from events.models import Events

class EventsSerializer(serializers.ModelSerializer):
    event_image = serializers.ImageField(required=False)

    class Meta:
        model = Events
        fields = ['id', 'event_image', 'event_name', 'event_date_time', 
                  'event_location', 'event_description', 'event_interested', 
                  'event_going']