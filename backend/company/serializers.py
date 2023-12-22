from rest_framework.serializers import ModelSerializer, StringRelatedField

from company.models import (
    Company, Project, BaseCompanyUnit, BaseCompanyTrade, 
    BaseCompanyLot, BaseCompanyCurrency, BaseCompanyCountry, 
    BaseCompanyBoqItem, BaseCompanyConsumption, BaseCompanyResource
)


class CompanyModelSerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        

class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class BaseCompanyUnitModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCompanyUnit
        fields = '__all__'


class BaseCompanyLotModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCompanyLot
        fields = '__all__'
        

class BaseCompanyTradeModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCompanyTrade
        fields = '__all__'


class BaseCompanyCurrencyModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCompanyCurrency
        fields = '__all__'


class BaseCompanyCountryModelSerializer(ModelSerializer):
    class Meta:
        model = BaseCompanyCountry
        fields = '__all__'


class BaseCompanyBoqItemModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseCompanyBoqItem
        fields = '__all__'


class BaseCompanyResourceModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseCompanyResource
        fields = '__all__'


class BaseCompanyConsumptionModelSerializer(ModelSerializer):
    
    class Meta:
        model = BaseCompanyConsumption
        fields = '__all__'

