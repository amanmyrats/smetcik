from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from smeta.models import Boq, BoqItem, Consumption, Resource, MaterialExtraInfo
from smeta.serializers import (
    BoqItemModelSerializer, ConsumptionModelSerializer, ResourceModelSerializer, 
    BoqModelSerializer, MaterialExtraInfoModelSerializer
)


class BoqModelViewSet(ModelViewSet):
    queryset = Boq.objects.all()
    serializer_class = BoqModelSerializer


class BoqItemListCreateAPIView(ListCreateAPIView):
    queryset = BoqItem.objects.all()
    serializer_class = BoqItemModelSerializer

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

        
class MaterialExtraInfoModelViewSet(ModelViewSet):
    queryset = MaterialExtraInfo.objects.all()
    serializer_class = MaterialExtraInfoModelSerializer