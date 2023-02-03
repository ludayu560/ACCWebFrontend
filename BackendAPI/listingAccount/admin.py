from django.contrib import admin
from listingAccount.models import ListingAccount, PersonalTrait, Interest, Favorites, AccountEvents
# Register your models here.

admin.site.register(ListingAccount)
admin.site.register(PersonalTrait)
admin.site.register(Interest)
admin.site.register(Favorites)
admin.site.register(AccountEvents)
