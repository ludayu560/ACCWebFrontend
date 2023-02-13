from django.db import models

# Create your models here.
class PropertyListing(models.Model):
    listing_name = models.CharField(max_length=200, null=True)
    listing_image = models.ImageField(null=True) #path required in the future
    listing_rate = models.DecimalField(null=True, decimal_places=2, max_digits=12)
    listing_location = models.CharField(max_length=200, null=True)
    listing_availability_date = models.DateField(null=True)
    listing_type = models.CharField(max_length=30, null=True)
    listing_bedrooms = models.PositiveIntegerField(null=True)
    listing_bathrooms = models.PositiveIntegerField(null=True)
    listing_housemates = models.PositiveIntegerField(null=True)