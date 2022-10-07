from xml.etree.ElementInclude import include
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.index),
    path('s1/', views.s1, name='s1')
]
