from rest_framework.serializers import ModelSerializer

from smeta.models import Boq, BoqItem, Consumption, Material


class BoqModelSerializer(ModelSerializer):
    class Meta:
        model = Boq
        fields = '__all__'


class BoqItemModelSerializer(ModelSerializer):
    class Meta:
        model = BoqItem
        fields = '__all__'


class ConsumptionModelSerializer(ModelSerializer):
    class Meta:
        model = Consumption
        fields = '__all__'


class MaterialModelSerializer(ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'