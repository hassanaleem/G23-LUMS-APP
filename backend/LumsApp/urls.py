from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('login.urls')),
<<<<<<< HEAD
    path('', include('events.urls')),

=======
    path('', include('users.urls')),
    path('', include('fooditems.urls')),
    path('' , include('deadlines.urls')),
    path('' , include('coursegrades.urls')),
    
>>>>>>> Jawad
    # path('', include('testback.urls')),

]
