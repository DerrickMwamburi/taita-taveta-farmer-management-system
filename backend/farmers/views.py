from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Farmer
from .serializers import FarmerSerializer

class FarmerList(generics.ListCreateAPIView):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

class FarmerCount(APIView):
    def get(self, request):
        count = Farmer.objects.count()
        return Response({'count': count})
