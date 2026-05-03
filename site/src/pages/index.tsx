// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
    <Header></Header>
    <div className="bg-[#02273F] h-screen w-screen "></div>
    </main>
  );
}
