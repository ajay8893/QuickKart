# seller/views.py
from rest_framework import viewsets, permissions

from .models import SellerProfile
from products.models import Product
from orders.models import Order

from .serializers import SellerProfileSerializer, SellerProductSerializer, SellerOrderSerializer


# Custom permission: Only allow sellers
class IsSeller(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.user_type == "seller"


class SellerProfileViewSet(viewsets.ModelViewSet):
    """
    Manage seller profile (shop details)
    """

    serializer_class = SellerProfileSerializer
    permission_classes = [permissions.IsAuthenticated, IsSeller]

    def get_queryset(self):
        return SellerProfile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SellerProductViewSet(viewsets.ModelViewSet):
    """
    Manage products for a seller
    """

    serializer_class = SellerProductSerializer
    permission_classes = [permissions.IsAuthenticated, IsSeller]

    def get_queryset(self):
        return Product.objects.filter(seller=self.request.user)

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)


class SellerOrderViewSet(viewsets.ReadOnlyModelViewSet):
    """
    View all orders that contain this seller’s products
    """

    serializer_class = SellerOrderSerializer
    permission_classes = [permissions.IsAuthenticated, IsSeller]

    def get_queryset(self):
        return Order.objects.filter(
            items__product_variant__product__seller=self.request.user
        ).distinct()
