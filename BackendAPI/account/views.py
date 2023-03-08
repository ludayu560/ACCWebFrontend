# from django.shortcuts import render
# from rest_framework import APIView
# from .models import User
# from .serializer import UserCreateSerializer
# # from rest_framework import permissions
# # Create your views here.
# class GetIdView(APIView):
#     def get(self, request, email):
#         snippet = ListingAccount.objects.get(email=email)
#         serializer = UserCreateSerializer(snippet, many=False)
#         return Response(serializer.data)

from rest_framework.views import APIView
from .models import User
from listingAccount.models import ListingAccount
from listingAccount.serializers import ListingAccountSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import UserCreateSerializer

class AccountViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    
    