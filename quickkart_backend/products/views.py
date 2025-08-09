from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.http import Http404
from django.db.models import ProtectedError
import logging

from .models import Product, ProductVariant
from orders.models import OrderItem
from cart.models import CartItem
from wishlist.models import Wishlist
from .serializers import ProductSerializer, ProductDetailSerializer, ProductVariantSerializer


logger = logging.getLogger(__name__)
# list all products or create a new products


class ProductListCreateAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        if request.user.user_type != 'seller':
            return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# retrieve, update and delete a product
class ProductDetailAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(Product, pk=pk)

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductDetailSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk)
        if request.user.user_type != 'seller':
            return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            product = self.get_object(pk)
            if request.user.user_type != 'seller':
                return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

            # check if product has variants
            if product.variants.exists():
                return Response(
                    {'detail': 'Cannot delete product with existing variants. Remove variants first.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            # Check if product is in any wishlist
            if Wishlist.objects.filter(product=product).exists():
                return Response(
                    {'detail': 'Cannot delete product that is in a wishlist.'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if CartItem.objects.filter(product_variant__product=product).exists():
                return Response(
                    {'detail': 'Cannot delete product that is in a cart.'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # if you have other related checks order
            if OrderItem.objects.filter(product_variant__product=product).exists():
                return Response(
                    {'detail': 'Cannot delete product that is part of existing orders.'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except Product.DoesNotExist:
            raise Http404

        except ProtectedError:
            return Response(
                {'detail': 'Cannot delete product because it is referenced by other records.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        except Exception as e:
            logger.error(f"Unexpected error deleting product {pk}: {e}", exc_info=True)
            return Response({'detail': f'Unexpected error: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# list all variants or create a new variants


class ProductVariantListCreateAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        variants = ProductVariant.objects.all()
        serializer = ProductVariantSerializer(variants, many=True)
        return Response(serializer.data)

    def post(self, request):
        if request.user.user_type != 'seller':
            return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductVariantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Retrieve, update and delete a variant

class ProductVariantDetailAPIView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(ProductVariant, pk=pk)

    def get(self, request, pk):
        variant = self.get_object(pk)
        serializer = ProductVariantSerializer(variant)
        return Response(serializer.data)

    def put(self, request, pk):
        variant = self.get_object(pk)
        if request.user.user_type != 'seller':
            return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductVariantSerializer(variant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            variant = self.get_object(pk)
            if request.user.user_type != 'seller':
                return Response({'detail': 'Not authorized, Only seller can create products.'}, status=status.HTTP_403_FORBIDDEN)

            # check if variant exist in any other orders
            if OrderItem.objects.filter(product_variant=variant).exists():
                return Response(
                    {'detail': 'Cannot delete variant that is part of existing orders'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # check if variant in any cart
            if CartItem.objects.filter(product_variant=variant).exists():
                return Response(
                    {'detail': 'Cannot delete variant that is currently in a user cart'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # try deleting
            variant.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except ProductVariant.DoesNotExist:
            raise Http404

        except ProtectedError:
            return Response(
                {'detail': 'Cannot delete variant because it is referenced by other records.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        except Exception as e:
            logger.error(f'Unexpected error deleting variant {pk}: {e}', exc_info=True)
            return Response(
                {'detail': f'Unexpected error: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
