from django.urls import path
from ..listingAccount import views

urlpatterns = [
    path('', views.getData),
    path('add/', views.addListingAccount)
]