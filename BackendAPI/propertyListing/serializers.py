from rest_framework import serializers
from propertyListing.models import PropertyListing, ListingUtilities

class ListingUtilitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingUtilities
        fields = ['listing_utility']

class PropertyListingSerializer(serializers.ModelSerializer):
    listing_utilities = serializers.StringRelatedField(many=True)
    class Meta:
        model = PropertyListing
        fields = ['id', 'listing_city', 'listing_postal', 'listing_province',
                  'listing_availability_date', 'listing_type', 'listing_total_bedrooms', 'listing_den',
                  'listing_rate', 'listing_women_homeowner', 'listing_available_bedrooms', 'listing_bathrooms', 
                  'listing_housemates', 'listing_parking', 'listing_furnished', 'listing_smoking', 
                  'listing_pets', 'listing_ac', 'listing_description', 'listing_image_one', 
                  'listing_image_two', 'listing_image_three', 'listing_image_four', 'listing_utilities']
    def to_internal_value(self, data):
        return data

    def create(self, validated_data):
        listing_utilities_data = validated_data.pop('listing_utilities')
        property_listing = PropertyListing.objects.create(**validated_data)
        for listing_utility_data in listing_utilities_data:
            ListingUtilities.objects.create(property_listing_fk = property_listing, **listing_utility_data)
        return property_listing

    def update(self, instance, validated_data):
        listing_utilities = validated_data.pop('listing_utilities')

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if listing_utilities is not None:
            instance.listing_utilities.set([ListingUtilities.objects.get_or_create(property_listing_fk=instance, **utility_data)[0] for utility_data in listing_utilities])

        instance.save()
        return instance