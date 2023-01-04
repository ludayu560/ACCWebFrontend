from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from homeowner.models import Homeowner
from .serializers import HomeownerSerializer

@api_view(['GET'])
def getData(request):
    homeowners = Homeowner.objects.all()
    serializer = HomeownerSerializer(homeowners, many=True)
    return Response(serializer.data)

@api_view(['Post'])
def addHomeowner(request):
    serializer = HomeownerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer)