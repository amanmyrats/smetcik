from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status

from smeta.models import BoqItem, Consumption, Material
from smeta.serializers import BoqItemModelSerializer, ConsumptionModelSerializer, MaterialModelSerializer


class BoqItemListCreateAPIView(ListCreateAPIView):
    queryset = BoqItem.objects.all()
    serializer_class = BoqItemModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ConsumptionListCreateAPIView(ListCreateAPIView):
    queryset = Consumption.objects.all()
    serializer_class = ConsumptionModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class MaterialListCreateAPIView(ListCreateAPIView):
    queryset = Material.objects.all()
    serializer_class = MaterialModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

        
        