from django.contrib import admin

from company.models import Company, Project


admin.site.register(Company)
admin.site.register(Project)