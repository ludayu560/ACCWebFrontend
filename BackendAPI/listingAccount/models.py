from django.db import models

# Create your models here.
class ListingAccount(models.Model):
    username = models.CharField(max_length=20, null=True)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.EmailField(max_length=254, null=True)
    phone_number = models.CharField(max_length=254, null=True)
    date_of_birth = models.DateField(null=True)
    location = models.CharField(max_length=30, null=True)
    age_range = models.CharField(max_length=7, null=True)
    tell_us_about_yourself = models.TextField(null=True)
    profile_picture = models.ImageField(null=True)
    banner_picture = models.ImageField(null=True)
    display_picture_one = models.ImageField(null=True)
    display_picture_two = models.ImageField(null=True)
    display_picture_three = models.ImageField(null=True)
    display_picture_four = models.ImageField(null=True)
    created = models.DateTimeField(auto_now_add=True) # unsure if needed

class PersonalTrait(models.Model):
    trait = models.CharField(max_length=200, null = True)
    listing_account = models.ForeignKey(ListingAccount, related_name='personal_traits', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.trait}"

class Interest(models.Model):
    interest = models.CharField(max_length=200, null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='interests', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.interest}"

class Favorites(models.Model):
    favorite = models.PositiveIntegerField(null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='favorites', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.favorite}"

class AccountEvents(models.Model):
    accountEvents = models.PositiveIntegerField(null=True)
    listing_account = models.ForeignKey(ListingAccount, related_name='accountEvents', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.accountEvents}"
        