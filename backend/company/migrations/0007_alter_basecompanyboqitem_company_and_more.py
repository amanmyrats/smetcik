# Generated by Django 4.2.8 on 2023-12-23 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0006_project_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basecompanyboqitem',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='company_boq_items', to='company.company'),
        ),
        migrations.AlterField(
            model_name='basecompanyboqitem',
            name='lot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='boq_items', to='company.basecompanylot'),
        ),
        migrations.AlterField(
            model_name='basecompanyboqitem',
            name='unit',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='company.basecompanyunit'),
        ),
        migrations.AlterField(
            model_name='basecompanyresource',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='company_resources', to='company.company'),
        ),
        migrations.AlterField(
            model_name='basecompanyresource',
            name='country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='company.basecompanycountry'),
        ),
        migrations.AlterField(
            model_name='basecompanyresource',
            name='unit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='company.basecompanyunit'),
        ),
        migrations.AlterField(
            model_name='project',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='company.company'),
        ),
    ]
