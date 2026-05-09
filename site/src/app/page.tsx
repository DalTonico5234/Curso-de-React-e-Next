import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main>
    <Sidebar></Sidebar>
    <Header></Header>
    <div className="bg-[#02273F] h-screen w-screen "></div>
    </main>
  );
}