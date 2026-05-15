// src/components/SidebarButton.tsx
"use client";

import Arrow from "../svg/Arrow";


interface ArrowButtonProps {
  isOpen: boolean;
  onClick: () => void; 
}

export default function ArrowButton({ isOpen, onClick }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-50 p-2 bg-orange-600 text-white rounded-full hover:scale-110 transition shadow-md"
      aria-label="Abrir menu de jogos"
    >
      <Arrow
        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}