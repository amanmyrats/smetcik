# Generated by Django 4.2.8 on 2023-12-09 06:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smeta', '0014_remove_consumption_unit_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resource',
            name='quantity',
        ),
    ]
