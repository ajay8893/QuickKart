// src/components/ProductCard.jsx
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-jordy-blue-200 rounded-2xl shadow hover:shadow-lg hover:scale-105 p-3 transition flex flex-col">
      {/* Product Image */}
      <div className="relative w-[90%] ml-3 h-40 sm:h-48 md:h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-lg">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mt-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={12}
                className="sm:w-4 sm:h-4"
                fill={i < product.rating ? "currentColor" : "none"}
                stroke="currentColor"
              />
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mt-2">
          <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="ml-2 text-xs sm:text-sm text-gray-500 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
