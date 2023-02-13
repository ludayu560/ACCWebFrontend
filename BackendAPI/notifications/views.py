# Create your views here.
from .models import Notifications
from .serializers import NotificationsSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer