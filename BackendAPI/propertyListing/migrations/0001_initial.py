# Generated by Django 4.1.5 on 2023-02-15 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('listing_image_one', models.ImageField(null=True, upload_to='')),
                ('listing_image_two', models.ImageField(null=True, upload_to='')),
                ('listing_image_three', models.ImageField(null=True, upload_to='')),
                ('listing_image_four', models.ImageField(null=True, upload_to='')),
                ('listing_city', models.CharField(max_length=50, null=True)),
                ('listing_postal', models.CharField(max_length=50, null=True)),
                ('listing_province', models.CharField(max_length=50, null=True)),
                ('listing_availability_date', models.DateField(null=True)),
                ('listing_type', models.CharField(max_length=30, null=True)),
                ('listing_total_bedrooms', models.PositiveIntegerField(null=True)),
                ('listing_rate', models.DecimalField(decimal_places=2, max_digits=12, null=True)),
                ('listing_available_bedrooms', models.PositiveIntegerField(null=True)),
                ('listing_bathrooms', models.PositiveIntegerField(null=True)),
                ('listing_housemates', models.PositiveIntegerField(null=True)),
                ('listing_parking', models.BooleanField(null=True)),
                ('listing_furnished', models.BooleanField(null=True)),
                ('listing_smoking', models.BooleanField(null=True)),
                ('listing_pets', models.BooleanField(null=True)),
                ('listing_ac', models.BooleanField(null=True)),
                ('listing_utilities', models.CharField(max_length=30, null=True)),
                ('listing_description', models.TextField(max_length=400, null=True)),
            ],
        ),
    ]
