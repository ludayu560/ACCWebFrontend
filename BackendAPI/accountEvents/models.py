from django.db import models
from listingAccount.models import ListingAccount

# Create your models here.
class AccountEvents(models.Model):
    accountEvent = models.PositiveIntegerField(null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='accountEvents', on_delete=models.CASCADE, null=True)