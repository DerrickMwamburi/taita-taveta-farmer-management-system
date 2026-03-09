from django.db import models

class Farmer(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    crops = models.CharField(max_length=200)
    contact = models.CharField(max_length=50)

    def __str__(self):
        return self.name