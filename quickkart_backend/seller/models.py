import uuid
from django.db import models
from django.conf import settings
from django.utils.text import slugify

# Create your models here.

class SellerProfile(models.Model):
    id = models.URLField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="seller_profile"
    )
    shop_name = models.CharField(max_length=255)
    shop_slug = models.SlugField(max_length=255)
    shop_description = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    business_address = models.TextField(blank=True, null=True)
    gst_number = models.CharField(max_length=64, blank=True, null=True)
    bank_account_name = models.CharField(max_length=255, blank=True, null=True)
    bank_account_number = models.CharField(max_length=64, blank=True, null=True)
    bank_ifsc = models.CharField(max_length=20, blank=True, null=True)
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.shop_slug:
            base = slugify(self.shop_name) or f"shop-{str(self.user.id)[:8]}"
            slug = base
            i = 1
            
            while SellerProfile.objects.filter(shop_slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.shop_slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.shop_name} ({self.user.email})"
