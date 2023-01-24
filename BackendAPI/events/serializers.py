from rest_framework import serializers
from events.models import Events

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone_number', 'date_of_birth',
                  'location', 'age_range', 'tell_us_about_yourself', 'created',
                  'personal_traits', 'interests']
    def to_internal_value(self, data):
        return data

    # def create(self, validated_data):
    #     interests_data = validated_data.pop('interests') 
    #     personal_traits_data = validated_data.pop('personal_traits')
    #     listing_account = ListingAccount.objects.create(**validated_data)
    #     for interest_data in interests_data:
    #         Interest.objects.create(listing_account = listing_account, **interest_data)
    #     for personal_trait_data in personal_traits_data:
    #         PersonalTrait.objects.create(listing_account = listing_account, **personal_trait_data)
    #     return listing_account

    # def update(self, instance, validated_data):
    #     interests = validated_data.pop('interests') 
    #     personal_traits = validated_data.pop('personal_traits')

    #     instance.first_name = validated_data.get("first_name", instance.first_name)
    #     instance.last_name = validated_data.get("last_name", instance.last_name)
    #     instance.email = validated_data.get("email", instance.email)
    #     instance.phone_number = validated_data.get("data_of_birth", instance.phone_number)
    #     instance.location = validated_data.get("location", instance.location)
    #     instance.age_range = validated_data.get("age_range", instance.age_range)
    #     instance.tell_us_about_yourself = validated_data.get("tell_us_about_yourself", instance.tell_us_about_yourself)

    #     # # keep_personal_traits = []
    #     # # existing_ids = [c.id for c in instance.personal_traits]
    #     # # for personal_trait in personal_traits:
    #     # #     if "id" in personal_trait.keys():
    #     # #         if PersonalTrait.objects.filter(id=personal_trait["id"]).exists():
    #     # #             c = PersonalTrait.objects.get(id=personal_trait["id"])
    #     # #             c.text = personal_trait.get()

    #     instance.save()
    #     return instance

