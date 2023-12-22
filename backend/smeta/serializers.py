from django.db import models

from rest_framework.serializers import ModelSerializer, SerializerMethodField

from smeta.models import (
    Boq, BoqItem, Consumption, Resource, 
    Trade, Lot, Country, Currency, Unit
)


class UnitModelSerializer(ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'


class LotModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from smeta.serializers import BoqItemModelSerializer
        self.fields['boq_items'] = BoqItemModelSerializer(many=True, read_only=True)

    class Meta:
        model = Lot
        fields = '__all__'
        

class TradeModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from smeta.serializers import LotModelSerializer
        self.fields['lots'] = LotModelSerializer(many=True, read_only=True)
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


class BoqModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from company.serializers import ProjectModelSerializer
        self.fields['project_object'] = ProjectModelSerializer(source='project', read_only=True)
    class Meta:
        model = Boq
        fields = '__all__'


class BoqItemModelSerializer(ModelSerializer):
    unit_object = UnitModelSerializer(source='unit', read_only=True)
        
    class Meta:
        model = BoqItem
        fields = '__all__'


class ResourceModelSerializer(ModelSerializer):
    unit_object = UnitModelSerializer(source='unit', read_only=True)
    country_object = CountryModelSerializer(source='country', read_only=True)
    quantity = SerializerMethodField()
    class Meta:
        model = Resource
        fields = '__all__'

    def get_quantity(self, obj):
        return obj.quantity


class ConsumptionModelSerializer(ModelSerializer):
    boq_item_object = BoqItemModelSerializer(source='boq_item', read_only=True)
    resource_object = ResourceModelSerializer(source='resource', read_only=True)
    class Meta:
        model = Consumption
        fields = '__all__'

