from django.urls import path
from .views import ProductDetailAPIView, ProductListCreateAPIView, ProductVariantListCreateAPIView, ProductVariantDetailAPIView


urlpatterns = [
    # Products
    path('', ProductListCreateAPIView.as_view(), name='product-list-create'),
    path('<uuid:pk>/', ProductDetailAPIView.as_view(), name='product-details'),

    # Product Variants
    path('variants/', ProductVariantListCreateAPIView.as_view(), name='variant-list-create'),
    path('variants/<uuid:pk>/', ProductVariantDetailAPIView.as_view(), name='variant-details'),
]
