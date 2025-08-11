from django.core.management.base import BaseCommand
from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from products.models import Product
from orders.models import Order
from returns.models import OrderReturn
from coupons.models import Coupon


class Command(BaseCommand):
    help = "Seed Groups and Permissions for QuickKart"

    def handle(self, *args, **options):
        role_permission = {
            "Admin": ["add_product", "change_product", "delete_product", "view_order", "change_order", "add_coupon", "process_return"],
            "Seller": ["add_product", "change_product", "view_order"],
            "Delivery": ["view_order", "change_order"],
            "Customer": [],
        }

        for role, perms in role_permission.items():
            group, _ = Group.objects.get_or_create(name=role)
            for codename in perms:
                perm = Permission.objects.filter(codename=codename).first()
                if perm:
                    group.permissions.add(perm)
        self.stdout.write(self.style.SUCCESS("Roles and Permission seeded."))
