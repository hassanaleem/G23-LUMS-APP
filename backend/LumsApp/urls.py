from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('login.urls')),
    path('', include('events.urls')),
    path('', include('courses.urls')),
    path('', include('users.urls')),
    path('', include('fooditems.urls')),
    path('' , include('deadlines.urls')),
    path('' , include('coursegrades.urls')),
    path('' , include('notifications.urls')),
    path('' , include('posts.urls')),
    
]
