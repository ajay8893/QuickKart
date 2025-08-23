import React from 'react'

export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
        type={type}
        onClick={onClick}
        className={`bg-jordy-blue-600 text-white px-4 rounded-[20px] hover:bg-jordy-blue-700 transition ${className}`}
        >
            {children}
    </button>
  );
}

