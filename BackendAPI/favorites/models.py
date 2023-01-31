from django.db import models
from listingAccount.models import ListingAccount

# Create your models here.
class Favorites(models.Model):
    favorite = models.PositiveIntegerField(null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='favorites', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.favorite}"