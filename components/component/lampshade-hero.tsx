"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeaderCategory as Category } from "./header-category";
import { ProductCard } from "./product-card";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LightIcon from "../Icons/LightIcon";

export function LampshadeHero() {
  const [value, setValue] = useState<Array<any>>([]);

  useEffect(() => {
    async function HandleValue() {
      const response = await fetch("/api/sucess", {
        method: "GET",
        next: { revalidate: 3600 },
      });
      const data = await response.json();

      setValue(await data);
    }
    HandleValue();
  }, []);

  return (
    <>
      <div>
        <summary>
          <Category>
            <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
              <LightIcon style="relative top-3 left-5 animate-bounce " />{" "}
              Abajures
            </h1>
            <p className="text-gray-800 dark:text-gray-400">
              Lindos Abajures para salas , quartos , studios & muito mais
            </p>
          </Category>
        </summary>
        <div className=" container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0 bg-gradient-to-r from-green-300/10 via-blue-500/10 to-purple-600/10 ">
          <Carousel className="w-full my-auto ">
            <CarouselContent className="ml-2 md:-ml-4 ">
              {value.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="w-full h-full  md:basis-0/0 lg:basis-2/6  "
                >
                  <ProductCard>
                    <Badge className="  w-auto bg-green-500 text-white">
                      {item.tag}
                    </Badge>
                    <Card className="group relative block overflow-hidden h-full rounded-xl shadow-lg">
                      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                        <span className="sr-only">Wishlist</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>

                      <Image
                        width={500}
                        height={200}
                        quality={100}
                        src={item.image}
                        alt=""
                        className=" p-2  object-contain transition duration-500 group-hover:scale-105 sm:h-72"
                      />

                      <div className="h-[270px]  flex items-start justify-between  flex-col relative border border-gray-100  p-6">
                        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                          {" "}
                          Produto Novo
                        </span>

                        <h3 className="mt-4 text-lg font-medium text-gray-900 bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-sm text-gray-700 line-clamp-1 ">
                          {item.description}
                        </p>

                        <Button className=" w-full my-2 rounded bg-blue-800  text-sm font-medium transition hover:scale-105">
                          Dar uma olhada
                        </Button>
                      </div>
                    </Card>
                  </ProductCard>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
