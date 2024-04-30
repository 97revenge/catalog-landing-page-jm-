"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { JSX, SVGProps } from "react";

import { useCopyToClipboard } from "usehooks-ts";

export const CounponHero = () => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
      })
      .catch((error: any) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-42 animated-background bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={
                    "https://d335luupugsy2.cloudfront.net/cms/files/30276/1714055729/$thccn6w6b1k"
                  }
                  quality={100}
                  height={85}
                  width={85}
                  alt="icon "
                />
              </div>
              <h1 className="text-center text-4xl font-bold tracking-tighter text-white sm:text-6xl xl:text-7xl">
                Cupom Exclusivo para Você
              </h1>
            </div>
          </div>
          <div className="h-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="p-6 space-y-4">
              <div className="bg-gray-100 rounded-md px-4 py-2 text-center">
                <span className="text-4xl font-bold text-[#ffc728] ">
                  PRIMEIRA100
                </span>
              </div>
              <p className="text-gray-500 text-center">
                Tenha até 40% de desconto em nosso e-commerce
              </p>
              <div className="w-full flex items-center justify-center">
                <Button
                  onClick={handleCopy("PRIMEIRA100")}
                  size={"lg"}
                  className="w-auto flex items-center justify-center animated-background bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-500"
                >
                  <GiftIcon className="mr-2 w-5 h-5" />
                  <span className="text-center text-2xl">
                    <p>
                      {" "}
                      {copiedText == "PRIMEIRA100"
                        ? "Cupom copiado com sucesso"
                        : "Copiar Cupom"}
                    </p>
                  </span>
                </Button>
              </div>
              <p className="text-center text-sm">
                {" "}
                {copiedText == "PRIMEIRA100"
                  ? "Cole este cupom  no fim do seu pedido"
                  : ""}
              </p>
            </div>
            <div className="absolute top-0 left-0 -mt-4 -ml-4">
              <FlameIcon className="text-yellow-500 w-8 h-8" />
            </div>
            <div className="absolute bottom-0 right-0 -mb-4 -mr-4">
              <LightbulbIcon className="text-[#8B5CF6] w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function GiftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function LightbulbIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
