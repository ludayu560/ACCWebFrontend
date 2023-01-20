from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTrait, Interest


class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTrait
        fields = ['trait']
    # def to_internal_value(self, data):
    #     return data

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['interest']
    # def to_internal_value(self, data):
    #     return data

class ListingAccountSerializer(serializers.ModelSerializer):
    personal_traits = serializers.StringRelatedField(many=True)
    interests = serializers.StringRelatedField(many=True)
    class Meta:
        model = ListingAccount
        fields = ['id', 'first_name', 'last_name', 'email', 'phone_number', 'date_of_birth',
                  'location', 'age_range', 'tell_us_about_yourself', 'created',
                  'personal_traits', 'interests']
    # def to_internal_value(self, data):
    #     return data
    def create(self, validated_data):
        interests_data = validated_data.pop('interests') 
        personal_traits_data = validated_data.pop('personal_traits')
        listing_account = ListingAccount.objects.create(**validated_data)
        for interest_data in interests_data:
            Interest.objects.create(listing_account = listing_account, **interest_data)
        for personal_trait_data in personal_traits_data:
            PersonalTrait.objects.create(listing_account = listing_account, **personal_trait_data)
        return listing_account