"use client";

import icone_azul from "./../../public/images/Ícone azul.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  const params = useParams();
  const jogoAtual = params.jogo as string || "jogo"; //minecraft

  const link_home = `/${jogoAtual}/home`;

  const link_style = (link_page: string) => {
    const pagSelecionada = pathname === link_page;

    return pagSelecionada // If
      ? "px-4 py-2 text-[#F4C708] font-semibold hover:scale-110 transition" //Then Yellow
      : "px-4 py-2 text-[#02273F] font-semibold hover:text-white hover:scale-125 transition"; // Else Normal
  };
  return (
    <header className="w-full bg-[#217DA5] shadow-md sticky top-0 z-5">
      <div className="container mx-auto flex flex-col items-center py-4 px-4 sm:px-6">
        <div className="flex">
          <Image
            src={icone_azul}
            alt="logo_circular_introcomp"
            className="w-10 h-10 mr-2"
          ></Image>
          <h1 className="text-4xl text-indigo-950 text-center">Intra</h1>
          <h1 className="text-4xl text-indigo-950 font-black text-center">
            gram
          </h1>
          <h2 className="text-2xl text-[#93C0D1] text-center p-1.5 ml-2">
            VGamer
          </h2>
        </div>

        <nav className="flex gap-2 sm:gap-4 w-full justify-between">
          <Link
            href={link_home}
            className={link_style(link_home)}
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
