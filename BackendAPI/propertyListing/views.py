from .models import PropertyListing, Utilities
from .serializers import PropertyListingSerializer, UtilitiesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class PropertyListingViewSet(viewsets.ModelViewSet):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer

class UtilitiesViewSet(viewsets.ModelViewSet):
    queryset = Utilities.objects.all()
    serializer_class = UtilitiesSerializer