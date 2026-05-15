import React from "react";
import Image from "next/image";
import Link from "next/link";

import HomeImage from "./../../../public/images/HomeImages/StardewValley.jpg";


export default async function StardewValleyHome() {
  return (
    <div>
      <div className="bg-[#02273F] h-fit w-screen">
        <div className="flex flex-col justify-start items-center border-2 p-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center p-1.5 ml-2">
            Welcome to Stardew Valley!
          </h3>
          <Image
            src={HomeImage}
            alt="Imagem padrão da home do jogo"
            className="scale-90 lg:scale-80"
          />
          <div className="flex flex-col items-center text-2xl w-4/5">
            <p className="text-[#93C0D1] ">
              Stardew Valley é um RPG de mundo aberto ambientado na vida rural,
              lançado para PC em 26 de fevereiro de 2016. Você herdou a antiga
              fazenda do seu avô em Stardew Valley. Munido de ferramentas
              herdadas e algumas moedas, você parte para começar sua nova vida.
              Será que você conseguirá aprender a viver da terra e transformar
              esses campos abandonados em um lar próspero? Não será fácil. Desde
              que a Corporação Joja chegou à cidade, os antigos costumes
              praticamente desapareceram. O centro comunitário, que antes era o
              coração pulsante da cidade, agora está em ruínas. Mas o vale
              parece cheio de oportunidades. Com um pouco de dedicação, você
              pode ser a pessoa que restaurará a grandeza de Stardew Valley!
            </p>
            <Link
              href="https://www.stardewvalley.net/"
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
