from rest_framework import serializers
from .models import Wishlist
from products.serializers import ProductSerializer  # optional nested product


class WishlistSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = Wishlist
        fields = ['id', 'user', 'product', 'added_at']
        read_only_fields = ['id', 'added_at']


class AddToWishlistSerializer(serializers.Serializer):
    product_id = serializers.UUIDField()
