from rest_framework import serializers
from .models import Product, ProductVariant, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'parent']


class ProductVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariant
        fields = [
            'id',
            'product',
            'sku',
            'size',
            'color',
            'stock',
            'additional_price',
            'variant_image',
        ]


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'base_price',
            'brand',
            'category',
            'image',
            'is_active',
            'created_at',
            'updated_at',
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    variants = ProductVariantSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'base_price',
            'brand',
            'category',
            'image',
            'is_active',
            'created_at',
            'updated_at',
            'variants',
        ]
