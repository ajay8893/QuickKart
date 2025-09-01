from rest_framework import viewsets, permissions
from .models import UserProfile, Address
from .serializers import UserProfileSerializer, AddressSerializer

# Create your views here.

# userProfile Api


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # it only return the profile of the authenticated user
        return UserProfile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Address API

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # return address of the authenticated user
        return Address.objects.filter(user__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user.profile)
