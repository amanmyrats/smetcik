from tablib import Dataset

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import action
from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
)
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser

from common.pagination import CustomPagination
from smeta.models import (
    Boq, BoqItem, Consumption, Resource, Trade, Lot, Unit, Country, Currency
)
from smeta.serializers import (
    BoqItemModelSerializer, ConsumptionModelSerializer, ResourceModelSerializer, 
    BoqModelSerializer, 
    UnitModelSerializer, TradeModelSerializer, LotModelSerializer, 
    CountryModelSerializer, CurrencyModelSerializer
)
from smeta.resources import (
    UnitResource, TradeResource, LotResource, 
    CountryResource, CurrencyResource, 
    BoqItemResource, ResourceResource,
    ConsumptionResource
)
from smeta.filtersets import BoqItemFilterSet
from smeta.utils import (
    duplicate_company_units_to_boq, 
    duplicate_company_trades_to_boq, 
    duplicate_company_countries_to_boq, 
    duplicate_company_currencies_to_boq, 
    duplicate_company_resources_to_boq, 
    duplicate_company_boq_items_to_boq, 
)



class BoqModelViewSet(ModelViewSet):
    queryset = Boq.objects.all()
    serializer_class = BoqModelSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        boq_id = response.data.get('id')
        duplicate_company_units_to_boq(boq_id) 
        duplicate_company_trades_to_boq(boq_id) 
        # Lots will be duplicated automatically with trades
        duplicate_company_countries_to_boq(boq_id) 
        duplicate_company_currencies_to_boq(boq_id) 
        duplicate_company_resources_to_boq(boq_id) 
        duplicate_company_boq_items_to_boq(boq_id) 
        # Consumptions will be duplicated automatically with boq items

        return response


class BoqItemListCreateAPIView(ListCreateAPIView):
    queryset = BoqItem.objects.all()
    serializer_class = BoqItemModelSerializer
    filterset_class = BoqItemFilterSet
    pagination_class = CustomPagination

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    

class BoqItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = BoqItem.objects.all()
    serializer_class = BoqItemModelSerializer


class ConsumptionListCreateAPIView(ListCreateAPIView):
    queryset = Consumption.objects.all()
    serializer_class = ConsumptionModelSerializer
    filterset_fields = ('boq_item', 'resource',)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ConsumptionRetrieveUpdateDestroyAPIiew(RetrieveUpdateDestroyAPIView):
    queryset = Consumption.objects.all()
    serializer_class = ConsumptionModelSerializer


class ResourceListCreateAPIView(ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class ResourceRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceModelSerializer


class ResourceImportAPIView(GenericAPIView):
    parser_classes = [MultiPartParser]

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        file = request.FILES['excel']
        resource_resource = ResourceResource()

        dataset = Dataset().load(file)
        result = resource_resource.import_data(dataset, \
        dry_run=True, raise_errors=True)
        if not result.has_errors():
            resource_resource.import_data(dataset, \
            dry_run=False, raise_errors=True)
            return Response({"status": "Data imported successfully"})
        return Response({"status": "Failed to import"}, status=status.HTTP_400_BAD_REQUEST)


class ResourceExportAPIView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        resource_resource = ResourceResource()
        dataset = resource_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="resources.xlsx"'
        return response


class BoqItemImportAPIView(GenericAPIView):
    parser_classes = [MultiPartParser]

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        boq_item_resource = BoqItemResource()

        result = boq_item_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            boq_item_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BoqItemExportAPIView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        boq_item_resource = BoqItemResource()
        dataset = boq_item_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="boq_items.xlsx"'
        return response


class UnitModelViewSet(ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        unit_resource = UnitResource()
        dataset = unit_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="units.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        unit_resource = UnitResource()

        result = unit_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            unit_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class TradeModelViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeModelSerializer
       
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        trade_resource = TradeResource()
        dataset = trade_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="trades.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        trade_resource = TradeResource()

        result = trade_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            trade_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class LotModelViewSet(ModelViewSet):
    queryset = Lot.objects.all()
    serializer_class = LotModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        lot_resource = LotResource()
        dataset = lot_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="lots.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        lot_resource = LotResource()

        result = lot_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            lot_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class CurrencyModelViewSet(ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencyModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        currency_resource = CurrencyResource()
        dataset = currency_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="currencies.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        currency_resource = CurrencyResource()

        result = currency_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            currency_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class CountryModelViewSet(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountryModelSerializer

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        country_resource = CountryResource()
        dataset = country_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="countries.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        country_resource = CountryResource()

        result = country_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            country_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)

