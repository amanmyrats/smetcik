import django_filters

from smeta.models import BoqItem


class BoqItemFilterSet(django_filters.FilterSet):

    name_tm = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = BoqItem
        fields = ['boq', 'lot', 'name_tm']