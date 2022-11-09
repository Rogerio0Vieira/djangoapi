from django.db import models
from uuid import uuid4


class Comics(models.Model):
  id_comic = models.UUIDField(primary_key=True, default=uuid4, editable=False)
  title = models.CharField(max_length=255)
  author = models.CharField(max_length=255)
  purchase_date = models.DateField()
  reading = models.BooleanField()
  finished = models.BooleanField()
  want_to_read = models.BooleanField()
  cover = models.ImageField(upload_to ='uploads/', default='')
  created_at = models.DateTimeField(auto_now_add=True)
