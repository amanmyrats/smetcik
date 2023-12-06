from rest_framework.serializers import ModelSerializer, StringRelatedField

from common.models import Unit, Trade, Lot, Currency, Country
from smeta.serializers import BoqItemModelSerializer


class UnitModelSerializer(ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'


class LotModelSerializer(ModelSerializer):
    boq_items = BoqItemModelSerializer(many=True, read_only=True)
    class Meta:
        model = Lot
        fields = '__all__'
        

class TradeModelSerializer(ModelSerializer):
    lots = LotModelSerializer(many=True, read_only=True)
    class Meta:
        model = Trade
        fields = '__all__'


class CurrencyModelSerializer(ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'


class CountryModelSerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'