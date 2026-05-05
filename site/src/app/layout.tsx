// Importando o CSS global (igual estava no _app.tsx)
import '@/app/globals.css';
import type { Metadata } from "next";

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
    // Mantido lang="en" como no _document.tsx original
    <html lang="en"> 
      {/* Aplicando APENAS a classe antialiased, idêntico ao _document.tsx */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}