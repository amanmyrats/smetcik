from rest_framework.serializers import ModelSerializer

from smeta.models import BoqItem, Consumption, Material

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