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
    BaseUnitFilterSet, BaseTradeFilterSet, BaseLotFilterSet, 
    BaseCountryFilterSet, BaseCurrencyFilterSet, BaseBoqItemFilterSet, 
    BaseResourceFilterSet, BaseConsumptionFilterSet
)
from common.resources import (
    BaseUnitResource, BaseTradeResource, BaseLotResource, BaseCountryResource, 
    BaseCurrencyResource, BaseBoqItemResource, BaseResourceResource,
    BaseConsumptionResource
)


class BaseUnitModelViewSet(ModelViewSet):
    queryset = BaseUnit.objects.all()
    serializer_class = BaseUnitModelSerializer
    filterset_class = BaseUnitFilterSet
    pagination_class = CustomPagination
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_unit_resource = BaseUnitResource()
        dataset = base_unit_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_units.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_unit_resource = BaseUnitResource()

        result = base_unit_resource.import_data(dataset, dry_run=True, raise_exception=True)
        print(dir(result))
        print(dir(result.base_errors))
        for error in result.base_errors:
            print(error.error)
            print(error)
        if not result.has_errors():
            base_unit_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseTradeModelViewSet(ModelViewSet):
    queryset = BaseTrade.objects.all()
    serializer_class = BaseTradeModelSerializer
    filterset_class = BaseTradeFilterSet
    pagination_class = CustomPagination
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_trade_resource = BaseTradeResource()
        dataset = base_trade_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_trades.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_trade_resource = BaseTradeResource()

        result = base_trade_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_trade_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseLotModelViewSet(ModelViewSet):
    queryset = BaseLot.objects.all()
    serializer_class = BaseLotModelSerializer
    filterset_class = BaseLotFilterSet
    pagination_class = CustomPagination
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_lot_resource = BaseLotResource()
        dataset = base_lot_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_lots.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_lot_resource = BaseLotResource()

        result = base_lot_resource.import_data(dataset, dry_run=True, raise_exception=True)

        for err in result.base_errors:
            print(err.error)
        if not result.has_errors():
            base_lot_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCurrencyModelViewSet(ModelViewSet):
    queryset = BaseCurrency.objects.all()
    serializer_class = BaseCurrencyModelSerializer
    filterset_class = BaseCurrencyFilterSet
    pagination_class = CustomPagination
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_currency_resource = BaseCurrencyResource()
        dataset = base_currency_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_currencies.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_currency_resource = BaseCurrencyResource()

        result = base_currency_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_currency_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCountryModelViewSet(ModelViewSet):
    queryset = BaseCountry.objects.all()
    serializer_class = BaseCountryModelSerializer
    filterset_class = BaseCountryFilterSet
    pagination_class = CustomPagination

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_country_resource = BaseCountryResource()
        dataset = base_country_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_countries.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_country_resource = BaseCountryResource()

        result = base_country_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_country_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)



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

        if not result.has_errors():
            base_boq_item_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseResourceModelViewSet(ModelViewSet):
    queryset = BaseResource.objects.all()
    serializer_class = BaseResourceModelSerializer
    filterset_class = BaseResourceFilterSet
    pagination_class = CustomPagination

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_resource_resource = BaseResourceResource()
        dataset = base_resource_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_resources.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_resource_resource = BaseResourceResource()

        result = base_resource_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_resource_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseConsumptionModelViewSet(ModelViewSet):
    queryset = BaseConsumption.objects.all()
    serializer_class = BaseConsumptionModelSerializer
    filterset_class = BaseConsumptionFilterSet
    pagination_class = CustomPagination

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_consumption_resource = BaseConsumptionResource()
        dataset = base_consumption_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_consumptions.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_consumption_resource = BaseConsumptionResource()

        result = base_consumption_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_consumption_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)