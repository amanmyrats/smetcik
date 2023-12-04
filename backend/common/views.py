from rest_framework.viewsets import ModelViewSet

from common.models import Unit, Trade, Lot, Currency, Country
from common.serializers import (
    UnitModelSerializer, TradeModelSerializer, LotModelSerializer, 
    CurrencyModelSerializer, CountryModelSerializer
)


class UnitModelViewSet(ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitModelSerializer
    

class TradeModelViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeModelSerializer
    

class LotModelViewSet(ModelViewSet):
    queryset = Lot.objects.all()
    serializer_class = LotModelSerializer
    

class CurrencyModelViewSet(ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencyModelSerializer
    

class CountryModelViewSet(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountryModelSerializer