from rest_framework import serializers
from models import AccountEvents

class AccountEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountEvents
        fields = ['accountEvents']