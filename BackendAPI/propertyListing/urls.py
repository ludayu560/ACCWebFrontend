from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("PropertyListing", views.PropertyListingViewSet)
router.register("ListingUtilities", views.ListingUtilitiesViewSet)
urlpatterns = [
    path('PropertyListing/filter', views.PropertyListingFilterViewSet.as_view(), name='PropertyListing'),
    path('', include(router.urls))
]