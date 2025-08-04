import uuid
from django.db import models
from orders.models import Order
from payments.models import Payment

RETURN_STATUS_CHOICES = [
    ('PENDING', 'Pending'),
    ('APPROVED', 'Approved'),
    ('REJECTED', 'Rejected'),
    ('REFUNDED', 'Refunded'),
]

REFUND_STATUS_CHOICES = [
    ('INITIATED', 'Initiated'),
    ('SUCCESS', 'Success'),
    ('FAILED', 'Failed'),
]


class OrderReturn(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='returns')
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=RETURN_STATUS_CHOICES, default='PENDING')
    requested_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Return for Order {self.order.id} - {self.status}"


class Refund(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_return = models.OneToOneField(OrderReturn, on_delete=models.CASCADE, related_name='refund')
    payment = models.ForeignKey(Payment, on_delete=models.SET_NULL, null=True)
    refund_amount = models.DecimalField(max_digits=10, decimal_places=2)
    refunded_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=REFUND_STATUS_CHOICES, default='INITIATED')

    def __str__(self):
        return f"Refund for {self.order_return.order.id} - {self.status}"
