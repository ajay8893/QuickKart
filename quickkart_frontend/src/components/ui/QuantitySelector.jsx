import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function QuantitySelector({ value = 1, onChange }) {
  const [quantity, setQuantity] = useState(value);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className="flex justify-evenly items-center border-3 border-jordy-blue-600 rounded-[20px] overflow-hidden w-[140px] h-[50px] bg-white shadow-sm">
      <button
        onClick={handleDecrement}
        className="px-3 py-1"
      >
        <Minus size={20} className="text-gray-700" />
      </button>
      <span className="px-4 py-1 text-gray-800 font-medium">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-3 py-1"
      >
        <Plus size={20} className="text-gray-700" />
      </button>
    </div>
  );
}
