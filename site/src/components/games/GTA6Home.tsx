import React from "react";
import Image from "next/image";
import Link from "next/link";

import HomeImage from "./../../../public/images/HomeImages/GTA6.jpg";


export default function GTA6Home() {
  return (
    <div>
      <div className="bg-[#02273F] h-fit w-screen">
        <div className="flex flex-col justify-start items-center border-2 p-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center p-1.5 ml-2">
            Welcome to GTA 6! Coming soon.
          </h3>
          <Image
            src={HomeImage}
            alt="Imagem padrão da home do jogo"
            className="scale-90 lg:scale-80"
          />
          <div className="flex flex-col items-center text-2xl w-4/5">
            <p className="text-[#93C0D1] ">
              Grand Theft Auto VI (GTA 6), desenvolvido pela Rockstar Games, é
              um jogo de ação e aventura em mundo aberto com lançamento previsto
              para 19 de novembro de 2026 no PS5 e Xbox Series X/S. Ambientado
              no estado de Leonida (baseado na Flórida), o jogo foca na história
              do casal criminoso Lucia e Jason, apresentando uma narrativa
              estilo "Bonnie e Clyde" em Vice City.
            </p>
            <Link
              href="https://www.rockstargames.com/VI"
              className="text-white hover:scale-110 m-4"
            >
              Página oficial{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
