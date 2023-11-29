from django.contrib import admin

from common.models import Unit, Trade, Currency, Country, Lot


admin.site.register(Unit)
admin.site.register(Trade)
admin.site.register(Currency)
admin.site.register(Country)
admin.site.register(Lot)
