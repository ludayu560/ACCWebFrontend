from .models import PropertyListing, ListingUtilities
from .serializers import PropertyListingSerializer, ListingUtilitiesSerializer
from rest_framework import viewsets
from propertyListing.filters import PropertyListingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView

class PropertyListingViewSet(viewsets.ModelViewSet):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer

class ListingUtilitiesViewSet(viewsets.ModelViewSet):
    queryset = ListingUtilities.objects.all()
    serializer_class = ListingUtilitiesSerializer

class PropertyListingFilterViewSet(ListAPIView):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PropertyListingFilter