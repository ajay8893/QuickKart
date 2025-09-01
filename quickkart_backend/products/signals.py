from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.utils.text import slugify
from .models import Category

DEFAULT_CATEGORIES = [
    "Men",
    "Women",
    "Baby & Kids",
]


@receiver(post_migrate)
def create_default_categories(sender, **kwargs):
    if sender.name == "products":
        for name in DEFAULT_CATEGORIES:
            Category.objects.get_or_create(
                name=name,
                slug=slugify(name)
            )
