from rest_framework import serializers
from .models import Coupon


class CouponSerializer(serializers.ModelSerializer):
    is_valid = serializers.SerializerMethodField()

    class Meta:
        model = Coupon
        fields = [
            'id',
            'code',
            'discount_type',
            'discount_value',
            'min_order_amount',
            'max_discount',
            'valid_from',
            'valid_to',
            'active',
            'usage_limit',
            'used_count',
            'is_valid',
        ]
        read_only_fields = ['id', 'used_count', 'is_valid']

    def get_is_valid(self, obj):
        return obj.is_valid()


class ApplyCouponSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=50)
