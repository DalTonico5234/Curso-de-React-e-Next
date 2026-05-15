import React from "react";
import Image from "next/image";
import Link from "next/link";

import HomeImage from "./../../../public/images/HomeImages/Minecraft.jpg";


export default async function MinecraftHome() {
  return (
    <div>
      <div className="bg-[#02273F] h-fit w-screen">
        <div className="flex flex-col justify-start items-center border-2 p-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center p-1.5 ml-2">
            Welcome to Minecraft!
          </h3>
          <Image
            src={HomeImage}
            alt="Imagem padrão da home do jogo"
            className="scale-90 lg:scale-80"
          />
          <div className="flex flex-col items-center text-2xl w-4/5">
            <p className="text-[#93C0D1] ">
              Bem-vindo ao Minecraft, meu amigo Na jornada desse game, ficará
              surpreendido Sinta liberdade para poder criar Apenas qualquer
              coisa que poder imaginar Modo criativo ou sobrevivência Em uma
              aventura, tenha sua experiência Nem preciso dizer o que se pode ou
              não fazer Faça o que quiser e verá acontecer Construindo e
              minerando sem nenhuma trajetória Sem ao menos perceber, vou
              fazendo minha história Neste universo realmente impressionante
              Explorando cavernas a procura de diamantes Combinando itens,
              construindo casas De dia ou de noite, fazendo minha jornada
              Modificações aumentam a diversidade E fica ainda mais legal com os
              amigos de verdade Yeah, Minecraft, é Você conhece! Num mundo de
              blocos, faço qualquer criação Onde o único limite é a imaginação
              (Yeah!) Minecraft, é Você conhece! Num mundo de blocos, faço
              qualquer criação Onde o único limite é a imaginação Yeah Quando
              cai a noite, é preciso ter cuidado Pode aparecer mobs por todo
              lado Esqueleto, Zumbi, Aranha ou Creeper Tenha coragem para
              invocar o Wither Não olhe nos olhos de um Enderman Assim como o
              Slender, te persegue também Mas o que mais assusta é a lenda desse
              game Herobrine, esse aí é diferente Sua existência é um grande
              mistério Tudo que se fala pode ou não estar correto Realmente
              Minecraft é incomparável Nunca nada semelhante tinha sido criado
              Recorde de vendas, grande inspiração Alcançando os da antiga e da
              nova geração Vai falar de gráfico? Mano, dá um tempo Ninguém nunca
              reclamou de jogar Super Nintendo! Yeah, Minecraft, é Você conhece
              Num mundo de blocos, faço qualquer criação Onde o único limite é a
              imaginação (Yeah!) Minecraft, é Você conhece! Num mundo de blocos,
              faço qualquer criação Onde o único limite é a imaginação
            </p>
            <Link
              href="https://www.minecraft.net/pt-br"
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
