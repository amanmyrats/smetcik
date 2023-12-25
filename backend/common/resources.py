from import_export import resources

from common.models import (
    BaseUnit, BaseTrade, BaseLot, BaseCountry, BaseCurrency, 
    BaseBoqItem, BaseResource, BaseConsumption
)


class BaseUnitResource(resources.ModelResource):
    
    class Meta:
        model = BaseUnit
        skip_unchanged = True
        use_bulk = True


class BaseTradeResource(resources.ModelResource):
    
    class Meta:
        model = BaseTrade
        skip_unchanged = True
        use_bulk = True


class BaseLotResource(resources.ModelResource):
    
    class Meta:
        model = BaseLot
        skip_unchanged = True
        use_bulk = True


class BaseCountryResource(resources.ModelResource):
    
    class Meta:
        model = BaseCountry
        skip_unchanged = True
        use_bulk = True


class BaseCurrencyResource(resources.ModelResource):
    
    class Meta:
        model = BaseCurrency
        skip_unchanged = True
        use_bulk = True


class BaseBoqItemResource(resources.ModelResource):

    class Meta:
        model = BaseBoqItem
        skip_unchanged = True
        use_bulk = True


class BaseResourceResource(resources.ModelResource):
    
    class Meta:
        model = BaseResource
        skip_unchanged = True
        use_bulk = True
        

class BaseConsumptionResource(resources.ModelResource):
    
    class Meta:
        model = BaseConsumption
        skip_unchanged = True
        use_bulk = True

