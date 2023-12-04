from django.urls import path

from rest_framework.routers import DefaultRouter

from smeta.views import (
    BoqItemListCreateAPIView, ConsumptionListCreateAPIView, MaterialListCreateAPIView, 
    BoqModelViewSet
)


router = DefaultRouter()
router.register(r'boqs', BoqModelViewSet, basename='boq')

urlpatterns = [
    path('boqitems/', BoqItemListCreateAPIView.as_view(), name='boqitem-list-create'),
    path('consumptions/', ConsumptionListCreateAPIView.as_view(), name='consumption-list-create'),
    path('materials/', MaterialListCreateAPIView.as_view(), name='material-list-create'), 
]

urlpatterns += router.urls