from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tenant.models import Tenant
from .serializers import TenantSerializer

@api_view(['GET'])
def getData(request):
    tenants = Tenant.objects.all()
    serializer = TenantSerializer(tenants, many=True)
    return Response(serializer.data)

@api_view(['Post'])
def addTenant(request):
    serializer = TenantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer)