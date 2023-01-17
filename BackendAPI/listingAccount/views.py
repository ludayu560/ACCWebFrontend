from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from listingAccount.models import ListingAccount
from .serializers import ListingAccountSerializer
from rest_framework import generics

from rest_framework import generics
from rest_framework.views import APIView

from django.views.generic.edit import UpdateView

class AccountList(generics.ListCreateAPIView):
    queryset = ListingAccount.objects.all()
    serializer_class = ListingAccountSerializer

class updateAccountList(UpdateView):
    model = ListingAccount
    fields = '__all__'
    success_url = "/lel"
