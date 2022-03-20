from django.db import models

# Create your models here.

class Testback(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()
    date = models.DateTimeField()
    