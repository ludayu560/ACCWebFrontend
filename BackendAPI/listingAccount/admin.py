from django.contrib import admin
from listingAccount.models import ListingAccount, PersonalTraits, Interests
# Register your models here.

admin.site.register(ListingAccount)
admin.site.register(PersonalTraits)
admin.site.register(Interests)