from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("ListingAccount", views.ListingAccountViewSet)
router.register("PersonalTraits", views.PersonalTraitsViewSet)
router.register("Interests", views.InterestsViewSet)
urlpatterns = [
    path('ListingAccount/filter', views.AccountFilterViewSet.as_view(), name='ListingAccount'),
    path('', include(router.urls))
]