from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    order = serializers.PrimaryKeyRelatedField(read_only=True)  # or use OrderSerializer if nested

    class Meta:
        model = Payment
        fields = [
            'id',
            'order',
            'payment_id',
            'payment_status',
            'payment_method',
            'amount_paid',
            'paid_at',
        ]
        read_only_fields = ['id', 'paid_at']
