# Generated by Django 4.2.7 on 2023-11-29 10:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smeta', '0003_consumption_boq_item'),
    ]

    operations = [
        migrations.RenameField(
            model_name='material',
            old_name='boq_item',
            new_name='boq_items',
        ),
    ]