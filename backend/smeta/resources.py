from import_export import resources

from smeta.models import Resource, BoqItem


class ResourceResource(resources.ModelResource):

    class Meta:
        model = Resource
        skip_unchanged = True
        use_bulk = True


class BoqItemResource(resources.ModelResource):

    class Meta:
        model = BoqItem
        skip_unchanged = True
        use_bulk = True