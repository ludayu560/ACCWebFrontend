# Create your views here.
from .models import ListingAccount, Interests, PersonalTraits
from .serializers import ListingAccountSerializer, InterestsSerializer, PersonalTraitsSerializer
from rest_framework import viewsets

class ListingAccountViewSet(viewsets.ModelViewSet):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer

class InterestsViewSet(viewsets.ModelViewSet):
    queryset = Interests.objects.all()
    serializer_class = InterestsSerializer

class PersonalTraitsViewSet(viewsets.ModelViewSet):
    queryset = PersonalTraits.objects.all()
    serializer_class = PersonalTraitsSerializer

