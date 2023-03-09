# Generated by Django 4.1.5 on 2023-03-01 20:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('listingAccount', '0001_initial'),
        ('propertyListing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Housemate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='listingAccount.listingaccount')),
                ('property_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='propertyListing.propertylisting')),
            ],
        ),
    ]
