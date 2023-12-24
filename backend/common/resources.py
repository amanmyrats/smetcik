from import_export import resources

from common.models import (
    BaseBoqItem, 
)


class BaseBoqItemResource(resources.ModelResource):
    class Meta:
        model = BaseBoqItem
        skip_unchanged = True
        use_bulk = True