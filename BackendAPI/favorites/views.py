from .models import Favorites
from .serializers import FavoritesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from propertyListing.models import PropertyListing
from propertyListing.serializers import PropertyListingSerializer

class FavoritesViewSet(viewsets.ModelViewSet):
    queryset = Favorites.objects.all()
    serializer_class = FavoritesSerializer

class FavoritesPropertyGet(APIView):
    def get(self, request, id):
        snippet = Favorites.objects.filter(listing_account=id)
        array = []
        for property in snippet:
            try:
                array.append(PropertyListing.objects.get(id=property.property_id.id))
            except:
                print("Error couldn't retrieve property listing with id", id)
        serializer = PropertyListingSerializer(array, many=True)
        return Response(serializer.data)