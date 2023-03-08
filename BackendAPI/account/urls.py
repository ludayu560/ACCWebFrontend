# from django.contrib import admin
# from django.urls import path, include
# from . import views
# urlpatterns = [
#     path('get/<string:email>/', views.ListAccountGetView.as_view()),
# ]

from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register("User", views.AccountViewSet)
urlpatterns = [
    path('', include(router.urls)),
]