from rest_framework import serializers
from housemate.models import Housemate

class HousemateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housemate
        fields = '__all__'