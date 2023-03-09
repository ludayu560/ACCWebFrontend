from rest_framework import serializers
from listingAccount.models import ListingAccount, PersonalTrait, Interest
from notifications.serializers import NotificationsSerializer
from notifications.models import Notifications
from account.models import User

class PersonalTraitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalTrait
        fields = ['trait']

class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['interest']

class ListingAccountSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    profile_picture = serializers.ImageField(required=False)
    banner_picture = serializers.ImageField(required=False)
    display_picture_one = serializers.ImageField(required=False)
    display_picture_two = serializers.ImageField(required=False)
    display_picture_three = serializers.ImageField(required=False)
    display_picture_four = serializers.ImageField(required=False)
    personal_traits = serializers.StringRelatedField(many=True)
    interests = serializers.StringRelatedField(many=True)
    notifications = NotificationsSerializer(many=True)
    class Meta:
        model = ListingAccount
        fields = ['id', 'username', 'account_type','first_name', 'last_name', 'email', 'phone_number', 'date_of_birth',
                  'location', 'age_range', 'tell_us_about_yourself', 'profile_picture', 'banner_picture',
                  'display_picture_one', 'display_picture_two', 'display_picture_three', 'display_picture_four',
                  'personal_traits', 'interests', 'notifications', 'user_id']
    def to_internal_value(self, data):
        return data

    def create(self, validated_data):
        personal_traits_data = validated_data.pop('personal_traits')
        interests_data = validated_data.pop('interests')
        notifications = validated_data.pop('notifications')
        user_id = validated_data.pop('user_id')
        user = User.objects.get(id=user_id)
        listing_account = ListingAccount.objects.create(user=user, **validated_data)
        for interest_data in interests_data:
            Interest.objects.create(listing_account = listing_account, **interest_data)
        for personal_trait_data in personal_traits_data:
            PersonalTrait.objects.create(listing_account = listing_account, **personal_trait_data)
        for notification_data in notifications:
            Notifications.objects.create(listing_account = listing_account, **notification_data)
        return listing_account

    def update(self, instance, validated_data):
        interests = validated_data.pop('interests', None)
        personal_traits = validated_data.pop('personal_traits', None)
        notifications = validated_data.pop('notifications', None)

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if interests is not None:
            instance.interests.set([Interest.objects.get_or_create(listing_account=instance, **interest_data)[0] for interest_data in interests])
        if personal_traits is not None:
            instance.personal_traits.set([PersonalTrait.objects.get_or_create(listing_account=instance, **personal_trait_data)[0] for personal_trait_data in personal_traits])
        if notifications is not None:
            instance.notifications.set([Notifications.objects.get_or_create(listing_account=instance, **notification_data)[0] for notification_data in notifications])

        instance.save()
        return instance