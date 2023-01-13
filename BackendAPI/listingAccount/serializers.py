from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTraits, Interests


class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTraits    
        fields = ['traits']

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interests
        fields = ['interests']       

class ListingAccountSerializer(serializers.ModelSerializer):
    personalTraits = PersonalTraitsSerializer(many=True)
    interests = InterestsSerializer(many=True)

    # def create(self, validated_data):
    #     personalTraits_data = validated_data.pop("personalTraits")
    #     listingAccount = ListingAccount.objects.create(**validated_data)
    #     for personalTrait_data in personalTraits_data:
    #         PersonalTraits.objects.create()
    #     return listingAccount    
    class Meta:
        model = ListingAccount
        fields = ['first_name', 'last_name', 'email', 'date_of_birth', 
        'occupation', 'age_range', 'tell_us_about_yourself', 'created',
        'personalTraits', 'interests']