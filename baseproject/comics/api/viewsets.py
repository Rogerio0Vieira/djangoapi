from rest_framework import viewsets
from comics.api import serializers
from comics import models

class ComicsViewSet(viewsets.ModelViewSet):
  serializer_class = serializers.ComicsSerializer
  queryset = models.Comics.objects.all()