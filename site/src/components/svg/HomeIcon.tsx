import React from "react";

interface HomeIconProps {
  /**
   * Classes do Tailwind para largura e altura.
   * @default 'w-16 h-16'
   */
  size?: string;

  /**
   * Classe de cor de texto do Tailwind para a casa e contorno do círculo.
   * @default 'text-black'
   */
  iconColor?: string;

  /**
   * Classe de preenchimento (fill) do Tailwind para o fundo do círculo.
   * @default 'fill-transparent'
   */
  bgColor?: string;

  /**
   * Classes adicionais (opcional).
   */
  className?: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({
  size = "w-16 h-16",
  iconColor = "text-black",
  bgColor = "fill-transparent",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${iconColor} ${className}`}
    >
      {/* Círculo de Fundo com Contorno */}
      <circle
        cx="12"
        cy="12"
        r="11"
        className={`${bgColor} stroke-current`}
        strokeWidth="1.2"
      />

      {/* Chaminé */}
      <rect x="15.5" y="4.5" width="2" height="5" className="fill-current" />

      {/* Corpo da Casa e Telhado */}
      <path
        d="M 12 4 L 3 12.5 L 5 12.5 L 5 18 L 10 18 L 10 13 L 14 13 L 14 18 L 19 18 L 19 12.5 L 21 12.5 Z"
        className="fill-current"
      />
    </svg>
  );
};