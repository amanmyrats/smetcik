from django.db import models


class BaseUnit(models.Model):
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
    

class BaseTrade(models.Model):
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
    

class BaseLot(models.Model):
    trade = models.ForeignKey(BaseTrade, on_delete=models.PROTECT, related_name='lots')
    index = models.IntegerField(null=True)
    code = models.CharField(max_length=10, null=True)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30, null=True)
    name_en = models.CharField(max_length=30, null=True)
    name_original = models.CharField(max_length=30, null=True)

    def __str__(self) -> str:
        return self.name_tm
    

class BaseCurrency(models.Model):
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


class BaseCountry(models.Model):
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
     

class BaseBoqItem(models.Model):
    # boq = models.ForeignKey(Boq, on_delete=models.PROTECT)
    lot = models.ForeignKey(BaseLot, on_delete=models.PROTECT, related_name='boq_items')

    code = models.CharField(max_length=20, null=True)
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(BaseUnit, on_delete=models.PROTECT)
    material_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    labor_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    transport_unit_price = models.DecimalField(max_digits=12, decimal_places=2, null=True)
    
    def __str__(self) -> str:
        return f'{self.code} - {self.name_tm}'


class BaseConsumption(models.Model):
    boq_item = models.ForeignKey(BaseBoqItem, on_delete=models.CASCADE, related_name='consumptions')
    resource = models.ForeignKey('BaseResource', on_delete=models.CASCADE, null=True, related_name='resource_consumptions')
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    total_quantity = models.DecimalField(max_digits=12, decimal_places=2, null=True)

    def __str__(self) -> str:
        return f'{self.boq_item} - {self.resource.name_tm}'

    def save(self, *args, **kwargs):
        self.total_quantity = self.boq_item.quantity * self.quantity
        super().save(*args, **kwargs)


class BaseResource(models.Model):
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(BaseUnit, on_delete=models.PROTECT, null=True)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    brand = models.CharField(max_length=255, null=True)
    country = models.ForeignKey(BaseCountry, on_delete=models.PROTECT, null=True)
    is_material = models.BooleanField(default=True)
    is_mincons = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name_tm

