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
        fields = ['name_tm', 'name_ru', 'name_en', 'name_original']
       
