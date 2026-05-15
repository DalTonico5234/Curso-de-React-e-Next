import "@/app/globals.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HomeButton from "@/components/button/HomeButton";

export const metadata: Metadata = {
  title: "Intragram",
  description: "Rede social de jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gray-50 text-gray-900"
        suppressHydrationWarning
      >
        <Header />
        <Sidebar />
        {children}
        <HomeButton />
      </body>
    </html>
  );
}
