from rest_framework.viewsets import ModelViewSet

from common.models import (
    BaseUnit, BaseTrade, BaseLot, BaseCurrency, BaseCountry, 
    BaseBoqItem, BaseConsumption, BaseResource
)
from common.serializers import (
    BaseUnitModelSerializer, BaseTradeModelSerializer, BaseLotModelSerializer, 
    BaseCurrencyModelSerializer, BaseCountryModelSerializer, 
    BaseBoqItemModelSerializer, BaseConsumptionModelSerializer, BaseResourceModelSerializer
)


class BaseUnitModelViewSet(ModelViewSet):
    queryset = BaseUnit.objects.all()
    serializer_class = BaseUnitModelSerializer
    

class BaseTradeModelViewSet(ModelViewSet):
    queryset = BaseTrade.objects.all()
    serializer_class = BaseTradeModelSerializer
    

class BaseLotModelViewSet(ModelViewSet):
    queryset = BaseLot.objects.all()
    serializer_class = BaseLotModelSerializer
    

class BaseCurrencyModelViewSet(ModelViewSet):
    queryset = BaseCurrency.objects.all()
    serializer_class = BaseCurrencyModelSerializer
    

class BaseCountryModelViewSet(ModelViewSet):
    queryset = BaseCountry.objects.all()
    serializer_class = BaseCountryModelSerializer


class BaseBoqItemModelViewset(ModelViewSet):
    queryset = BaseBoqItem.objects.all()
    serializer_class = BaseBoqItemModelSerializer


class BaseConsumptionModelViewSet(ModelViewSet):
    queryset = BaseConsumption.objects.all()
    serializer_class = BaseConsumptionModelSerializer


class BaseResourceModelViewSet(ModelViewSet):
    queryset = BaseResource.objects.all()
    serializer_class = BaseResourceModelSerializer
