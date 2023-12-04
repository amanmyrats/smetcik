from django.contrib import admin

from smeta.models import Boq, BoqItem, Consumption, Material


admin.site.register(Boq)
admin.site.register(BoqItem)
admin.site.register(Consumption)
admin.site.register(Material)