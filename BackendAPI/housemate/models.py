from django.db import models
from listingAccount.models import ListingAccount
from propertyListing.models import PropertyListing

# Create your models here.
class Housemate(models.Model):
    property_id = models.ForeignKey(PropertyListing, on_delete=models.CASCADE, null=True)
    listing_account = models.ForeignKey(ListingAccount, on_delete=models.CASCADE, null=True)