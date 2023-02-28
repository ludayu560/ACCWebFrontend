from django.db import models

# Create your models here.
class PropertyListing(models.Model):
    listing_city = models.CharField(max_length=50, null=True)
    listing_postal = models.CharField(max_length=50, null=True)
    listing_province = models.CharField(max_length=50, null=True)
    listing_availability_date = models.DateField(null=True)
    listing_type = models.CharField(max_length=30, null=True)
    listing_total_bedrooms = models.PositiveIntegerField(null=True)
    listing_den = models.BooleanField(null=True)
    listing_rate = models.DecimalField(null=True, decimal_places=2, max_digits=12)
    listing_women_homeowner = models.BooleanField(null=True)
    listing_available_bedrooms = models.PositiveIntegerField(null=True)
    listing_bathrooms = models.PositiveIntegerField(null=True)
    listing_housemates = models.PositiveIntegerField(null=True)
    listing_parking = models.BooleanField(null=True)
    listing_furnished = models.BooleanField(null=True)
    listing_smoking = models.BooleanField(null=True)
    listing_pets = models.BooleanField(null=True)
    listing_ac = models.BooleanField(null=True)
    listing_description = models.TextField(max_length=400, null=True)
    listing_image_one = models.ImageField(null=True) #path required in the future
    listing_image_two = models.ImageField(null=True) #path required in the future
    listing_image_three = models.ImageField(null=True) #path required in the future
    listing_image_four = models.ImageField(null=True) #path required in the future

class ListingUtilities(models.Model):
    listing_utility = models.CharField(max_length=200, null = True)
    property_listing_fk = models.ForeignKey(PropertyListing, related_name='listing_utilities', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.listing_utility}"