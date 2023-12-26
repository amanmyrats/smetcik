import django_filters

from company.models import (
    Company, Project, 
    BaseCompanyUnit, BaseCompanyTrade, BaseCompanyLot, 
    BaseCompanyCountry, BaseCompanyCurrency, 
    BaseCompanyBoqItem, BaseCompanyResource, 
    BaseCompanyConsumption
)

class CompanyFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Company
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']


class ProjectFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']
       

class BaseCompanyUnitFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyUnit
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']


class BaseCompanyTradeFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyTrade
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCompanyLotFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyLot
        fields = ['trade', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCompanyCountryFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyCountry
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCompanyCurrencyFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyCurrency
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCompanyBoqItemFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyBoqItem
        fields = ['company', 'lot', 'name_tm']
        

class BaseCompanyResourceFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    name_ru = django_filters.CharFilter(lookup_expr='icontains')
    name_en = django_filters.CharFilter(lookup_expr='icontains')
    name_original = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseCompanyResource
        fields = ['company', 'name_tm', 'name_ru', 'name_en', 'name_original']
        

class BaseCompanyConsumptionFilterSet(django_filters.FilterSet):

    class Meta:
        model = BaseCompanyConsumption
        fields = ['boq_item', 'resource']
        
