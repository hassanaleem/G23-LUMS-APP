from rest_framework import serializers
from testback.models import Testback

class TestbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testback
        fields = ('__all__')