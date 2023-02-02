from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from accountEvents.views import AccountEventsViewSet

router=DefaultRouter()
router.register("AccountEvents", views.AccountEventsViewSet)
urlpatterns = [
    path('get/<int:id>/', views.AccountEventsGetView.as_view()),
    path('', include(router.urls)),
]