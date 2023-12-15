from django.contrib import admin

from smeta.models import Boq, BoqItem, Consumption, Resource, MaterialExtraInfo


admin.site.register(Boq)
admin.site.register(BoqItem)
admin.site.register(Consumption)
admin.site.register(Resource)
admin.site.register(MaterialExtraInfo)