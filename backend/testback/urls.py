from rest_framework import routers
from .api import TestbackViewset

router = routers.DefaultRouter()
router.register('api/testback', TestbackViewset, 'testback')
urlpatterns = router.urls
