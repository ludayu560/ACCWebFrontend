# Generated by Django 4.1.5 on 2023-02-16 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_image', models.ImageField(null=True, upload_to='')),
                ('event_name', models.CharField(max_length=50, null=True)),
                ('event_date_time', models.DateTimeField(max_length=50, null=True)),
                ('event_location', models.CharField(max_length=50, null=True)),
                ('event_description', models.TextField(null=True)),
                ('event_interested', models.PositiveIntegerField(null=True)),
                ('event_going', models.PositiveIntegerField(null=True)),
            ],
        ),
    ]
