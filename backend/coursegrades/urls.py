from django.urls import path
from . import views

urlpatterns = [
    path('coursegrades', views.coursegrades, name='coursegrades'),
]
