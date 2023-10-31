from django.db import models

from company.models import Project
from common.models import Trade, Lot, Unit



class Boq(models.Model):
    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    boq_version = models.CharField(max_length=20)
    description = models.CharField(max_length=255)
    contract_number = models.CharField(max_length=50)
    # Annexe5 items

    def __str__(self) -> str:
        return f'Smeta {self.project.code} - {self.boq_version}'


class BoqItem(models.Model):
    boq = models.ForeignKey(Boq, on_delete=models.PROTECT)
    trade = models.ForeignKey(Trade, on_delete=models.PROTECT)
    lot = models.ForeignKey(Lot, on_delete=models.PROTECT)

    code = models.CharField(max_length=20)
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    name_original = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(Unit, on_delete=models.PROTECT)
    material_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    labot_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    transport_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    # consumption


# class Consumption(models.Model):
    