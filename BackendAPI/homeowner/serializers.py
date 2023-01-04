from rest_framework import serializers
from homeowner.models import Homeowner

class HomeownerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homeowner
        fields = '__all__'
        
        