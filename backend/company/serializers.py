from rest_framework.serializers import ModelSerializer

from company.models import Company, Project


class CompanyModelSerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        

class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'