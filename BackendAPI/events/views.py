from .models import Events
from .serializers import EventsSerializer
from rest_framework import permissions, viewsets
from rest_framework.parsers import MultiPartParser, FormParser

class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)