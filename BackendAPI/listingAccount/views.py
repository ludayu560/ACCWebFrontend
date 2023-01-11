from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from listingAccount.models import ListingAccount
from .serializers import ListingAccountSerializer

@api_view(['GET'])
def getData(request):
    listingAccount = ListingAccount.objects.all()
    serializer = ListingAccountSerializer(listingAccount, many=True)
    return Response(serializer.data)

@api_view(['Post'])
def addListingAccount(request):
    serializer = ListingAccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer)