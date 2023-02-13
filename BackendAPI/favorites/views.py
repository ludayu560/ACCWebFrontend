from .models import Favorites
from .serializers import FavoritesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from propertyListing.models import PropertyListing
from propertyListing.serializers import PropertyListingSerializer
from propertyListing.views import PropertyListingViewSet, PropertyListingGetView

class FavoritesViewSet(viewsets.ModelViewSet):
    queryset = Favorites.objects.all()
    serializer_class = FavoritesSerializer

class FavoritesGetView(APIView):
    def get(self, request, id):
        snippet = Favorites.objects.get(id=id)
        serializer = FavoritesSerializer(snippet, many=False)
        return Response(serializer.data)

class FavoritesPropertyGet(APIView):
    def get(self, request, id):
        snippet = Favorites.objects.filter(listing_account=id)
        array = []
        for test in snippet:
            array.append(PropertyListing.objects.get(id=test.property_id.id))
        serializer = PropertyListingSerializer(array, many=True)
        return Response(serializer.data)