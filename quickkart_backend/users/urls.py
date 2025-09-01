from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, AddressViewSet

router = DefaultRouter()
router.register(r'profile', UserProfileViewSet, basename='userprofile')
router.register(r'address', AddressViewSet, basename='address')

urlpatterns = [
    path('', include(router.urls)),
]
