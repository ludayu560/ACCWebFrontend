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
