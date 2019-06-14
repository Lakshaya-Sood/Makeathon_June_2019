# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Forms(models.Model):
    form_name = models.CharField(max_length=200)
    form_id = models.CharField(max_length=200)
    barcode = models.CharField(max_length=200)
    cordinates = models.CharField(max_length=200)