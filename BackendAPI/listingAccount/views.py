import django_filters

from django.forms import ModelChoiceField
from .models import ListingAccount, Interest, PersonalTrait
from .serializers import ListingAccountSerializer, InterestsSerializer, PersonalTraitsSerializer
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import ListAPIView
from listingAccount.filters import ListingAccountFilter
from django_filters.rest_framework import DjangoFilterBackend

class ListingAccountViewSet(viewsets.ModelViewSet):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class InterestsViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestsSerializer

class PersonalTraitsViewSet(viewsets.ModelViewSet):
    queryset = PersonalTrait.objects.all()
    serializer_class = PersonalTraitsSerializer
    
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
    
class AccountFilterViewSet(ListAPIView):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ListingAccountFilter
