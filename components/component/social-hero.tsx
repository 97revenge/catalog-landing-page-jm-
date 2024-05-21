"use client";

import Link from "next/link";

import { CarouselPlugin } from "./insta-caroulsel-auto";

import { CarouselPlugin as TikTok } from "./tiktok-carouse-auto";

export function SocialHero() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-15">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-6xl text-center font-bold tracking-tighter bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
              Nossas Redes Sociais
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore as nossas últimas atualizações e promoções pelo Instagram,
              TikTok e e-commerce.
            </p>
          </div>
          <div className="grid flex items-center justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CarouselPlugin>
              {[
                "https://www.instagram.com/p/C4DgfvFgjU5/",
                "https://www.instagram.com/p/C4Bj-C6pBJG/",
                "https://www.instagram.com/p/C5eZWGgJ4KY/",
                "https://www.instagram.com/p/C4D6g4tRFJt/",
                "https://www.instagram.com/p/C33EwoVp_Dw/",
                "https://www.instagram.com/p/CfL5fhyASmC/",
              ]}
            </CarouselPlugin>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TikTok />
            </div>
            <div className="group relative overflow-hidden rounded-lg block sm:hidden lg:block">
              <Link
                className="absolute inset-0 z-10"
                href="https://www.jmluzearte.com.br/"
                target="blank"
              >
                <span className="sr-only">E-commerce</span>
              </Link>
              <img
                alt="Custom URL"
                className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"
                height={400}
                src="https://github.com/97revenge/97revenge/assets/80254945/4a5c0274-6ea9-4a68-a075-e662f2f21e79"
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">E-commerce</h3>
                <p className="text-sm">
                  Produtos com qualidade & pronta-entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
