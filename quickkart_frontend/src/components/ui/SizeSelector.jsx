import { useState } from "react";

export default function SizeSelector({ sizes, label = "SELECT SIZE" }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="mt-6 w-[50%]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">{label}</h3>
        <button className="text-xs underline">Size Guide</button>
      </div>
      <div className="grid grid-cols-8 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`border py-2 text-sm font-medium rounded-[20px]
              ${selectedSize === size 
                ? "border-black bg-black text-white" 
                : "border-gray-300 bg-white text-gray-700 hover:border-black"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
