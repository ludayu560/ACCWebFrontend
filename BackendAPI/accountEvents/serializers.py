from rest_framework import serializers
from accountEvents.models import AccountEvents

class AccountEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountEvents
        fields = '__all__'