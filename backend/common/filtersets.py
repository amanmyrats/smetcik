import django_filters

from common.models import (
    BaseUnit, BaseTrade, BaseLot, BaseCountry, BaseCurrency, 
    BaseBoqItem, BaseResource, BaseConsumption
)

class BaseUnitFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseUnit
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']


class BaseTradeFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseTrade
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseLotFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseLot
        fields = ['trade', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCountryFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCountry
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCurrencyFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCurrency
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseBoqItemFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseBoqItem
        fields = ['lot', 'name_tm']
        

class BaseResourceFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseResource
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseConsumptionFilterSet(django_filters.FilterSet):

    class Meta:
        model = BaseConsumption
        fields = ['boq_item', 'resource']
        