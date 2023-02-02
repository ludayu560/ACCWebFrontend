from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from accountEvents.views import AccountEventsViewSet
from favorites.views import FavoritesViewSet

router=DefaultRouter()
router.register("ListingAccount", views.ListingAccountViewSet)
router.register("PersonalTraits", views.PersonalTraitsViewSet)
router.register("Interests", views.InterestsViewSet)
router.register("AccountEvents", AccountEventsViewSet)
router.register("Favorites", FavoritesViewSet)
urlpatterns = [
    path('get/<int:id>/', views.ListAccountGetView.as_view()),
    path('', include(router.urls)),
]