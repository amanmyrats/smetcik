from django.db.models import Q

import django_filters

from smeta.models import (
    Unit, Trade, Lot, Currency, Country, 
    Boq, BoqItem, Consumption, Resource, 
)


class BoqFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Boq
        fields = ['project', 'name_tm']
        
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)


class UnitFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Unit
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
        
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)


class TradeFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Trade
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
            
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)


class LotFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Lot
        fields = ['trade', 'name_tm', 'name_ru', 'name_en', 'name_original']
    
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)
        

class CountryFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Country
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original']
    
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)
    

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
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = BoqItem
        fields = ['boq', 'lot', 'name_tm']

    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
    
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
        # Use Q objects to create OR conditions for each field
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})

        return queryset.filter(conditions)
    

class ResourceFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')
    brand = django_filters.CharFilter(lookup_expr='icontains')
    search = django_filters.CharFilter(method='filter_search')

    class Meta:
        model = Resource
        fields = ['boq', 'name_tm', 'name_ru', 'name_en', 'name_original', 'brand', 'country']
        
    def filter_search(self, queryset, name, value):
        if not value:
            return queryset
        search_fields = ['name_tm', 'name_ru', 'name_en', 'name_original', 'brand']
        conditions = Q()
        for field in search_fields:
            conditions |= Q(**{f'{field}__icontains':value})
        return queryset.filter(conditions)


class ConsumptionFilterSet(django_filters.FilterSet):

    class Meta:
        model = Consumption
        fields = ['boq_item', 'resource']
        
