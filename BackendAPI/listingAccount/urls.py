from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()

router.register("ListingAccount", views.ListingAccountViewSet)
router.register("PersonalTraits", views.PersonalTraitsViewSet)
router.register("Interests", views.InterestsViewSet)
urlpatterns = [
    path('ListingAccount/accountList/<int:id>/', views.AccountGetListing.as_view()),
    path('ListingAccount/filter', views.AccountFilterViewSet.as_view(), name='ListingAccount'),
    path('', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
