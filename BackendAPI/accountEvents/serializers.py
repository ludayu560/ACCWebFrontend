from rest_framework import serializers
from models import AccountEvents

class AccountEvents(serializers.ModelSerializer):
    class Meta:
        model = AccountEvents
        fields = ['accountEvents']