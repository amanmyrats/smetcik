# Generated by Django 4.2.8 on 2023-12-23 07:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0004_project_company'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='company',
        ),
    ]
