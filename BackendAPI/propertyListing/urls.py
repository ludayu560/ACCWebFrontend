from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register("PropertyListing", views.PropertyListingViewSet)
router.register("ListingUtilities", views.ListingUtilitiesViewSet)
urlpatterns = [
    path('PropertyListing/filter', views.PropertyListingFilterViewSet.as_view(), name='PropertyListing'),
    path('', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)