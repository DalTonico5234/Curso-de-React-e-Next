// src/app/[jogo]/home/page.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default async function HomePage({
  params,
}: {
  params: Promise<{ jogo: string }>;
}) {
  const { jogo } = await params;

  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <div className="bg-[#02273F] h-screen w-screen ">
        <h1>
          Home
        </h1>
      </div>
    </div>
  );
}
