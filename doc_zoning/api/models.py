# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Forms(models.Model):
    form_name = models.CharField(max_length=200)
    form_id = models.CharField(max_length=200)
    barcode = models.CharField(max_length=200)
    cordinates = models.CharField(max_length=200)
# from mongoengine import Document, EmbeddedDocument, fields

# class Form(Document):
#     formId = fields.StringField(required=True)
#     name = fields.StringField(required=True, null=True)
#     inputs = fields.ListField(fields.EmbeddedDocumentField(ToolInput))

# class ToolInput(EmbeddedDocument):
#     name = fields.StringField(required=True)
#     value = fields.DynamicField(required=True)