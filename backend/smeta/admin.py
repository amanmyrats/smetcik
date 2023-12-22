from django.contrib import admin

from smeta.models import (
    Boq, BoqItem, Consumption, Resource, 
    Unit, Trade, Currency, Country, Lot
)


admin.site.register(Boq)
admin.site.register(BoqItem)
admin.site.register(Consumption)
admin.site.register(Resource)

admin.site.register(Unit)
admin.site.register(Trade)
admin.site.register(Currency)
admin.site.register(Country)
admin.site.register(Lot)
