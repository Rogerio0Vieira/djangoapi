from rest_framework import serializers
from comics import models

class ComicsSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Comics
    fields = '__all__'