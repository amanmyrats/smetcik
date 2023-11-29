from django.urls import path

from smeta.views import BoqItemListCreateAPIView, ConsumptionListCreateAPIView, MaterialListCreateAPIView


urlpatterns = [
    path('boqitems/', BoqItemListCreateAPIView.as_view(), name='boqitem-list-create'),
    path('consumptions/', ConsumptionListCreateAPIView.as_view(), name='consumption-list-create'),
    path('materials/', MaterialListCreateAPIView.as_view(), name='material-list-create'), 
]