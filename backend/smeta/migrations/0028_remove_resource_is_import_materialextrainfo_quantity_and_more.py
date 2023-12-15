# Generated by Django 4.2.8 on 2023-12-14 04:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0004_alter_lot_code_alter_lot_index_alter_lot_name_en_and_more'),
        ('smeta', '0027_remove_resource_extra_infos_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resource',
            name='is_import',
        ),
        migrations.AddField(
            model_name='materialextrainfo',
            name='quantity',
            field=models.DecimalField(decimal_places=2, default=100, max_digits=12),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='materialextrainfo',
            name='unit_price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=12),
        ),
        migrations.AddField(
            model_name='resource',
            name='brand',
            field=models.CharField(default='Ýörite zakaz', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resource',
            name='country',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='common.country'),
            preserve_default=False,
        ),
    ]
