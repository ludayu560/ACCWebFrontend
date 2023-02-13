from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AccountEvents
from .serializers import AccountEventsSerializer
from events.models import Events
from events.serializers import EventsSerializer

class AccountEventsViewSet(viewsets.ModelViewSet):
    queryset = AccountEvents.objects.all()
    serializer_class = AccountEventsSerializer

class EventsGet(APIView):
    def get(self, request, id):
        snippet = AccountEvents.objects.filter(listing_account=id)
        array = []
        for event in snippet:
            try:
                array.append(Events.objects.get(id=event.events_id.id))
            except:
                print("Error couldn't retrieve event with id", id)
        serializer = EventsSerializer(array, many=True)
        return Response(serializer.data)