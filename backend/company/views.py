from tablib import Dataset

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

from common.pagination import CustomPagination

from company.models import (
    Company, Project, 
    BaseCompanyUnit, BaseCompanyTrade, BaseCompanyLot, 
    BaseCompanyCurrency, BaseCompanyCountry, 
    BaseCompanyBoqItem, BaseCompanyConsumption, 
    BaseCompanyResource
)
from company.serializers import (
    CompanyModelSerializer, ProjectModelSerializer, 
    BaseCompanyUnitModelSerializer, BaseCompanyTradeModelSerializer, 
    BaseCompanyLotModelSerializer, BaseCompanyCurrencyModelSerializer, 
    BaseCompanyCountryModelSerializer, 
    BaseCompanyBoqItemModelSerializer, BaseCompanyResourceModelSerializer, 
    BaseCompanyConsumptionModelSerializer
)
from company.utils import (
    duplicate_units_to_company, duplicate_trades_to_company, 
    duplicate_countries_to_company, duplicate_currencies_to_company, 
    duplicate_resources_to_company, duplicate_boq_items_to_company
)
from company.resources import (
    BaseCompanyUnitResource, BaseCompanyTradeResource, BaseCompanyLotResource, 
    BaseCompanyCountryResource, BaseCompanyCurrencyResource, 
    BaseCompanyBoqItemResource, BaseCompanyResourceResource,
    BaseCompanyConsumptionResource, CompanyResource, ProjectResource
)
from company.filtersets import (
    CompanyFilterSet, ProjectFilterSet
)


class CompanyModelViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyModelSerializer
    filterset_class = CompanyFilterSet
    pagination_class = CustomPagination

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        company_id = response.data.get('id')
        duplicate_units_to_company(company_id)
        duplicate_trades_to_company(company_id)
        # Lots will be added automatically after trades
        duplicate_countries_to_company(company_id)
        duplicate_currencies_to_company(company_id)
        duplicate_resources_to_company(company_id)
        duplicate_boq_items_to_company(company_id)
        # Consumptions will be added automatically after boq items
        return response
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        company_resource = CompanyResource()
        dataset = company_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="companies.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        company_resource = CompanyResource()

        result = company_resource.import_data(dataset, dry_run=True, raise_exception=True)
        for base_error in result.base_errors:
            print(base_error.error)
        if not result.has_errors():
            company_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilterSet
    pagination_class = CustomPagination

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        project_resource = ProjectResource()
        dataset = project_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="projects.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        project_resource = ProjectResource()

        result = project_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            project_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCompanyUnitModelViewSet(ModelViewSet):
    queryset = BaseCompanyUnit.objects.all()
    serializer_class = BaseCompanyUnitModelSerializer

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_unit_resource = BaseCompanyUnitResource()
        dataset = base_company_unit_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_units.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_unit_resource = BaseCompanyUnitResource()

        result = base_company_unit_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_unit_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCompanyTradeModelViewSet(ModelViewSet):
    queryset = BaseCompanyTrade.objects.all()
    serializer_class = BaseCompanyTradeModelSerializer
       
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_trade_resource = BaseCompanyTradeResource()
        dataset = base_company_trade_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_trades.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_trade_resource = BaseCompanyTradeResource()

        result = base_company_trade_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_trade_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCompanyLotModelViewSet(ModelViewSet):
    queryset = BaseCompanyLot.objects.all()
    serializer_class = BaseCompanyLotModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_lot_resource = BaseCompanyLotResource()
        dataset = base_company_lot_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_lots.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_lot_resource = BaseCompanyLotResource()

        result = base_company_lot_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_lot_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)


class BaseCompanyCurrencyModelViewSet(ModelViewSet):
    queryset = BaseCompanyCurrency.objects.all()
    serializer_class = BaseCompanyCurrencyModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_currency_resource = BaseCompanyCurrencyResource()
        dataset = base_company_currency_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_currencies.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_currency_resource = BaseCompanyCurrencyResource()

        result = base_company_currency_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_currency_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)



class BaseCompanyCountryModelViewSet(ModelViewSet):
    queryset = BaseCompanyCountry.objects.all()
    serializer_class = BaseCompanyCountryModelSerializer

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_country_resource = BaseCompanyCountryResource()
        dataset = base_company_country_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_countries.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_country_resource = BaseCompanyCountryResource()

        result = base_company_country_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_country_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)



class BaseCompanyBoqItemModelViewSet(ModelViewSet):
    queryset = BaseCompanyBoqItem.objects.all()
    serializer_class = BaseCompanyBoqItemModelSerializer

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_boq_item_resource = BaseCompanyBoqItemResource()
        dataset = base_company_boq_item_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_boq_items.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_boq_item_resource = BaseCompanyBoqItemResource()

        result = base_company_boq_item_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_boq_item_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)



class BaseCompanyResourceModelViewSet(ModelViewSet):
    queryset = BaseCompanyResource.objects.all()
    serializer_class = BaseCompanyResourceModelSerializer

    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_resource_resource = BaseCompanyResourceResource()
        dataset = base_company_resource_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_resources.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_resource_resource = BaseCompanyResourceResource()

        result = base_company_resource_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_resource_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)

class BaseCompanyConsumptionModelViewSet(ModelViewSet):
    queryset = BaseCompanyConsumption.objects.all()
    serializer_class = BaseCompanyConsumptionModelSerializer
    
    @action(detail=False, methods=['get'])
    def exporttoexcel(self, request, *args, **kwargs):
        base_company_consumption_resource = BaseCompanyConsumptionResource()
        dataset = base_company_consumption_resource.export()
        response = HttpResponse(dataset.xlsx, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="base_company_consumptions.xlsx"'
        return response
    
    @csrf_exempt
    @action(detail=False, methods=['post'])
    def importfromexcel(self, request, *args, **kwargs):
        excel = request.FILES['excel']
        dataset = Dataset().load(excel)

        base_company_consumption_resource = BaseCompanyConsumptionResource()

        result = base_company_consumption_resource.import_data(dataset, dry_run=True, raise_exception=True)

        if not result.has_errors():
            base_company_consumption_resource.import_data(dataset, dry_run=False, raise_exception=True)
            return Response({'status': 'Imported successfully'})
        return Response({'status': 'Error when importing'}, status=status.HTTP_400_BAD_REQUEST)