from rest_framework.serializers import ModelSerializer, StringRelatedField

from common.models import (
    BaseUnit, BaseTrade, BaseLot, BaseCurrency, BaseCountry, 
    BaseBoqItem, BaseResource, BaseConsumption
)


class BaseUnitModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseUnit
        fields = '__all__'


class BaseLotModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseLot
        fields = '__all__'
        

class BaseTradeModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseTrade
        fields = '__all__'


class BaseCurrencyModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseCurrency
        fields = '__all__'


class BaseCountryModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCountry
        fields = '__all__'


class BaseBoqItemModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseBoqItem
        fields = '__all__'


class BaseResourceModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseResource
        fields = '__all__'


class BaseConsumptionModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseConsumption
        fields = '__all__'

