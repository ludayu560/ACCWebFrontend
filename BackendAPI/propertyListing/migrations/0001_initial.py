# Generated by Django 4.1.5 on 2023-02-02 21:58

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
                ('listing_name', models.CharField(max_length=200, null=True)),
                ('listing_image', models.ImageField(null=True, upload_to='')),
                ('listing_rate', models.DecimalField(decimal_places=2, max_digits=12, null=True)),
                ('listing_location', models.CharField(max_length=200, null=True)),
                ('listing_availability_date', models.DateField(null=True)),
            ],
        ),
    ]
