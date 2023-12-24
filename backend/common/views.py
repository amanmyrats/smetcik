from tablib import Dataset

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

from common.pagination import CustomPagination
from common.models import (
    BaseUnit, BaseTrade, BaseLot, BaseCurrency, BaseCountry, 
    BaseBoqItem, BaseConsumption, BaseResource
)
from common.serializers import (
    BaseUnitModelSerializer, BaseTradeModelSerializer, BaseLotModelSerializer, 
    BaseCurrencyModelSerializer, BaseCountryModelSerializer, 
    BaseBoqItemModelSerializer, BaseConsumptionModelSerializer, BaseResourceModelSerializer
)
from common.filtersets import (
    BaseBoqItemFilterSet, 
)
from common.resources import (
    BaseBoqItemResource, 
)


class BaseUnitModelViewSet(ModelViewSet):
    queryset = BaseUnit.objects.all()
    serializer_class = BaseUnitModelSerializer
    

class BaseTradeModelViewSet(ModelViewSet):
    queryset = BaseTrade.objects.all()
    serializer_class = BaseTradeModelSerializer
    

class BaseLotModelViewSet(ModelViewSet):
    queryset = BaseLot.objects.all()
    serializer_class = BaseLotModelSerializer
    

class BaseCurrencyModelViewSet(ModelViewSet):
    queryset = BaseCurrency.objects.all()
    serializer_class = BaseCurrencyModelSerializer
    

class BaseCountryModelViewSet(ModelViewSet):
    queryset = BaseCountry.objects.all()
    serializer_class = BaseCountryModelSerializer


class BaseBoqItemModelViewset(ModelViewSet):
    queryset = BaseBoqItem.objects.all()
    serializer_class = BaseBoqItemModelSerializer
    filterset_class = BaseBoqItemFilterSet
    pagination_class = CustomPagination

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_boq_item_resource = BaseBoqItemResource()
        dataset = base_boq_item_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_boq_items.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_boq_item_resource = BaseBoqItemResource()

        result = base_boq_item_resource.import_data(dataset, dry_run=True, raise_exception=True)
        print(dir(result))
        print()
        print()
        print()
        print(dir(result.base_errors))
        for ee in result.base_errors: 
            print(ee.error)
        print()
        print()
        if not result.has_errors():
            base_boq_item_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseConsumptionModelViewSet(ModelViewSet):
    queryset = BaseConsumption.objects.all()
    serializer_class = BaseConsumptionModelSerializer


class BaseResourceModelViewSet(ModelViewSet):
    queryset = BaseResource.objects.all()
    serializer_class = BaseResourceModelSerializer
