from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("Notifications", views.NotificationsViewSet)
urlpatterns = [
    path('', include(router.urls))
]