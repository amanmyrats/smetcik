from django.db.models import Q

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
    search = django_filters.CharFilter(method='search_filter')

    class Meta:
        model = BaseTrade
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
                            
    def search_filter(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains': value})
        return queryset.filter(conditions)


class BaseLotFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='search_filter')

    class Meta:
        model = BaseLot
        fields = ['trade', 'name_tm', 'name_ru', 'name_en', 'name_original']
                            
    def search_filter(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains': value})
        return queryset.filter(conditions)


class BaseCountryFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='search_filter')

    class Meta:
        model = BaseCountry
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
                    
    def search_filter(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains': value})
        return queryset.filter(conditions)


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
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='search_filter')

    class Meta:
        model = BaseBoqItem
        fields = ['lot', 'name_tm', 'name_ru', 'name_en', 'name_original', 'search']
        
    def search_filter(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['code', 'name_tm', 'name_ru', 'name_en', 'name_original']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains': value})
        return queryset.filter(conditions)


class BaseResourceFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='search_filter')

    class Meta:
        model = BaseResource
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        
    def search_filter(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains': value})
        return queryset.filter(conditions)


class BaseConsumptionFilterSet(django_filters.FilterSet):

    class Meta:
        model = BaseConsumption
        fields = ['boq_item', 'resource']
        