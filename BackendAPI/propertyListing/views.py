from .models import PropertyListing, ListingUtilities
from .serializers import PropertyListingSerializer, ListingUtilitiesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class PropertyListingViewSet(viewsets.ModelViewSet):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer

class ListingUtilitiesViewSet(viewsets.ModelViewSet):
    queryset = ListingUtilities.objects.all()
    serializer_class = ListingUtilitiesSerializer