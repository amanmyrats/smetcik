# Generated by Django 4.2.8 on 2023-12-09 06:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0004_alter_lot_code_alter_lot_index_alter_lot_name_en_and_more'),
        ('smeta', '0012_remove_resource_unit'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='quantity',
            field=models.DecimalField(decimal_places=2, max_digits=12, null=True),
        ),
        migrations.AddField(
            model_name='resource',
            name='unit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='common.unit'),
        ),
        migrations.AlterField(
            model_name='consumption',
            name='resource',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='resource_consumptions', to='smeta.resource'),
        ),
    ]