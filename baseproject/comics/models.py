from django.db import models
from uuid import uuid4


class Comics(models.Model):
  id_comic = models.UUIDField(primary_key=True, default=uuid4, editable=False)
  title = models.CharField(max_length=255)
  author = models.CharField(max_length=255)
  purchase_date = models.DateField()
  read = models.BooleanField()
  is_reading = models.BooleanField()
  created_at = models.DateTimeField(auto_now_add=True)
