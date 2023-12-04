from rest_framework.routers import DefaultRouter

from company.views import CompanyModelViewSet, ProjectModelViewSet


router = DefaultRouter()
router.register(r'companies', CompanyModelViewSet, basename='company')
router.register(r'projects', ProjectModelViewSet, basename='project')

urlpatterns = router.urls