from rest_framework import viewsets, permissions
from .serializers import TestbackSerializer
from testback.models import Testback
class TestbackViewset(viewsets.ModelViewSet):
    queryset = Testback.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TestbackSerializer
