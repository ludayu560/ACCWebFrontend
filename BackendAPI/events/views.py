# Create your views here.
from .models import Events
from .serializers import EventsSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

class EventsGetView(APIView):
    def get(self, request, id):
        snippet = Events.objects.get(id=id)
        serializer = EventsSerializer(snippet, many=False)
        return Response(serializer.data)
