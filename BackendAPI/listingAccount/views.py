from .models import ListingAccount, Interest, PersonalTrait
from .serializers import ListingAccountSerializer, InterestsSerializer, PersonalTraitsSerializer
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

