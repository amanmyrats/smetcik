from django.shortcuts import get_object_or_404

from company.models import (
    Company, BaseCompanyUnit, BaseCompanyTrade, BaseCompanyLot, 
    BaseCompanyCountry, BaseCompanyCurrency, 
    BaseCompanyResource, BaseCompanyBoqItem, BaseCompanyConsumption
)
from smeta.models import (
    Boq, 
    Unit, Trade, Lot, Country, Currency, 
    Resource, BoqItem, Consumption 
)


def duplicate_company_units_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_units = BaseCompanyUnit.objects.all()
    for base_company_unit in base_company_units:
        unit = Unit()
        unit.boq = boq
        unit.index = base_company_unit.index
        unit.code_tm = base_company_unit.code_tm
        unit.code_ru = base_company_unit.code_ru
        unit.code_en = base_company_unit.code_en
        unit.code_original = base_company_unit.code_original
        unit.name_tm = base_company_unit.name_tm
        unit.name_ru = base_company_unit.name_ru
        unit.name_en = base_company_unit.name_en
        unit.name_original = base_company_unit.name_original
        unit.save()

def duplicate_company_trades_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_trades = BaseCompanyTrade.objects.all()
    for base_company_trade in base_company_trades:
        trade = Trade()
        trade.boq = boq
        trade.index = base_company_trade.index
        trade.code_tm = base_company_trade.code_tm
        trade.code_ru = base_company_trade.code_ru
        trade.code_en = base_company_trade.code_en
        trade.code_original = base_company_trade.code_original
        trade.name_tm = base_company_trade.name_tm
        trade.name_ru = base_company_trade.name_ru
        trade.name_en = base_company_trade.name_en
        trade.name_original = base_company_trade.name_original
        trade.save()
        # loop lots and add them to base company
        base_company_lots = base_company_trade.lots.all()
        for base_company_lot in base_company_lots:
             duplicate_company_lots_to_boq(trade, base_company_lot)

def duplicate_company_lots_to_boq(trade, base_company_lot):
            lot = Lot()
            lot.trade = trade
            lot.index = base_company_lot.index
            lot.code = base_company_lot.code
            lot.name_tm = base_company_lot.name_tm
            lot.name_ru = base_company_lot.name_ru
            lot.name_en = base_company_lot.name_en
            lot.name_original = base_company_lot.name_original
            lot.save()

def duplicate_company_countries_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_countries = BaseCompanyCountry.objects.all()
    for base_company_country in base_company_countries:
        country = Country()
        country.boq = boq
        country.code = base_company_country.code
        country.code_3_letter = base_company_country.code_3_letter
        country.numeric_code = base_company_country.numeric_code
        country.calling_code = base_company_country.calling_code
        country.name_tm = base_company_country.name_tm
        country.name_ru = base_company_country.name_ru
        country.name_en = base_company_country.name_en
        country.name_original = base_company_country.name_original
        country.save()
    
def duplicate_company_currencies_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_currencies = BaseCompanyCurrency.objects.all()
    for base_company_currency in base_company_currencies:
        currency = Currency()
        currency.boq = boq
        currency.code = base_company_currency.code
        currency.short_name_tm = base_company_currency.short_name_tm 
        currency.short_name_ru = base_company_currency.short_name_ru 
        currency.short_name_en = base_company_currency.short_name_en 
        currency.short_name_original = base_company_currency.short_name_original 
        currency.name_tm = base_company_currency.name_tm 
        currency.name_ru = base_company_currency.name_ru 
        currency.name_en = base_company_currency.name_en 
        currency.name_original = base_company_currency.name_original 
        currency.save()

def duplicate_company_resources_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_resources = BaseCompanyResource.objects.all()
    for base_company_resource in base_company_resources:
        resource = Resource()
        resource.boq = boq
        resource.name_tm = base_company_resource.name_tm
        resource.name_ru = base_company_resource.name_ru
        resource.name_en = base_company_resource.name_en
        resource.name_original = base_company_resource.name_original
        # resource.quantity = base_company_resource.quantity
        unit = Unit.objects.filter(
             boq=boq,
             name_tm=base_company_resource.unit.name_tm
             ).first()
        resource.unit = unit
        resource.unit_price = base_company_resource.unit_price
        resource.brand = base_company_resource.brand
        country = Country.objects.filter(
             boq=boq,
             name_tm=base_company_resource.country.name_tm
             ).first()
        resource.country = country
        resource.is_material = base_company_resource.is_material
        resource.is_mincons = base_company_resource.is_mincons
        resource.save()

def duplicate_company_boq_items_to_boq(boq_id):
    boq = get_object_or_404(Boq, id=boq_id)
    base_company_boq_items = BaseCompanyBoqItem.objects.all()
    for base_company_boq_item in base_company_boq_items:
        boq_item = BoqItem()

        boq_item.boq = boq

        unit = Unit.objects.filter(
             boq=boq,
             name_tm=base_company_boq_item.unit.name_tm
             ).first()
        lot = Lot.objects.filter(
             trade__boq=boq, 
             name_tm=base_company_boq_item.lot.name_tm
             ).first()
        boq_item.lot = lot
        boq_item.unit = unit
        
        boq_item.code = base_company_boq_item.code
        boq_item.name_tm = base_company_boq_item.name_tm
        boq_item.name_ru = base_company_boq_item.name_ru
        boq_item.name_en = base_company_boq_item.name_en
        boq_item.name_original = base_company_boq_item.name_original
        boq_item.quantity = base_company_boq_item.quantity
        boq_item.material_unit_price = base_company_boq_item.material_unit_price
        boq_item.labor_unit_price = base_company_boq_item.labor_unit_price
        boq_item.transport_unit_price = base_company_boq_item.transport_unit_price
        boq_item.save()
        base_company_consumptions = base_company_boq_item.consumptions.all()
        for base_company_consumption in base_company_consumptions:
             duplicate_company_consumptions_to_boq(boq_item, base_company_consumption)

def duplicate_company_consumptions_to_boq(boq_item, base_company_consumption):
    consumption = Consumption()
    consumption.boq_item = boq_item
    resource = Resource.objects.filter(
         boq=boq_item.boq, 
         name_tm=base_company_consumption.resource.name_tm
         ).first()
    consumption.resource = resource
    consumption.quantity = base_company_consumption.quantity
    consumption.total_quantity = base_company_consumption.total_quantity
    consumption.save()

