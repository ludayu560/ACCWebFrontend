# Create your views here.
from .models import ListingAccount, Interest, PersonalTrait, Favorites
from .serializers import ListingAccountSerializer, InterestsSerializer, PersonalTraitsSerializer, FavoritesSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


class ListingAccountViewSet(viewsets.ModelViewSet):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer

class InterestsViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestsSerializer

class PersonalTraitsViewSet(viewsets.ModelViewSet):
    queryset = PersonalTrait.objects.all()
    serializer_class = PersonalTraitsSerializer

class FavoritesViewSet(viewsets.ModelViewSet):
    queryset = Favorites.objects.all()
    serializer_class = FavoritesSerializer
    
class AccountGetListing(APIView):
    def get(self, request, id):
        snippet = ListingAccount.objects.filter(user = id)
        array = []
        for listing_account in snippet:
            try:
                array.append(ListingAccount.objects.get(id=listing_account.id))
            except:
                print("Error", id)
        serializer = ListingAccountSerializer(array, many=True)
        return Response(serializer.data)