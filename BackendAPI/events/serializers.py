from rest_framework import serializers
from events.models import Events

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['event_image','event_name','event_date_time','event_location','event_description']
    def to_internal_value(self, data):
        return data

    def create(self, validated_data):
        events = Events.objects.create(**validated_data)
        return events

    def update(self, instance, validated_data):
        instance.event_image = validated_data.get("event_image", instance.event_image)
        instance.event_name = validated_data.get("event_name", instance.event_name)
        instance.event_date_time = validated_data.get("event_date_time", instance.event_date_time)
        instance.event_location = validated_data.get("event_location", instance.event_location)
        instance.event_description = validated_data.get("event_description", instance.event_description)
        # # keep_personal_traits = []
        # # existing_ids = [c.id for c in instance.personal_traits]
        # # for personal_trait in personal_traits:
        # #     if "id" in personal_trait.keys():
        # #         if PersonalTrait.objects.filter(id=personal_trait["id"]).exists():
        # #             c = PersonalTrait.objects.get(id=personal_trait["id"])
        # #             c.text = personal_trait.get()

        instance.save()
        return instance

