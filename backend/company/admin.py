from django.contrib import admin

from company.models import (
    Company, Project, BaseCompanyUnit, 
    BaseCompanyTrade, BaseCompanyCurrency, BaseCompanyCountry, BaseCompanyLot, 
    BaseCompanyBoqItem, BaseCompanyConsumption, BaseCompanyResource
)


admin.site.register(Company)
admin.site.register(Project)

admin.site.register(BaseCompanyUnit)
admin.site.register(BaseCompanyTrade)
admin.site.register(BaseCompanyCurrency)
admin.site.register(BaseCompanyCountry)
admin.site.register(BaseCompanyLot)
admin.site.register(BaseCompanyBoqItem)
admin.site.register(BaseCompanyConsumption)
admin.site.register(BaseCompanyResource)
