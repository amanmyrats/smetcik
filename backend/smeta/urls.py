from django.urls import path

from rest_framework.routers import DefaultRouter

from smeta.views import (
    BoqItemListCreateAPIView, ConsumptionListCreateAPIView, ResourceListCreateAPIView, 
    BoqModelViewSet, BoqItemRetrieveUpdateDestroyAPIView, 
    ConsumptionRetrieveUpdateDestroyAPIiew, 
    ResourceRetrieveUpdateDestroyAPIView, 
    MaterialExtraInfoModelViewSet
)


router = DefaultRouter()
router.register(r'boqs', BoqModelViewSet, basename='boq')
router.register(r'materialextrainfos', MaterialExtraInfoModelViewSet, basename='materialextrainfo')

urlpatterns = [
    path('boqitems/', BoqItemListCreateAPIView.as_view(), name='boqitem-list-create'),
    path('boqitems/<int:pk>/', BoqItemRetrieveUpdateDestroyAPIView.as_view(), name='boqitem-retrieve-update-delete'),
    path('consumptions/', ConsumptionListCreateAPIView.as_view(), name='consumption-list-create'),
    path('consumptions/<int:pk>/', ConsumptionRetrieveUpdateDestroyAPIiew.as_view(), name='consumption-retrieve-update-delete'),
    path('resources/', ResourceListCreateAPIView.as_view(), name='resource-list-create'), 
    path('resources/<int:pk>/', ResourceRetrieveUpdateDestroyAPIView.as_view(), name='resource-retrieve-update-delete'),
]

urlpatterns += router.urls