from django.urls import path
from . import views
from .views import AccountList
from .views import updateAccountList
urlpatterns = [
    path('list/', AccountList.as_view()),
    path('<pk>/update',  updateAccountList.as_view())
]