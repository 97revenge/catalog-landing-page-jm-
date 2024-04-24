import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catálogo de Produtos | JM Luz e Arte",
  description:
    "Produtos de útilidades , decoração , iluminação e muito mais voçe encontra aqui  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
