from django.db import models
from datetime import date, datetime

class ListingAccount(models.Model):
    username = models.CharField(max_length=20, null=True)
    class AccountType(models.TextChoices):
        TENANT = 'tenant'
        HOMEOWNER = 'homeowner'
    account_type = models.CharField(max_length=30, choices=AccountType.choices, null=True)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.EmailField(max_length=254, null=True)
    phone_number = models.CharField(max_length=254, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=30, null=True)
    age_range = models.CharField(max_length=7, null=True)
    tell_us_about_yourself = models.TextField(null=True)
    profile_picture = models.ImageField(null=True)
    banner_picture = models.ImageField(null=True)
    display_picture_one = models.ImageField(null=True)
    display_picture_two = models.ImageField(null=True)
    display_picture_three = models.ImageField(null=True)
    display_picture_four = models.ImageField(null=True)

    @property
    def age(self):
        if self.date_of_birth:
            birthdate = datetime.combine(self.date_of_birth, datetime.min.time()).date()
            today = date.today()
            age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
            return age
        else:
            return None


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