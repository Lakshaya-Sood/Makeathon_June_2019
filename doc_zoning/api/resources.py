# api/resources.py
from tastypie.resources import ModelResource
from api.models import Forms
class FormResource(ModelResource):
    class Meta:
        queryset = Forms.objects.all()
        resource_name = 'form'