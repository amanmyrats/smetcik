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
    

class Trade(models.Model):
    index = models.IntegerField()
    code_tm = models.CharField(max_length=10)
    code_ru = models.CharField(max_length=10)
    code_en = models.CharField(max_length=10)
    code_original = models.CharField(max_length=10)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30)
    name_en = models.CharField(max_length=30)
    name_original = models.CharField(max_length=30)
    

class Lot(models.Model):
    trade = models.ForeignKey(Trade, on_delete=models.PROTECT)
    index = models.IntegerField()
    code = models.CharField(max_length=10)
    name_tm = models.CharField(max_length=30)
    name_ru = models.CharField(max_length=30)
    name_en = models.CharField(max_length=30)
    name_original = models.CharField(max_length=30)
    

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
        