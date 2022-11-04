from django.contrib import admin
from django.urls import path, re_path

from comics.api import viewsets 

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/comics/$', viewsets.comics_list),
    re_path(r'^api/comics/([0-9])$', viewsets.comics_detail),
]
