from .models import PropertyListing
from .serializers import PropertyListingSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class PropertyListingViewSet(viewsets.ModelViewSet):
    queryset = PropertyListing.objects.all()
    serializer_class = PropertyListingSerializer

class PropertyListingGetView(APIView):
    def get(self, request, id):
        snippet = PropertyListing.objects.get(id=id)
        serializer = PropertyListingSerializer(snippet, many=False)
        return Response(serializer.data)