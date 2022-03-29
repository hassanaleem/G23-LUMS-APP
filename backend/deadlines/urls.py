from django.urls import path
from . import views

urlpatterns = [
    path('deadlines', views.deadlines, name='deadlines'),
]
