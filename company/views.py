from rest_framework.viewsets import ModelViewSet

from company.models import Company, Project
from company.serializers import CompanyModelSerializer, ProjectModelSerializer


class CompanyModelViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer