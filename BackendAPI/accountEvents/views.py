from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AccountEvents
from .serializers import AccountEventsSerializer

class AccountEventsViewSet(viewsets.ModelViewSet):
    queryset = AccountEvents.objects.all()
    serializer_class = AccountEventsSerializer

class AccountEventsGetView(APIView):
    def get(self, request, id):
        snippet = AccountEvents.objects.get(id=id)
        serializer = AccountEventsSerializer(snippet, many=False)
        return Response(serializer.data)