from django.contrib import admin
from .models import SellerProfile


# Register your models here.
@admin.register(SellerProfile)
class SellerProfileAdmin(admin.ModelAdmin):
    list_display = ('shop_name', 'user', 'verified', 'created_at')
    search_fields = ('shop_name', 'user__email')
    list_filter = ('verified',)
