import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ['latin'], 
  display: 'swap',   
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Gestor Pro - Seu sistema de gerenciamento.",
  description: "Gerencie seus clientes e atendimentos de forma fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
