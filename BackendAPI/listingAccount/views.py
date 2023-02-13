from .models import ListingAccount, Interest, PersonalTrait, Lifestyle
from .serializers import ListingAccountSerializer, InterestsSerializer, PersonalTraitsSerializer, LifestyleSerializer
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

class LifestyleViewSet(viewsets.ModelViewSet):
    queryset = Lifestyle.objects.all()
    serializer_class = LifestyleSerializer