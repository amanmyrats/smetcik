from django.contrib import admin

from common.models import (
    BaseBoqItem, BaseConsumption, BaseCountry, BaseCurrency, 
    BaseLot, BaseResource, BaseTrade, BaseUnit
)

admin.site.register(BaseBoqItem)
admin.site.register(BaseConsumption)
admin.site.register(BaseResource)
admin.site.register(BaseCountry)
admin.site.register(BaseCurrency)
admin.site.register(BaseLot)
admin.site.register(BaseTrade)
admin.site.register(BaseUnit)