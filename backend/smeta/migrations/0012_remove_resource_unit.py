# Generated by Django 4.2.8 on 2023-12-08 11:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smeta', '0011_remove_resource_quantity_remove_resource_total_price_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resource',
            name='unit',
        ),
    ]
