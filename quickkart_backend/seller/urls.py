# seller/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SellerProfileViewSet, SellerProductViewSet, SellerOrderViewSet

router = DefaultRouter()
router.register(r"profile", SellerProfileViewSet, basename="seller-profile")
router.register(r"products", SellerProductViewSet, basename="seller-products")
router.register(r"orders", SellerOrderViewSet, basename="seller-orders")

urlpatterns = [
    path("", include(router.urls)),
]


	# •	GET /api/seller/profile/ → Get seller profile
	# •	POST /api/seller/profile/ → Create seller profile (once)
	# •	PUT /api/seller/profile/{id}/ → Update profile
	# •	GET /api/seller/products/ → List seller’s products
	# •	POST /api/seller/products/ → Add product
	# •	PUT /api/seller/products/{id}/ → Update product
	# •	DELETE /api/seller/products/{id}/ → Delete product
	# •	GET /api/seller/orders/ → List all orders containing seller’s products
