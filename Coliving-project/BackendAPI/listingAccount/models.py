from django.db import models

# Create your models here.
class ListingAccount(models.Model):
    first_name = models.CharField(max_length=30)
    # last_name = models.CharField(max_length=30)
    # email = models.EmailField(max_length=254)
    # date_of_birth = models.DateField(max_length=8)
    # occupation = models.CharField(max_length=30)
    # age_range = models.CharField(max_length=7)
    # pt_extroverted = models.BooleanField()
    # pt_outgoing = models.BooleanField()
    # pt_introverted = models.BooleanField()
    # pt_open = models.BooleanField()
    # pt_creative = models.BooleanField()
    # pt_analytical = models.BooleanField()
    # pt_feeling = models.BooleanField()
    # pt_passive = models.BooleanField()
    # pt_quiet = models.BooleanField()
    # pt_adventurous = models.BooleanField()
    # interests_gardening = models.BooleanField()
    # interests_cooking = models.BooleanField()
    # interests_hiking = models.BooleanField()
    # interests_music = models.BooleanField()
    # interests_reading = models.BooleanField()
    # interests_art = models.BooleanField()
    # interests_puzzles = models.BooleanField()
    # interests_sports = models.BooleanField()
    # interests_yoga = models.BooleanField()
    # interests_cars = models.BooleanField()
    # interests_other = models.CharField(max_length=300)
    # tell_us_about_yourself = models.TextField()
    created = models.DateTimeField(auto_now_add=True) # unsure if needed