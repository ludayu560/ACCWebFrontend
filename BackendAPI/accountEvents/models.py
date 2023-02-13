from django.db import models
from listingAccount.models import ListingAccount
from events.models import Events

# Create your models here.
class AccountEvents(models.Model):
    events_id = models.ForeignKey(Events, on_delete=models.CASCADE, null=True)
    listing_account = models.ForeignKey(ListingAccount, on_delete=models.CASCADE, null=True)