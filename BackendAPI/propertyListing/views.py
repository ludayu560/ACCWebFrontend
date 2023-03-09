from .models import PropertyListing, ListingUtilities
from .serializers import PropertyListingSerializer, ListingUtilitiesSerializer
from rest_framework import viewsets, permissions
from propertyListing.filters import PropertyListingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from rest_framework.parsers import MultiPartParser, FormParser

class PropertyListingViewSet(viewsets.ModelViewSet):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class ListingUtilitiesViewSet(viewsets.ModelViewSet):
    queryset = ListingUtilities.objects.all()
    serializer_class = ListingUtilitiesSerializer

class PropertyListingFilterViewSet(ListAPIView):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PropertyListingFilter