from django.db import models

from rest_framework.serializers import ModelSerializer, SerializerMethodField

from smeta.models import Boq, BoqItem, Consumption, Resource, MaterialExtraInfo


class BoqModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from company.serializers import ProjectModelSerializer
        self.fields['project_object'] = ProjectModelSerializer(source='project', read_only=True)
    class Meta:
        model = Boq
        fields = '__all__'


class BoqItemModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from common.serializers import UnitModelSerializer
        self.fields['unit_object'] = UnitModelSerializer(source='unit', read_only=True)
        
    class Meta:
        model = BoqItem
        fields = '__all__'


class MaterialExtraInfoModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from common.serializers import CountryModelSerializer
        self.fields['country_object'] = CountryModelSerializer(source='country', read_only=True)
        
    class Meta:
        model = MaterialExtraInfo
        fields = '__all__'


class ResourceModelSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from common.serializers import UnitModelSerializer, CountryModelSerializer
        self.fields['unit_object'] = UnitModelSerializer(source='unit', read_only=True)
        self.fields['country_object'] = CountryModelSerializer(source='country', read_only=True)
    quantity = SerializerMethodField()
    extra_infos = MaterialExtraInfoModelSerializer(many=True, read_only=True)
    class Meta:
        model = Resource
        fields = '__all__'

    def get_quantity(self, obj):
        return obj.quantity


class ConsumptionModelSerializer(ModelSerializer):
    boq_item_object = BoqItemModelSerializer(source='boq_item', read_only=True)
    resource_object = ResourceModelSerializer(source='resource', read_only=True)
    class Meta:
        model = Consumption
        fields = '__all__'