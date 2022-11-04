from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from comics.api import viewsets as comicsviewsets 

route = routers.DefaultRouter()

route.register(r'comics', comicsviewsets.ComicsViewSet, basename="Comics")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
]
