from import_export import resources

from company.models import (
    BaseCompanyUnit, BaseCompanyTrade, BaseCompanyLot, BaseCompanyCountry, BaseCompanyCurrency, 
    BaseCompanyBoqItem, BaseCompanyResource, BaseCompanyConsumption, 
    Company, Project
)
from company.utils import (
    duplicate_units_to_company, duplicate_trades_to_company, 
    duplicate_countries_to_company, duplicate_currencies_to_company, 
    duplicate_resources_to_company, duplicate_boq_items_to_company
)

class CompanyResource(resources.ModelResource):
    
    class Meta:
        model = Company
        skip_unchanged = True
        # use_bulk = True
    
    def after_save_instance(
        self, instance: Company, using_transactions: bool, dry_run: bool,
    ):
        super().after_save_instance(instance, using_transactions, dry_run)
        # if dry_run is False:
        #     my_model_on_save_action(instance)
        if not dry_run:
            company_id = instance.pk
            print('company_id:',company_id)
            print(dir(instance))
            print(instance)
            duplicate_units_to_company(company_id)
            duplicate_trades_to_company(company_id)
            # Lots will be added automatically after trades
            duplicate_countries_to_company(company_id)
            duplicate_currencies_to_company(company_id)
            duplicate_resources_to_company(company_id)
            duplicate_boq_items_to_company(company_id)
            # Consumptions will be added automatically after boq items

class ProjectResource(resources.ModelResource):
    
    class Meta:
        model = Project
        skip_unchanged = True
        use_bulk = True


class BaseCompanyUnitResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyUnit
        skip_unchanged = True
        use_bulk = True


class BaseCompanyTradeResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyTrade
        skip_unchanged = True
        use_bulk = True


class BaseCompanyLotResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyLot
        skip_unchanged = True
        use_bulk = True


class BaseCompanyCountryResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyCountry
        skip_unchanged = True
        use_bulk = True


class BaseCompanyCurrencyResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyCurrency
        skip_unchanged = True
        use_bulk = True


class BaseCompanyBoqItemResource(resources.ModelResource):

    class Meta:
        model = BaseCompanyBoqItem
        skip_unchanged = True
        use_bulk = True


class BaseCompanyResourceResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyResource
        skip_unchanged = True
        use_bulk = True
        

class BaseCompanyConsumptionResource(resources.ModelResource):
    
    class Meta:
        model = BaseCompanyConsumption
        skip_unchanged = True
        use_bulk = True

