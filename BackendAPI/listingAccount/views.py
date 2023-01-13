from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from listingAccount.models import ListingAccount
from .serializers import ListingAccountSerializer
from rest_framework import generics
# from django.views.generic import ListCreateAPIView

from rest_framework import generics
from rest_framework.views import APIView

class AccountList(generics.ListCreateAPIView):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer



# @api_view(['GET'])
# def getData(request):
#     listingAccount = ListingAccount.objects.all()
#     serializer = ListingAccountSerializer(listingAccount, many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def addListingAccount(request):
#     serializer = ListingAccountSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer)

# @api_view(['PUT'])
# def updateListingAccount(request):
#     listingAccount = ListingAccount.objects.all()
#     serializer = ListingAccountSerializer(listingAccount, data = request.data, many=True)
#     data = {}
#     if serializer.is_valid():
#         serializer.save()
#         data["success"] = "update successful"
#         return Response(data=data)

