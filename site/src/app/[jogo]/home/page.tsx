import MinecraftHome from "@/components/games/MinecraftHome";
import StardewValleyHome from "@/components/games/StardewValleyHome";
import GTA6Home from "@/components/games/GTA6Home";

export default async function HomePage({ params }: { params: Promise<{ jogo: string }> }) {
  const { jogo } = await params;

  // Mapeando qual componente renderizar para cada jogo
  const AllHomeContents: Record<string, React.ReactNode> = {
    minecraft: <MinecraftHome />,
    gta6: <GTA6Home />,
    stardew_valley: <StardewValleyHome />
  };

  //  Mostra o componente, ou uma página default caso não exista
  const HomeContent = AllHomeContents[jogo] || <div>Page not ready: {jogo}</div>;

  return (
    <div>
      {HomeContent}
    </div>
  );
}


