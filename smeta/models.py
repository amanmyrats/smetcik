from django.db import models

from company.models import Project
from common.models import Trade, Lot, Unit, Country


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
    labor_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    transport_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    # materials = models.ManyToManyField('Material', through='BoqItemMaterial')
    
    def __str__(self) -> str:
        return f'{self.boq.project.code} - {self.code} - {self.name_tm}'


class Consumption(models.Model):
    boq_item = models.ForeignKey(BoqItem, on_delete=models.CASCADE, related_name='consumptions')
    material = models.ForeignKey('Material', on_delete=models.CASCADE)
    # name_tm = models.CharField(max_length=255)
    # name_ru = models.CharField(max_length=255)
    # name_en = models.CharField(max_length=255)
    # name_original = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(Unit, on_delete=models.PROTECT)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self) -> str:
        return f'{self.boq_item} - {self.material.name_tm}'


# class BoqItemMaterial(models.Model):
#     boq_item = models.ForeignKey(BoqItem, on_delete=models.CASCADE)
#     material = models.ForeignKey('Material', on_delete=models.CASCADE)
#     quantity = models.DecimalField(max_digits=12, decimal_places=2, null=True)

#     def save(self, *args, **kwargs):
#         self.quantity = self.boq_item.consumptions.all().filter(name_tm=self.material.name_tm).first() * \
#         self.boq_item.quantity
#         print('quantity calculated: ', self.quantity)
#         super().save(*args, **kwargs)


class Material(models.Model):
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    name_original = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(Unit, on_delete=models.PROTECT)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    total_price = models.DecimalField(max_digits=12, decimal_places=2)
    countries = models.ManyToManyField(Country, through='MaterialCountry')
    # boq_items = models.ManyToManyField(BoqItem, through=BoqItemMaterial)

    def __str__(self) -> str:
        return self.name_tm


class MaterialCountry(models.Model):
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.PROTECT)
    model = models.CharField(max_length=255)

