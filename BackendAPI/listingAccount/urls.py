from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('add/', views.addListingAccount),
    path('update/', views.updateListingAccount)
]