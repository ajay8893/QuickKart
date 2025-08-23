import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ProductCard from "../../../components/ui/ProductCard";

export default function ProductCarousel({ title, products, link }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10 p-3 px-2 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl md:text-xl font-semibold">{title}</h2>
        {link && (
          <a href={link} className="text-blue-600 hover:underline text-sm md:text-base">
            See More →
          </a>
        )}
      </div>

      {/* Scroll Buttons */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 ml-2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 mr-2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable Row */}
        {/* Scrollable Row */}
<div
  ref={scrollRef}
  className="flex space-x-6 overflow-x-scroll flex-nowrap w-full max-w-[100vw] no-scrollbar"
>
  {products.map((p, idx) => (
    <div key={idx} className="flex-shrink-0 w-[250px]">
      <ProductCard product={p} />
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
