# seller/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from .models import SellerProfile

User = settings.AUTH_USER_MODEL

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_seller_profile(sender, instance, created, **kwargs):
    # `sender` will be the real User model when registered
    if created and getattr(instance, 'user_type', None) == 'seller':
        # create default seller profile, slug auto-generated in save()
        SellerProfile.objects.create(user=instance, shop_name=f"{instance.username}'s shop")
