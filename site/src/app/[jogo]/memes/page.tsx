"use client";

import MemeFormButton from "@/components/button/MemeFormButton";
import CloseIcon from "@/components/svg/CloseIcon";

import { useState } from "react";
import { usePathname, useParams } from "next/navigation";

interface Meme {
  id: number;
  Title: string;
  url: string;
  tipo: "image" | "video";
}

export default function MemesPage() {
  // Estados do Formulário
  const [Title, setTitle] = useState("");
  const [arquivo, setFile] = useState<File | null>(null);

  const pathname = usePathname();
  const params = useParams();
  const jogoAtual = (params.jogo as string) || "jogo";

  const [memes, setMemes] = useState<Meme[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função de Envio
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!arquivo) {
      alert("Please, select a file for submission!");
      return;
    }

    // URLtemporária para ler o arquivo do PC do usuário
    const tempURL = URL.createObjectURL(arquivo);

    // Descobre se o arquivo contém mp4 (ex: video/mp4)
    const isVideo =
      arquivo.type.includes("mp4") ||
      arquivo.type.includes(".mov") ||
      arquivo.type.includes(".mkv") ||
      arquivo.type.includes(".mkv") ||
      arquivo.type.includes(".webm") ||
      arquivo.type.includes(".avi");

    const newMeme: Meme = {
      id: Date.now(), // Gera um ID único baseado na hora atual
      Title: Title || "No Title", // Se o título estiver vazio, usa o padrão
      url: tempURL,
      tipo: isVideo ? "video" : "image",
    };

    // Atualiza a lista colocando o meme novo no início do array
    setMemes([newMeme, ...memes]);

    // Limpa os campos para o próximo envio
    setTitle("");
    setFile(null);

    setIsModalOpen(false);
  };

  return (
    <div>
        <div>
          <MemeFormButton onClick={() => setIsModalOpen(true)}></MemeFormButton>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Box */}
            <div className="bg-[#217DA5] text-[#02273F] p-6 rounded shadow-lg z-10 w-full max-w-md relative">
              {/* X Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-orange-600 font-bold hover:scale-110 transition-transform rounded-full"
              >
                <CloseIcon></CloseIcon>
              </button>

              <h3 className="font-bold text-xl mb-4">
                Send Meme - {jogoAtual}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block mb-1 font-semibold">
                    Title (Optional):
                  </label>
                  <input
                    type="text"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-white border border-[#02273F] p-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">
                    File (Necessary):
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) =>
                      setFile(e.target.files ? e.target.files[0] : null)
                    }
                    className="border border-[#02273F] p-2 w-full rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-orange-600 text-white p-2 rounded font-bold mt-2 hover:scale-110 transition-colors"
                >
                  Publish
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Meme Gallery */}
        <div className="bg-[#02273F] min-h-screen w-full flex flex-col items-center gap-4">
          <h4 className="text-white mt-4 font-black sm:text-5xl text-3xl">
            {" "}
            {"{"} {jogoAtual} {"}"}
          </h4>

          {memes.length === 0 ? (
            <p className="text-[#93C0D1]">No memes yet. Be the first to post!</p>
          ) : (
            <div className="flex flex-col gap-8 max-w-2xl">
              {memes.map((meme) => (
                <div
                  key={meme.id}
                  className="border p-4 rounded bg-[#064975] shadow-sm flex flex-col gap-3"
                >
                  <h4 className="font-bold text-lg">{meme.Title}</h4>

                  {meme.tipo === "video" ? (
                    <video
                      src={meme.url}
                      controls
                      className="w-full h-auto rounded bg-black"
                    />
                  ) : (
                    <img
                      src={meme.url}
                      alt={meme.Title}
                      className="w-full h-auto rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
}
