from django.urls import path
from . import views
from .views import AccountList

urlpatterns = [
    # path('', views.getData),
    # path('add/', views.addListingAccount),
    # path('update/', views.updateListingAccount),
    path('list/', AccountList.as_view())
]