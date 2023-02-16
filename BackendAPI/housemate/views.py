from .models import Housemate
from .serializers import HousemateSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from listingAccount.models import ListingAccount
from listingAccount.serializers import ListingAccountSerializer

class HousemateViewSet(viewsets.ModelViewSet):
    queryset = Housemate.objects.all()
    serializer_class = HousemateSerializer

class HousemateAccountGet(APIView):
    def get(self, request, id):
        snippet = Housemate.objects.filter(listing_account=id)
        array = []
        for account in snippet:
            try:
                array.append(ListingAccount.objects.get(id=account.listing_account.id))
            except:
                print("Error couldn't retrieve account with id", id)
        serializer = ListingAccountSerializer(array, many=True)
        return Response(serializer.data)