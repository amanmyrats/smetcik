# Generated by Django 4.2.7 on 2023-11-29 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=2)),
                ('code3Letter', models.CharField(max_length=3)),
                ('numericCode', models.IntegerField()),
                ('callingCode', models.IntegerField()),
                ('name_tm', models.CharField(max_length=30)),
                ('name_ru', models.CharField(max_length=30)),
                ('name_en', models.CharField(max_length=30)),
                ('name_original', models.CharField(max_length=30)),
            ],
        ),
    ]