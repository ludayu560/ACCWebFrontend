from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("PropertyListing", views.PropertyListingViewSet)
urlpatterns = [
    path('get/<int:id>/', views.PropertyListingGetView.as_view()),
    path('', include(router.urls)),
]