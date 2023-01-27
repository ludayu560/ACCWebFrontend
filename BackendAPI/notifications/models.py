from django.db import models
from listingAccount.models import ListingAccount

# Create your models here.
class Notifications(models.Model):
    message = models.CharField(max_length=200, null=True)
    link = models.URLField(max_length=128, null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='notifications', on_delete=models.CASCADE, null=True)

