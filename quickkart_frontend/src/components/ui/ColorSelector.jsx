import { useState } from "react";

export default function ColorSelector({ colors, label = "COLOUR" }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2">
        {label}: <span className="capitalize">{selectedColor.name}</span>
      </h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full border-2 
              ${selectedColor.name === color.name ? "border-black" : "border-gray-300"}`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
