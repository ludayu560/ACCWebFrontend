from rest_framework import serializers
from propertyListing.models import PropertyListing, Utilities

class UtilitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilities
        fields = ['utility']

class PropertyListingSerializer(serializers.ModelSerializer):
    utilities = serializers.StringRelatedField(many=True)
    class Meta:
        model = PropertyListing
        fields = ['id', 'listing_city', 'listing_postal', 'listing_province',
                  'listing_availability_date', 'listing_type', 'listing_total_bedrooms',
                  'listing_rate', 'listing_available_bedrooms', 'listing_bathrooms', 
                  'listing_housemates', 'listing_parking', 'listing_furnished', 'listing_smoking', 
                  'listing_pets', 'listing_ac', 'listing_description', 'listing_image_one', 
                  'listing_image_two', 'listing_image_three', 'listing_image_four', 'utilities']
    def to_internal_value(self, data):
        return data

    def create(self, validated_data):
        utilities_data = validated_data.pop('utilities')
        property_listing = PropertyListing.objects.create(**validated_data)
        for utility_data in utilities_data:
            Utilities.objects.create(property_listing = property_listing, **utility_data)
        return property_listing

    def update(self, instance, validated_data):
        utilities = validated_data.pop('utilities')

        instance.listing_city = validated_data.get("listing_city", instance.listing_city)
        instance.listing_postal = validated_data.get("listing_postal", instance.listing_postal)
        instance.listing_province = validated_data.get("listing_province", instance.listing_province)
        instance.listing_availability_date = validated_data.get("listing_availability_date", instance.listing_availability_date)
        instance.listing_type = validated_data.get("listing_type", instance.listing_type)
        instance.listing_total_bedrooms = validated_data.get("listing_total_bedrooms", instance.listing_total_bedrooms)
        instance.listing_rate = validated_data.get("listing_rate", instance.listing_rate)
        instance.listing_available_bedrooms = validated_data.get("listing_available_bedrooms", instance.listing_available_bedrooms)
        instance.listing_bathrooms = validated_data.get("listing_bathrooms", instance.listing_bathrooms)
        instance.listing_housemates = validated_data.get("listing_housemates", instance.listing_housemates)
        instance.listing_parking = validated_data.get("listing_parking", instance.listing_parking)
        instance.listing_furnished = validated_data.get("listing_furnished", instance.listing_furnished)
        instance.listing_smoking = validated_data.get("listing_smoking", instance.listing_smoking)
        instance.listing_pets = validated_data.get("listing_pets", instance.listing_pets)
        instance.listing_ac = validated_data.get("listing_ac", instance.listing_ac)
        instance.listing_description = validated_data.get("listing_description", instance.listing_description)
        instance.listing_image_one = validated_data.get("listing_image_one", instance.listing_image_one)
        instance.listing_image_two = validated_data.get("listing_image_two", instance.listing_image_two)
        instance.listing_image_three = validated_data.get("listing_image_three", instance.listing_image_three)
        instance.listing_image_four = validated_data.get("listing_image_four", instance.listing_image_four)
        instance.utilities.set("")
        
        for utility_data in utilities:
            Utilities.objects.create(property_listing = instance, **utility_data)
         
        instance.save()
        return instance