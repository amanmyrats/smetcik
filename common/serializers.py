from rest_framework.serializers import ModelSerializer

from common.models import Unit, Trade, Lot, Currency, Country


class UnitModelSerializer(ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'


class TradeModelSerializer(ModelSerializer):
    class Meta:
        model = Trade
        fields = '__all__'


class LotModelSerializer(ModelSerializer):
    class Meta:
        model = Lot
        fields = '__all__'
        

class CurrencyModelSerializer(ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'


class CountryModelSerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'