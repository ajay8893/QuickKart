from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404

from .models import Product
from .serializers import ProductSerializer, ProductDetailSerializer


# list all products or create a new products
class ProductListCreateAPIView(APIView):
    # permissions

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not request.user.is_staff:
            return Response({'details': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# retrieve, update and delete a product
class ProductDetailAPIView(APIView):
    # Permission

    def get_object(self, pk):
        return get_object_or_404(Product, pk=pk)

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductDetailSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk)
        if not request.user.is_staff:
            return Response({'details': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = self.get_object(pk)
        if not request.user.is_staff:
            return Response({'details': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)

        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
