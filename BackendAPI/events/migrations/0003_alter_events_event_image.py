# Generated by Django 4.1.5 on 2023-03-03 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_alter_events_event_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='event_image',
            field=models.ImageField(null=True, upload_to='event_image'),
        ),
    ]
