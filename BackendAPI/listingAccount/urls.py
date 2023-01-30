from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from events.views import EventsViewSet

router=DefaultRouter()
router.register("ListingAccount", views.ListingAccountViewSet)
router.register("PersonalTraits", views.PersonalTraitsViewSet)
router.register("Interests", views.InterestsViewSet)
router.register("Favorites", views.FavoritesViewSet)
router.register("Events", EventsViewSet)
urlpatterns = [
    path('get/<int:id>/', views.ListAccountGetView.as_view()),
    path('', include(router.urls)),
]