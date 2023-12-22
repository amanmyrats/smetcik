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


class CompanyModelViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyModelSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        base_boq_items = BaseBoqItem.objects.all()
        for base_boq_item in base_boq_items:
            new_company_boq_item = BaseCompanyBoqItem()

            unit = BaseCompanyUnit.objects.all().first()
            lot = BaseCompanyLot.objects.all().first()
            new_company_boq_item.lot = lot
            new_company_boq_item.unit = unit
            new_company_boq_item.code = base_boq_item.code
            new_company_boq_item.name_tm = base_boq_item.name_tm
            new_company_boq_item.name_ru = base_boq_item.name_ru
            new_company_boq_item.name_en = base_boq_item.name_en
            new_company_boq_item.name_original = base_boq_item.name_original
            new_company_boq_item.quantity = base_boq_item.quantity
            new_company_boq_item.material_unit_price = base_boq_item.material_unit_price
            new_company_boq_item.labor_unit_price = base_boq_item.labor_unit_price
            new_company_boq_item.transport_unit_price = base_boq_item.transport_unit_price
            new_company_boq_item.save()

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