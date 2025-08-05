from rest_framework import serializers
from .models import Order, OrderItem
from products.models import ProductVariant
from products.serializers import ProductVariantSerializer  # optional for nesting


class OrderItemSerializer(serializers.ModelSerializer):
    product_variant = ProductVariantSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product_variant', 'quantity', 'price']
        read_only_fields = ['id']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'id',
            'user',
            'address',
            'total_amount',
            'status',
            'payment_method',
            'is_paid',
            'ordered_at',
            'updated_at',
            'items',
        ]
        read_only_fields = ['id', 'ordered_at', 'updated_at']


class CreateOrderItemSerializer(serializers.Serializer):
    product_variant_id = serializers.UUIDField()
    quantity = serializers.IntegerField(min_value=1)


class CreateOrderSerializer(serializers.Serializer):
    address_id = serializers.UUIDField()
    payment_method = serializers.ChoiceField(choices=[choice[0] for choice in Order._meta.get_field('payment_method').choices])
    items = CreateOrderItemSerializer(many=True)

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Order must contain at least one item.")
        return value
