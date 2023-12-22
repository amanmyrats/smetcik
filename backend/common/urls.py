from rest_framework.routers import DefaultRouter

from common.views import ( 
    BaseUnitModelViewSet, BaseLotModelViewSet, BaseTradeModelViewSet, 
    BaseCurrencyModelViewSet, BaseCountryModelViewSet, 
    BaseBoqItemModelViewset, BaseConsumptionModelViewSet ,
    BaseResourceModelViewSet
)

router = DefaultRouter()

router.register(r'baseunits', BaseUnitModelViewSet, basename='base-unit')
router.register(r'baselots', BaseLotModelViewSet, basename='base-lot')
router.register(r'basetrades', BaseTradeModelViewSet, basename='base-trade')
router.register(r'basecurrencies', BaseCurrencyModelViewSet, basename='base-currency')
router.register(r'basecountries', BaseCountryModelViewSet, basename='base-country')
router.register(r'baseboqitems', BaseBoqItemModelViewset, basename='base-boq-item')
router.register(r'baseconsumptions', BaseConsumptionModelViewSet, basename='base-consumption')
router.register(r'baseresources', BaseResourceModelViewSet, basename='base-resource')

urlpatterns = router.urls