from django.contrib import admin
from listingAccount.models import ListingAccount, PersonalTrait, Interest, Lifestyle
# Register your models here.

# Adds these models to admin allowing them to be updated using the online UI
admin.site.register(ListingAccount)
admin.site.register(PersonalTrait)
admin.site.register(Interest)
admin.site.register(Lifestyle)