from django.db import models

# Create your models here.
class ListingAccount(models.Model):
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.EmailField(max_length=254, null=True)
    date_of_birth = models.DateField(max_length=8, null=True)
    occupation = models.CharField(max_length=30, null=True)
    age_range = models.CharField(max_length=7, null=True)
    tell_us_about_yourself = models.TextField(null=True)
    created = models.DateTimeField(auto_now_add=True) # unsure if needed

class PersonalTrait(models.Model):
    trait = models.CharField(max_length=200, null = True)
    listing_account = models.ForeignKey(ListingAccount, related_name='personal_traits', on_delete=models.CASCADE, null=True)

class Interest(models.Model):
    interest = models.CharField(max_length=200, null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='interests', on_delete=models.CASCADE, null=True)