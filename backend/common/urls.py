from rest_framework.routers import DefaultRouter

from common.views import (
    UnitModelViewSet, LotModelViewSet, TradeModelViewSet, 
    CurrencyModelViewSet, CountryModelViewSet
)


router = DefaultRouter()
router.register(r'units', UnitModelViewSet, basename='unit')
router.register(r'lots', LotModelViewSet, basename='lot')
router.register(r'trades', TradeModelViewSet, basename='trade')
router.register(r'currencies', CurrencyModelViewSet, basename='currency')
router.register(r'countries', CountryModelViewSet, basename='country')

urlpatterns = router.urls