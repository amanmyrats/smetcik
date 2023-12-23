from django.shortcuts import get_object_or_404

from common.models import (
    BaseUnit, BaseTrade, BaseCountry, BaseCurrency, 
    BaseResource, BaseBoqItem, BaseConsumption
)
from company.models import (
    Company, BaseCompanyUnit, BaseCompanyTrade, BaseCompanyLot, 
    BaseCompanyCountry, BaseCompanyCurrency, 
    BaseCompanyResource, BaseCompanyBoqItem, BaseCompanyConsumption
)


def duplicate_units_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_units = BaseUnit.objects.all()
    for base_unit in base_units:
        base_company_unit = BaseCompanyUnit()
        base_company_unit.company = company
        base_company_unit.index = base_unit.index
        base_company_unit.code_tm = base_unit.code_tm
        base_company_unit.code_ru = base_unit.code_ru
        base_company_unit.code_en = base_unit.code_en
        base_company_unit.code_original = base_unit.code_original
        base_company_unit.name_tm = base_unit.name_tm
        base_company_unit.name_ru = base_unit.name_ru
        base_company_unit.name_en = base_unit.name_en
        base_company_unit.name_original = base_unit.name_original
        base_company_unit.save()

def duplicate_trades_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_trades = BaseTrade.objects.all()
    for base_trade in base_trades:
        base_company_trade = BaseCompanyTrade()
        base_company_trade.company = company
        base_company_trade.index = base_trade.index
        base_company_trade.code_tm = base_trade.code_tm
        base_company_trade.code_ru = base_trade.code_ru
        base_company_trade.code_en = base_trade.code_en
        base_company_trade.code_original = base_trade.code_original
        base_company_trade.name_tm = base_trade.name_tm
        base_company_trade.name_ru = base_trade.name_ru
        base_company_trade.name_en = base_trade.name_en
        base_company_trade.name_original = base_trade.name_original
        base_company_trade.save()
        # loop lots and add them to base company
        base_lots = base_trade.lots.all()
        for base_lot in base_lots:
             duplicate_lots_to_company(base_company_trade, base_lot)

def duplicate_lots_to_company(base_company_trade, base_lot):
            base_company_lot = BaseCompanyLot()
            base_company_lot.trade = base_company_trade
            base_company_lot.index = base_lot.index
            base_company_lot.code = base_lot.code
            base_company_lot.name_tm = base_lot.name_tm
            base_company_lot.name_ru = base_lot.name_ru
            base_company_lot.name_en = base_lot.name_en
            base_company_lot.name_original = base_lot.name_original
            base_company_lot.save()

def duplicate_countries_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_countries = BaseCountry.objects.all()
    for base_country in base_countries:
        base_company_country = BaseCompanyCountry()
        base_company_country.company = company
        base_company_country.code = base_country.code
        base_company_country.code_3_letter = base_country.code_3_letter
        base_company_country.numeric_code = base_country.numeric_code
        base_company_country.calling_code = base_country.calling_code
        base_company_country.name_tm = base_country.name_tm
        base_company_country.name_ru = base_country.name_ru
        base_company_country.name_en = base_country.name_en
        base_company_country.name_original = base_country.name_original
        base_company_country.save()
    
def duplicate_currencies_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_currencies = BaseCurrency.objects.all()
    for base_currency in base_currencies:
        base_company_currency = BaseCompanyCurrency()
        base_company_currency.company = company
        base_company_currency.code = base_currency.code
        base_company_currency.short_name_tm = base_currency.short_name_tm 
        base_company_currency.short_name_ru = base_currency.short_name_ru 
        base_company_currency.short_name_en = base_currency.short_name_en 
        base_company_currency.short_name_original = base_currency.short_name_original 
        base_company_currency.name_tm = base_currency.name_tm 
        base_company_currency.name_ru = base_currency.name_ru 
        base_company_currency.name_en = base_currency.name_en 
        base_company_currency.name_original = base_currency.name_original 
        base_company_currency.save()

def duplicate_resources_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_resources = BaseResource.objects.all()
    for base_resource in base_resources:
        base_company_resource = BaseCompanyResource()
        base_company_resource.company = company
        base_company_resource.name_tm = base_resource.name_tm
        base_company_resource.name_ru = base_resource.name_ru
        base_company_resource.name_en = base_resource.name_en
        base_company_resource.name_original = base_resource.name_original
        base_company_resource.quantity = base_resource.quantity
        unit = BaseCompanyUnit.objects.filter(name_tm=base_resource.unit.name_tm).first()
        base_company_resource.unit = unit
        base_company_resource.unit_price = base_resource.unit_price
        base_company_resource.brand = base_resource.brand
        country = BaseCompanyCountry.objects.filter(name_tm=base_resource.country.name_tm).first()
        base_company_resource.country = country
        base_company_resource.is_material = base_resource.is_material
        base_company_resource.is_mincons = base_resource.is_mincons
        base_company_resource.save()

def duplicate_boq_items_to_company(company_id):
    company = get_object_or_404(Company, id=company_id)
    base_boq_items = BaseBoqItem.objects.all()
    for base_boq_item in base_boq_items:
        base_company_boq_item = BaseCompanyBoqItem()

        base_company_boq_item.company = company

        unit = BaseCompanyUnit.objects.filter(name_tm=base_boq_item.unit.name_tm).first()
        lot = BaseCompanyLot.objects.filter(name_tm=base_boq_item.lot.name_tm).first()
        base_company_boq_item.lot = lot
        base_company_boq_item.unit = unit
        
        base_company_boq_item.code = base_boq_item.code
        base_company_boq_item.name_tm = base_boq_item.name_tm
        base_company_boq_item.name_ru = base_boq_item.name_ru
        base_company_boq_item.name_en = base_boq_item.name_en
        base_company_boq_item.name_original = base_boq_item.name_original
        base_company_boq_item.quantity = base_boq_item.quantity
        base_company_boq_item.material_unit_price = base_boq_item.material_unit_price
        base_company_boq_item.labor_unit_price = base_boq_item.labor_unit_price
        base_company_boq_item.transport_unit_price = base_boq_item.transport_unit_price
        base_company_boq_item.save()
        base_consumptions = base_boq_item.consumptions.all()
        for base_consumption in base_consumptions:
             duplicate_consumptions_to_company(base_company_boq_item, base_consumption)

def duplicate_consumptions_to_company(base_company_boq_item, base_consumption):
    base_company_consumption = BaseCompanyConsumption()
    base_company_consumption.boq_item = base_company_boq_item
    base_company_resource = BaseCompanyResource.objects.filter(name_tm=base_consumption.resource.name_tm).first()
    base_company_consumption.resource = base_company_resource
    base_company_consumption.quantity = base_consumption.quantity
    base_company_consumption.total_quantity = base_consumption.total_quantity
    base_company_consumption.save()

