import django_filters

from smeta.models import (
    Unit, Trade, Lot, Currency, Country, Boq, BoqItem, Consumption, Resource, 
)


class BoqFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Boq
        fields = ['project', 'name_tm']


class UnitFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Unit
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']


class TradeFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Trade
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class LotFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Lot
        fields = ['trade', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class CountryFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Country
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class CurrencyFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Currency
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BoqItemFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BoqItem
        fields = ['boq', 'lot', 'name_tm']


class ResourceFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Resource
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class ConsumptionFilterSet(django_filters.FilterSet):

    class Meta:
        model = Consumption
        fields = ['boq_item', 'resource']
        
