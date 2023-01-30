from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTrait, Interest, Favorites, AccountEvents
from notifications.serializers import NotificationsSerializer
from notifications.models import Notifications


class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTrait
        fields = ['trait']

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['interest']

class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = ['favorite']

class ListingAccountSerializer(serializers.ModelSerializer):
    personal_traits = serializers.StringRelatedField(many=True)
    interests = serializers.StringRelatedField(many=True)
    favorites = serializers.StringRelatedField(many=True)
    accountEvents = serializers.StringRelatedField(many=True)
    notifications = NotificationsSerializer(many=True)
    class Meta:
        model = ListingAccount
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone_number', 'date_of_birth',
                  'location', 'age_range', 'tell_us_about_yourself', 'profile_picture', 'banner_picture', 
                  'display_picture_one', 'display_picture_two', 'display_picture_three', 'display_picture_four',
                  'created', 'personal_traits', 'interests', 'favorites', 'notifications', 'accountEvents']
    def to_internal_value(self, data):
        return data

    def create(self, validated_data):
        interests_data = validated_data.pop('interests') 
        personal_traits_data = validated_data.pop('personal_traits')
        favorites_data = validated_data.pop('favorites')
        notifications = validated_data.pop('notifications')
        accountEvents_data = validated_data.pop('accountEvents')
        listing_account = ListingAccount.objects.create(**validated_data)
        for interest_data in interests_data:
            Interest.objects.create(listing_account = listing_account, **interest_data)
        for personal_trait_data in personal_traits_data:
            PersonalTrait.objects.create(listing_account = listing_account, **personal_trait_data)
        for favorite_data in favorites_data:
            Favorites.objects.create(listing_account=listing_account, **favorite_data)
        for notification_data in notifications:
            Notifications.objects.create(listing_account = listing_account, **notification_data)
        for accountEvent_data in accountEvents_data:
            AccountEvents.objects.create(listing_account = listing_account, **accountEvent_data)    
        return listing_account

    def update(self, instance, validated_data):
        interests = validated_data.pop('interests') 
        personal_traits = validated_data.pop('personal_traits')
        favorites = validated_data.pop('favorites')
        notifications = validated_data.pop('notifications')
        accountEvents = validated_data.pop('accountEvents')

        instance.username = validated_data.get("username", instance.username)
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.email = validated_data.get("email", instance.email)
        instance.phone_number = validated_data.get("phone_number", instance.phone_number)
        instance.date_of_birth = validated_data.get("date_of_birth", instance.date_of_birth)
        instance.location = validated_data.get("location", instance.location)
        instance.age_range = validated_data.get("age_range", instance.age_range)
        instance.tell_us_about_yourself = validated_data.get("tell_us_about_yourself", instance.tell_us_about_yourself)
        instance.profile_picture = validated_data.get("profile_picture", instance.profile_picture)
        instance.banner_picture = validated_data.get("banner_picture", instance.banner_picture)
        instance.display_picture_one = validated_data.get("display_picture_one", instance.display_picture_one)
        instance.display_picture_two = validated_data.get("display_picture_two", instance.display_picture_two)
        instance.display_picture_three = validated_data.get("display_picture_three", instance.display_picture_three)
        instance.display_picture_four = validated_data.get("display_picture_four", instance.display_picture_four)
        instance.interests.set("")
        instance.personal_traits.set("")
        instance.favorites.set("")
        instance.notifications.set("")
        instance.accountEvents.set("")
        
        for interest_data in interests:
            Interest.objects.create(listing_account = instance, **interest_data)
        for personal_trait_data in personal_traits:
            PersonalTrait.objects.create(listing_account = instance, **personal_trait_data)
        for favorite_data in favorites:
            Favorites.objects.create(listing_account = instance, **favorite_data)
        for notifications_data in notifications:
            Notifications.objects.create(listing_account = instance, **notifications_data)
        for accountEvents_data in accountEvents:
            AccountEvents.objects.create(listing_account = instance, **accountEvents_data)

        instance.save()
        return instance