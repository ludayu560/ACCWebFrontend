# Generated by Django 4.1.5 on 2023-03-03 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listingAccount', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listingaccount',
            name='banner_picture',
            field=models.ImageField(null=True, upload_to='banner_picture'),
        ),
        migrations.AlterField(
            model_name='listingaccount',
            name='display_picture_four',
            field=models.ImageField(null=True, upload_to='display_picture_four'),
        ),
        migrations.AlterField(
            model_name='listingaccount',
            name='display_picture_one',
            field=models.ImageField(null=True, upload_to='display_picture_one'),
        ),
        migrations.AlterField(
            model_name='listingaccount',
            name='display_picture_three',
            field=models.ImageField(null=True, upload_to='display_picture_three'),
        ),
        migrations.AlterField(
            model_name='listingaccount',
            name='display_picture_two',
            field=models.ImageField(null=True, upload_to='display_picture_two'),
        ),
        migrations.AlterField(
            model_name='listingaccount',
            name='profile_picture',
            field=models.ImageField(null=True, upload_to='profile_picture'),
        ),
    ]
