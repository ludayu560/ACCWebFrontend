from django.contrib import admin
# from listingAccount.models import ListingAccount
from listingAccount.models import ListingAccount, PersonalTrait, Interest
# Register your models here.

admin.site.register(ListingAccount)
admin.site.register(PersonalTrait)
admin.site.register(Interest)