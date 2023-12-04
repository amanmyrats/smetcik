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