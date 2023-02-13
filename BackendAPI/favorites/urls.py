from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("Favorites", views.FavoritesViewSet)
urlpatterns = [
    path('Favorites/get/<int:id>/', views.FavoritesPropertyGet.as_view()),
    path('', include(router.urls)),
]