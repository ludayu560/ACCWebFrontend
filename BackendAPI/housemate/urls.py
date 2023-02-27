from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("Housemate", views.HousemateViewSet)
urlpatterns = [
    path('Housemate/get/<int:id>/', views.HousemateAccountGet.as_view()),
    path('', include(router.urls)),
]