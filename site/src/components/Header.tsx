"use client";

import icone_azul from "./../../public/images/Ícone azul.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const params = useParams();
  const jogoAtual = (params.jogo as string) || "jogo"; //minecraft

  const pages = [
    { nome: "Home", slug: "home" },
    { nome: "Memes", slug: "memes" },
    { nome: "Wiki", slug: "wiki" },
    { nome: "Communitys", slug: "communitys" },
    { nome: "Servers", slug: "servers" },
    { nome: "Tutorials", slug: "tutorials" },
    { nome: "Creations", slug: "creations" },
  ];

  const link_style = (link_page: string) => {
    const pagSelecionada = pathname === link_page;

    return pagSelecionada // If
      ? "px-4 py-2 text-orange-400 font-semibold hover:scale-110 transition" //Then Orange
      : "px-4 py-2 text-[#02273F] font-semibold hover:text-white hover:scale-125 transition"; // Else Normal
  };
  return (
    <header className="w-full bg-[#217DA5] shadow-md sticky top-0 z-5">
      <div className="container mx-auto flex flex-col sm:items-center items-end py-4 px-4 sm:px-6">
        <div className="flex">
          <Image
            src={icone_azul}
            alt="logo_circular_introcomp"
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 mr-2"
          ></Image>
          <div className="flex text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-indigo-950">
            <h1 className="text-center">Intra</h1>
            <h1 className="font-black text-center">gram</h1>
          </div>
          <h2 className="text-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#93C0D1] text-center p-1.5 ml-2">
            VGamer
          </h2>
        </div>

        {/* HashMap de Links */}
        <nav className="flex flex-wrap scale-70 gap-0 sm:gap-0.5 md:gap-1 lg:gap-1.5 sm:scale-100 w-full justify-between">
          {pages.map((page) => {
            return (
              <Link
                key={page.slug}
                href={`/${jogoAtual}/${page.slug}`}
                className={link_style(`/${jogoAtual}/${page.slug}`)}
              >
                {page.nome} 
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
