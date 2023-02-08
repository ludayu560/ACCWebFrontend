# Generated by Django 4.1.5 on 2023-02-08 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('listingAccount', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccountEvents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accountEvent', models.PositiveIntegerField(null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='accountEvents', to='listingAccount.listingaccount')),
            ],
        ),
    ]
