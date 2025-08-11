from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsInGroup(BasePermission):
    required_group = None

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.groups.filter(name=self.required_group).exists()
        )


class IsSeller(IsInGroup):
    required_group = "seller"


class IsAdmin(IsInGroup):
    required_group = "admin"


class IsDelivery(IsInGroup):
    required_group = "delivery"


class IsCustomer(IsInGroup):
    required_group = "customer"


class IsProductOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.seller == request.user


class SellerOrReadOnly(BasePermission):
    """
    Combines IsSeller for unsafe methods, allows read for all.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_authenticated and request.user.groups.filter(name='seller').exists()


class IsProductVariantOwner(BasePermission):
    """
    Allows access only to the seller who owns the parent product.
    """
    def has_object_permission(self, request, view, obj):
        return obj.product.seller == request.user
