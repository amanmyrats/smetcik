from django.urls import path

from rest_framework.routers import DefaultRouter

from smeta.views import (
    BoqItemListCreateAPIView, ConsumptionListCreateAPIView, MaterialListCreateAPIView, 
    BoqModelViewSet, BoqItemRetrieveUpdateDestroyAPIView
)


router = DefaultRouter()
router.register(r'boqs', BoqModelViewSet, basename='boq')

urlpatterns = [
    path('boqitems/', BoqItemListCreateAPIView.as_view(), name='boqitem-list-create'),
    path('boqitems/<int:pk>/', BoqItemRetrieveUpdateDestroyAPIView.as_view(), name='boqitem-retrieve-update-delete'),
    path('consumptions/', ConsumptionListCreateAPIView.as_view(), name='consumption-list-create'),
    path('materials/', MaterialListCreateAPIView.as_view(), name='material-list-create'), 
]

urlpatterns += router.urls