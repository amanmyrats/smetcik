from django.db import models


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
     