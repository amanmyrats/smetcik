from typing import Any
from django.db import models


class Company(models.Model):
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    name_original = models.CharField(max_length=255)
    long_name_tm = models.CharField(max_length=255)
    long_name_ru = models.CharField(max_length=255)
    long_name_en = models.CharField(max_length=255)
    long_name_original = models.CharField(max_length=255)
    address = models.CharField(max_length=300)
    contact = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    fax = models.CharField(max_length=255)
    email = models.CharField(max_length=255)


    def __str__(self) -> str:
        return f'{self.name_tm}'
    

class Project(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='projects')
    code = models.CharField(max_length=20)
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_en = models.CharField(max_length=255)
    name_original = models.CharField(max_length=255)
    long_name_tm = models.CharField(max_length=255)
    long_name_ru = models.CharField(max_length=255)
    long_name_en = models.CharField(max_length=255)
    long_name_original = models.CharField(max_length=255)
    contract_total = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self) -> str:
        return f'{self.name_tm}'


class BaseCompanyUnit(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
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
    

class BaseCompanyTrade(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
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
    

class BaseCompanyLot(models.Model):
    trade = models.ForeignKey(BaseCompanyTrade, on_delete=models.CASCADE, related_name='lots')
    index = models.IntegerField(null=True)
    code = models.CharField(max_length=10, null=True)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30, null=True)
    name_en = models.CharField(max_length=30, null=True)
    name_original = models.CharField(max_length=30, null=True)

    def __str__(self) -> str:
        return self.name_tm
    

class BaseCompanyCurrency(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
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


class BaseCompanyCountry(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
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


class BaseCompanyBoqItem(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company_boq_items')
    # boq = models.ForeignKey(Boq, on_delete=models.CASCADE)
    lot = models.ForeignKey(BaseCompanyLot, on_delete=models.CASCADE, related_name='boq_items')

    code = models.CharField(max_length=20, null=True)
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(BaseCompanyUnit, on_delete=models.CASCADE)
    material_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    labor_unit_price = models.DecimalField(max_digits=12, decimal_places=2)
    transport_unit_price = models.DecimalField(max_digits=12, decimal_places=2, null=True)
    
    def __str__(self) -> str:
        return f'{self.code} - {self.name_tm}'


class BaseCompanyConsumption(models.Model):
    boq_item = models.ForeignKey(BaseCompanyBoqItem, on_delete=models.CASCADE, related_name='consumptions')
    resource = models.ForeignKey('BaseCompanyResource', on_delete=models.CASCADE, null=True, related_name='resource_consumptions')
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    total_quantity = models.DecimalField(max_digits=12, decimal_places=2, null=True)

    def __str__(self) -> str:
        return f'{self.boq_item} - {self.resource.name_tm}'
    
    def save(self, *args, **kwargs):
        self.total_quantity = self.boq_item.quantity * self.quantity
        super().save(*args, **kwargs)


class BaseCompanyResource(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company_resources')
    name_tm = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255, null=True)
    name_en = models.CharField(max_length=255, null=True)
    name_original = models.CharField(max_length=255, null=True)
    quantity = models.DecimalField(max_digits=12, decimal_places=2)
    unit = models.ForeignKey(BaseCompanyUnit, on_delete=models.CASCADE, null=True)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    brand = models.CharField(max_length=255, null=True)
    country = models.ForeignKey(BaseCompanyCountry, on_delete=models.CASCADE, null=True)
    is_material = models.BooleanField(default=True)
    is_mincons = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name_tm


    
