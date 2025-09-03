# seller/serializers.py
from rest_framework import serializers
from .models import SellerProfile
from orders.models import Order, OrderItem
from products.serializers import ProductSerializer


class SellerProfileSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = SellerProfile
        fields = [
            'id', 'user', 'shop_name', 'shop_slug', 'shop_description', 'phone',
            'business_address', 'gst_number', 'bank_account_name', 'bank_account_number',
            'bank_ifsc', 'verified', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'user', 'verified', 'created_at', 'updated_at']


# Reuse existing ProductSerializer
class SellerProductSerializer(ProductSerializer):
    class Meta(ProductSerializer.Meta):
        read_only_fields = ['id', 'seller', 'created_at', 'updated_at']


class SellerOrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.SerializerMethodField()
    product_id = serializers.SerializerMethodField()

    class Meta:
        model = OrderItem
        fields = ['id', 'product_name', 'product_id', 'quantity', 'price']

    def get_product_name(self, obj):
        try:
            return obj.product_variant.product.name
        except Exception:
            return None

    def get_product_id(self, obj):
        try:
            return str(obj.product_variant.product.id)
        except Exception:
            return None


class SellerOrderSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()
    buyer = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = ['id', 'user', 'buyer', 'status', 'total_amount', 'ordered_at', 'items']

    def get_items(self, obj):
        request = self.context.get('request', None)
        seller_user = request.user if request else None
        q = obj.items.filter(product_variant__product__seller=seller_user)
        return SellerOrderItemSerializer(q, many=True).data

    def get_buyer(self, obj):
        try:
            u = obj.user
            return {'id': str(u.id), 'email': u.email}
        except Exception:
            return None
