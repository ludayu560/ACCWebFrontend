# Generated by Django 4.1.5 on 2023-01-30 17:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('listingAccount', '0016_alter_favorites_favorite'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccountEvents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accountEvents', models.PositiveIntegerField(null=True)),
                ('listing_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='accountEvents', to='listingAccount.listingaccount')),
            ],
        ),
    ]
