from rest_framework.routers import DefaultRouter

from company.views import (
    CompanyModelViewSet, ProjectModelViewSet, 
    BaseCompanyUnitModelViewSet, BaseCompanyLotModelViewSet, BaseCompanyTradeModelViewSet, 
    BaseCompanyCurrencyModelViewSet, BaseCompanyCountryModelViewSet, 
    BaseCompanyBoqItemModelViewSet, BaseCompanyConsumptionModelViewSet, 
    BaseCompanyResourceModelViewSet
)

router = DefaultRouter()

router.register(r'companies', CompanyModelViewSet, basename='company')
router.register(r'projects', ProjectModelViewSet, basename='project')
router.register(
    r'basecompanyunits', BaseCompanyUnitModelViewSet, basename='base-company-unit'
    )
router.register(
    r'basecompanylots', BaseCompanyLotModelViewSet, basename='base-company-lot'
    )
router.register(
    r'basecompanytrades', BaseCompanyTradeModelViewSet, basename='base-company-trade'
    )
router.register(
    r'basecompanycurrencies', BaseCompanyCurrencyModelViewSet, basename='base-company-currency'
    )
router.register(
    r'basecompanycountries', BaseCompanyCountryModelViewSet, basename='base-company-country'
    )
router.register(
    r'basecompanyboqitems', BaseCompanyBoqItemModelViewSet, basename='base-company-boq-item'
    )
router.register(
    r'basecompanyconsumptions', BaseCompanyConsumptionModelViewSet, basename='base-company-consumption'
    )
router.register(
    r'basecompanyresources', BaseCompanyResourceModelViewSet, basename='base-company-resource'
    )

urlpatterns = router.urls