# Generated by Django 4.1.5 on 2023-01-25 17:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('listingAccount', '0010_listingaccount_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorites',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorites', models.CharField(max_length=100, null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='favorites', to='listingAccount.listingaccount')),
            ],
        ),
    ]