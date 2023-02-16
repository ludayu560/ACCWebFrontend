from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("PropertyListing", views.PropertyListingViewSet)
router.register("ListingUtilities", views.ListingUtilitiesViewSet)
urlpatterns = [
    path('', include(router.urls))
]