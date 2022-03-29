from django.urls import path
from . import views

urlpatterns = [
    path('fooditems', views.fooditems, name='fooditems'),
]
