from rest_framework import serializers
from .models import OrderReturn, Refund


class OrderReturnSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderReturn
        fields = [
            'id',
            'order',
            'reason',
            'status',
            'requested_at',
            'approved_at',
        ]
        read_only_fields = ['id', 'status', 'requested_at', 'approved_at']


class RefundSerializer(serializers.ModelSerializer):
    order_return = serializers.PrimaryKeyRelatedField(read_only=True)
    payment = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Refund
        fields = [
            'id',
            'order_return',
            'payment',
            'refund_amount',
            'refunded_at',
            'status',
        ]
        read_only_fields = ['id', 'refunded_at']
