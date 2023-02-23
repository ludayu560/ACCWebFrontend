# Generated by Django 4.1.5 on 2023-02-23 21:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListingAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20, null=True)),
                ('account_type', models.CharField(max_length=30, null=True)),
                ('first_name', models.CharField(max_length=30, null=True)),
                ('last_name', models.CharField(max_length=30, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone_number', models.CharField(max_length=254, null=True)),
                ('date_of_birth', models.DateField(null=True)),
                ('location', models.CharField(max_length=30, null=True)),
                ('age_range', models.CharField(max_length=7, null=True)),
                ('tell_us_about_yourself', models.TextField(null=True)),
                ('profile_picture', models.ImageField(null=True, upload_to='')),
                ('banner_picture', models.ImageField(null=True, upload_to='')),
                ('display_picture_one', models.ImageField(null=True, upload_to='')),
                ('display_picture_two', models.ImageField(null=True, upload_to='')),
                ('display_picture_three', models.ImageField(null=True, upload_to='')),
                ('display_picture_four', models.ImageField(null=True, upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='PersonalTrait',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('trait', models.CharField(max_length=200, null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='personal_traits', to='listingAccount.listingaccount')),
            ],
        ),
        migrations.CreateModel(
            name='Lifestyle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lifestyle', models.CharField(max_length=200, null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lifestyle', to='listingAccount.listingaccount')),
            ],
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interest', models.CharField(max_length=200, null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='interests', to='listingAccount.listingaccount')),
            ],
        ),
    ]
