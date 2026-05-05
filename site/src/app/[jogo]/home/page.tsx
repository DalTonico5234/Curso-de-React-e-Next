// src/app/[jogo]/home/page.tsx

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ jogo: string }> // Note que agora definimos como uma Promise
}) {
  // Aguardamos os parâmetros serem resolvidos
  const { jogo } = await params;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold capitalize">
        Página Inicial: {jogo}
      </h1>
      <p className="mt-4 text-gray-600">
        Bem-vindo à central de informações de {jogo}.
      </p>
    </div>
  );
}