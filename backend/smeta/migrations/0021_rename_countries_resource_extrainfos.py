# Generated by Django 4.2.8 on 2023-12-09 08:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smeta', '0020_delete_materialcountry'),
    ]

    operations = [
        migrations.RenameField(
            model_name='resource',
            old_name='countries',
            new_name='extrainfos',
        ),
    ]