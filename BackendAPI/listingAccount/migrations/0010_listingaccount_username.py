# Generated by Django 4.1.5 on 2023-01-20 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listingAccount', '0009_alter_listingaccount_date_of_birth'),
    ]

    operations = [
        migrations.AddField(
            model_name='listingaccount',
            name='username',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
