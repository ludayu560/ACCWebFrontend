from django.db import models

# Create your models here.

class PersonalTraits(models.Model):
    extroverted = models.BooleanField(null=True)
    outgoing = models.BooleanField(null=True)
    introverted = models.BooleanField(null=True)
    open = models.BooleanField(null=True)
    creative = models.BooleanField(null=True)
    analytical = models.BooleanField(null=True)
    feeling = models.BooleanField(null=True)
    passive = models.BooleanField(null=True)
    quiet = models.BooleanField(null=True)
    adventurous = models.BooleanField(null=True)

class Interests(models.Model):
    interests_gardening = models.BooleanField(null=True)
    interests_cooking = models.BooleanField(null=True)
    interests_hiking = models.BooleanField(null=True)
    interests_music = models.BooleanField(null=True)
    interests_reading = models.BooleanField(null=True)
    interests_art = models.BooleanField(null=True)
    interests_puzzles = models.BooleanField(null=True)
    interests_sports = models.BooleanField(null=True)
    interests_yoga = models.BooleanField(null=True)
    interests_cars = models.BooleanField(null=True)
    interests_other = models.CharField(max_length=300, null=True)

class ListingAccount(models.Model):
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.EmailField(max_length=254, null=True)
    date_of_birth = models.DateField(max_length=8, null=True)
    occupation = models.CharField(max_length=30, null=True)
    age_range = models.CharField(max_length=7, null=True)
    personal_traits = models.ForeignKey(PersonalTraits, on_delete=models.CASCADE, null=True)
    interests = models.ForeignKey(Interests, on_delete=models.CASCADE, null=True)
    tell_us_about_yourself = models.TextField(null=True)
    created = models.DateTimeField(auto_now_add=True) # unsure if needed

