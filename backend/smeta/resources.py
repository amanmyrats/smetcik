from import_export import resources

from smeta.models import (
    Unit, Trade, Lot, Country, Currency, 
    BoqItem, Resource, Consumption
)


class UnitResource(resources.ModelResource):
    
    class Meta:
        model = Unit
        skip_unchanged = True
        use_bulk = True


class TradeResource(resources.ModelResource):
    
    class Meta:
        model = Trade
        skip_unchanged = True
        use_bulk = True


class LotResource(resources.ModelResource):
    
    class Meta:
        model = Lot
        skip_unchanged = True
        use_bulk = True


class CountryResource(resources.ModelResource):
    
    class Meta:
        model = Country
        skip_unchanged = True
        use_bulk = True


class CurrencyResource(resources.ModelResource):
    
    class Meta:
        model = Currency
        skip_unchanged = True
        use_bulk = True


class BoqItemResource(resources.ModelResource):

    class Meta:
        model = BoqItem
        skip_unchanged = True
        use_bulk = True


class ResourceResource(resources.ModelResource):
    
    class Meta:
        model = Resource
        skip_unchanged = True
        use_bulk = True
        

class ConsumptionResource(resources.ModelResource):
    
    class Meta:
        model = Consumption
        skip_unchanged = True
        use_bulk = True