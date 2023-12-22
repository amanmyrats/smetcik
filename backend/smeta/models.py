from django.db import models

from company.models import Project


class Unit(models.Model):
    index = models.IntegerField()
    code_tm = models.CharField(max_length=10)
    code_ru = models.CharField(max_length=10)
    code_en = models.CharField(max_length=10)
    code_original = models.CharField(max_length=10)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30)
    name_en = models.CharField(max_length=30)
    name_original = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.name_tm
    

class Trade(models.Model):
    index = models.IntegerField(null=True)
    code_tm = models.CharField(max_length=10, null=True)
    code_ru = models.CharField(max_length=10, null=True)
    code_en = models.CharField(max_length=10, null=True)
    code_original = models.CharField(max_length=10, null=True)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30, null=True)
    name_en = models.CharField(max_length=30, null=True)
    name_original = models.CharField(max_length=30, null=True)

    def __str__(self) -> str:
        return self.name_tm
    

class Lot(models.Model):
    trade = models.ForeignKey(Trade, on_delete=models.PROTECT, related_name='lots')
    index = models.IntegerField(null=True)
    code = models.CharField(max_length=10, null=True)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30, null=True)
    name_en = models.CharField(max_length=30, null=True)
    name_original = models.CharField(max_length=30, null=True)

    def __str__(self) -> str:
        return self.name_tm
    

class Currency(models.Model):
    code = models.CharField(max_length=3)
    short_name_tm = models.CharField(max_length=20)
    short_name_ru = models.CharField(max_length=20)
    short_name_en = models.CharField(max_length=20)
    short_name_original = models.CharField(max_length=20)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30)
    name_en = models.CharField(max_length=30)
    name_original = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.name_en


class Country(models.Model):
    code = models.CharField(max_length=2)   
    code_3_letter = models.CharField(max_length=3)    
    numeric_code = models.IntegerField()    
    calling_code = models.IntegerField()
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30)
    name_en = models.CharField(max_length=30)
    name_original = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.name_tm
    
    

class Boq(models.Model):
    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    boq_version = models.CharField(max_length=20)
    description = models.CharField(max_length=255)
    contract_number = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'Smeta {self.project.code} - {self.boq_version}'


class BoqItem(models.Model):
    boq = models.ForeignKey(Boq, on_delete=models.PROTECT)
    lot = models.ForeignKey(Lot, on_delete=models.PROTECT, related_name='boq_items')

    code = models.CharField(max_length=20, null=True)
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(Unit, on_delete=models.PROTECT)
    material_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    labor_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    transport_unit_price = models.DecimalField(max_digits=12, decimal_places=2, null=True)
    
    def __str__(self) -> str:
        return f'{self.boq.project.code} - {self.code} - {self.name_tm}'


class Consumption(models.Model):
    boq_item = models.ForeignKey(BoqItem, on_delete=models.CASCADE, related_name='consumptions')
    resource = models.ForeignKey('Resource', on_delete=models.CASCADE, null=True, related_name='resource_consumptions')
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    total_quantity = models.DecimalField(max_digits=12, decimal_places=2, null=True)

    def __str__(self) -> str:
        return f'{self.boq_item} - {self.resource.name_tm}'
    
    def save(self, *args, **kwargs):
        self.total_quantity = self.boq_item.quantity * self.quantity
        super().save(*args, **kwargs)


class Resource(models.Model):
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(Unit, on_delete=models.PROTECT, null=True)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    brand = models.CharField(max_length=255, null=True)
    country = models.ForeignKey(Country, on_delete=models.PROTECT, null=True)
    is_material = models.BooleanField(default=True)
    is_mincons = models.BooleanField(default=False)

    @property
    def quantity(self, *args, **kwargs):
        print(self.resource_consumptions.aggregate(quantity=models.Sum('total_quantity'))['quantity'])
        return self.resource_consumptions.aggregate(quantity=models.Sum('total_quantity'))['quantity']

    def __str__(self) -> str:
        return self.name_tm

