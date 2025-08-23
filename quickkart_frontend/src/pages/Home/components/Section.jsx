// src/components/Section.jsx
import ProductCard from "../../../components/ui/ProductCard";
import { Link } from "react-router-dom";

export default function Section({ title, link, products }) {
  return (
    <div className=" p-3 mb-10 px-2 sm:px-4 md:px-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <Link to={link} className="text-blue-600 text-sm sm:text-base hover:underline">
          See More →
        </Link>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No products found.</p>
      )}
    </div>
  );
}
