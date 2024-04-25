import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { keywords } from "@/lib/keywords";

const inter = Sora({ subsets: ["latin"] });





export const metadata: Metadata = {
  title: "Catálogo de Produtos | JM Luz e Arte",

  metadataBase: new URL("https://catalogojmluzearte.vercel.app/"),
  keywords: keywords,
  openGraph: {
    description:
      "Produtos de útilidades , decoração , iluminação e muito mais voçe encontra aqui  ",
    images: ["https://github-production-user-asset-6210df.s3.amazonaws.com/80254945/325795605-e9b6246b-b9f3-40a2-99a8-bfe0076dea04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T231805Z&X-Amz-Expires=300&X-Amz-Signature=d3b913637a764bbf6043c6602629c2da5243f87e0dfb574b426d42d0da3fbd30&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=755925151"],
  },
  icons: "https://images.tcdn.com.br/img/img_prod/1112215/1652709121_icone-_2_9_1.ico?662aba504c5f8"


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
