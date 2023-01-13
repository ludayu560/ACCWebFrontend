from rest_framework import serializers
from listingAccount.models import ListingAccount
from listingAccount.models import PersonalTraits
from listingAccount.models import Interests


class ListingAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingAccount
        fields = ['first_name', 'last_name', 'email', 'date_of_birth', 
        'occupation', 'age_range', 'tell_us_about_yourself', 'created']

class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTraits    
        fields = ['traits', 'listing_account']

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interests
        fields = ['interests', 'listing_account']       

        