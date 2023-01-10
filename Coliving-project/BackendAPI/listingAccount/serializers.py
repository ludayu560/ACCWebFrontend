from rest_framework import serializers
from listingAccount.models import ListingAccount

class ListingAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingAccount
        fields = '__all__'
        
        