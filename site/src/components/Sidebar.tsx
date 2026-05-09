"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Arrow from "./Arrow";

export default function Sidebar() {
  // Estados (aberto ou fechado)
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lógica de substituição da URL
  const partesUrl = pathname.split("/");
  const subPaginaAtual = partesUrl[2] || "home";

  const jogos = [
    { nome: "Minecraft", slug: "minecraft" },
    { nome: "Stardew Valley", slug: "stardew_valley" },
    { nome: "Grand Theft Auto 6", slug: "gta6" },
  ];

  return (
    <div>
      {/* Botão do menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-orange-600 text-white rounded-md hover:scale-110 transition shadow-md"
        aria-label="Abrir menu de jogos"
      >
        <Arrow
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu em si */}
      <aside
        className={`fixed inset-y-0 left-0 md:w-1/4 w-48 bg-[#064975] z-30 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HashMap de Links */}
        <nav className="p-4 flex flex-col items-center gap-2">
          {jogos.map((jogo) => {
            const estaAtivo = pathname.includes(`/${jogo.slug}`);

            return (
              <Link
                key={jogo.slug}
                href={`/${jogo.slug}/${subPaginaAtual}`}
                onClick={() => setIsOpen(false)}
                className={`p-2 text-white sm:text-2xl text-md hover:scale-110 rounded ${estaAtivo ? "bg-[#217DA5]" : ""}`}
              >
                <span className=""> {"{"} </span>
                {jogo.nome}
                <span className=""> {"}"} </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
