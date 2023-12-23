from rest_framework.viewsets import ModelViewSet

from common.models import BaseBoqItem
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


class CompanyModelViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyModelSerializer

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


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class BaseCompanyUnitModelViewSet(ModelViewSet):
    queryset = BaseCompanyUnit.objects.all()
    serializer_class = BaseCompanyUnitModelSerializer
    

class BaseCompanyTradeModelViewSet(ModelViewSet):
    queryset = BaseCompanyTrade.objects.all()
    serializer_class = BaseCompanyTradeModelSerializer
    

class BaseCompanyLotModelViewSet(ModelViewSet):
    queryset = BaseCompanyLot.objects.all()
    serializer_class = BaseCompanyLotModelSerializer
    

class BaseCompanyCurrencyModelViewSet(ModelViewSet):
    queryset = BaseCompanyCurrency.objects.all()
    serializer_class = BaseCompanyCurrencyModelSerializer
    

class BaseCompanyCountryModelViewSet(ModelViewSet):
    queryset = BaseCompanyCountry.objects.all()
    serializer_class = BaseCompanyCountryModelSerializer


class BaseCompanyBoqItemModelViewSet(ModelViewSet):
    queryset = BaseCompanyBoqItem.objects.all()
    serializer_class = BaseCompanyBoqItemModelSerializer


class BaseCompanyResourceModelViewSet(ModelViewSet):
    queryset = BaseCompanyResource.objects.all()
    serializer_class = BaseCompanyResourceModelSerializer

class BaseCompanyConsumptionModelViewSet(ModelViewSet):
    queryset = BaseCompanyConsumption.objects.all()
    serializer_class = BaseCompanyConsumptionModelSerializer