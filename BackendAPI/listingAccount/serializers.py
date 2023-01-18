from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTrait, Interest


class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTrait
        fields = ['trait']

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['interest']

class ListingAccountSerializer(serializers.ModelSerializer):
    personal_traits = PersonalTraitsSerializer(many=True)
    interests = InterestsSerializer(many=True)
    class Meta:
        model = ListingAccount
        fields = ['id', 'first_name', 'last_name', 'email', 'date_of_birth',
                  'occupation', 'age_range', 'tell_us_about_yourself', 'created',
                  'personal_traits', 'interests']
    def create(self, validated_data):
        interests_data = validated_data.pop('interests') 
        personal_traits_data = validated_data.pop('personal_traits')
        listing_account = ListingAccount.objects.create(**validated_data)
        for interest_data in interests_data:
            Interests.objects.create(album=album, **interest_data)
        for personal_trait_data in personal_traits_data:
            PersonalTraits.objects.create(album=album, **personal_trait_data)
        return listing_account