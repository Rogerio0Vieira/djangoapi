from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from comics.api import serializers
from comics import models

@api_view(['GET', 'POST'])
def comics_list(request):
  if request.method == 'GET':
    data = models.Comics.objects.all()

    serializer = serializers.ComicsSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

  elif request.method == 'POST':
    serializer = serializers.ComicsSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.data.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def comics_detail(request, pk):
  try:
    comic = serializers.ComicsSerializer.objects.get(pk=pk)
  except serializers.ComicsSerializer.DoNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'PUT':
    serializer = serializers.ComicsSerializer(comic, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializers.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    comic.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)