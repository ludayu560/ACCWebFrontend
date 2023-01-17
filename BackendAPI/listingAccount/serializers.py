from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTraits, Interests


class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTraits    
        fields = "__all__"

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interests
        fields = "__all__"

class ListingAccountSerializer(serializers.ModelSerializer):
    personalTraits = PersonalTraitsSerializer(many=True)
    interests = InterestsSerializer(many=True)

    # def create(self, validated_data):
    #     personalTraits_data = validated_data.pop("personalTraits")
    #     listingAccount = ListingAccount.objects.create(**validated_data)
    #     for personalTrait_data in personalTraits_data:
    #         PersonalTraits.objects.create(listingAccount=listingAccount, personalTrait = **personalTrait_data)
    #     return listingAccount    
    class Meta:
        model = ListingAccount
        fields = "__all__"