import django_filters

from common.models import (
    BaseBoqItem, 
)

class BaseBoqItemFilterSet(django_filters.FilterSet):
    name_tm = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = BaseBoqItem
        fields = ['lot', 'name_tm']
        