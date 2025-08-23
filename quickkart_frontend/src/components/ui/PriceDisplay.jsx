export default function PriceDisplay({ price, discount }) {
  // discount in percentage, ex: 20 means 20%
  const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price;

  return (
    <div className="">
      {discount > 0 ? (
        <div className="flex items-center gap-3">
          {/* Discounted Price */}
          <span className="text-2xl font-bold text-red-800">
            ₹{discountedPrice}
          </span>

          {/* Original Price */}
          <span className="text-lg line-through text-gray-500">
            ₹{price}
          </span>

          {/* Discount Badge */}
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
            {discount}% OFF
          </span>
        </div>
      ) : (
        <span className="text-2xl font-bold text-gray-900">₹{price}</span>
      )}
    </div>
  );
}
