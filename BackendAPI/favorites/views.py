from .models import Favorites
from .serializers import FavoritesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class FavoritesViewSet(viewsets.ModelViewSet):
    queryset = Favorites.objects.all()
    serializer_class = FavoritesSerializer

class FavoritesGetView(APIView):
    def get(self, request, id):
        snippet = Favorites.objects.get(id=id)
        serializer = FavoritesSerializer(snippet, many=False)
        return Response(serializer.data)
