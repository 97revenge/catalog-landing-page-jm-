"use client";

import { InitialBanner } from "./initial-banner";
import { HeaderCategory as Category } from "./header-category";

import { TextAnimatedGradient } from "./text-gradient";
import { FadeUpStagger as Up } from "../Animations/FadeUpStagger";
import { HighlightsCard } from "./highlights-card";
import { useFetch } from "@/hooks/useFetch";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { CurrencyIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function InitialHero() {
  return (
    <section id="primary" className="w-full">
      <InitialBanner />

      <div>
        {/* <summary>
          <Category>
            <div>
              <TextAnimatedGradient>Novidade na área </TextAnimatedGradient>
            </div>
            <p className="text-gray-800 dark:text-gray-400">
              Extensões e Luminárias com cabo reforçado
            </p>
          </Category>
        </summary> */}
        {/* <div className=" flex flex-row items-start justify-start bg-red-200 py-4">
          <Up>
            <Carousel className="">
              <CarouselContent>
                {state.map((item: any, index: any) => {
                  return (
                    <>
                      <CarouselItem className="flex bg-blue-200 max-w-sm items-center justify-center lg:items-start lg:justify-start ">
                        <HighlightsCard key={index}>
                          <Card className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                              <Badge
                                className="bg-yellow-500 text-white px-2 py-1 rounded-full"
                                variant="outline"
                              >
                                <StarIcon className="h-4 w-4 -translate-x-1 animate-pulse" />
                                Produto em destaque
                              </Badge>
                              <Badge
                                className="bg-red-500 text-white px-2 py-1 rounded-full"
                                variant="outline"
                              >
                                {item.discount}% de desconto
                              </Badge>
                            </div>
                            <img
                              alt="Featured Product"
                              className=" group-hover:scale-105 transition-transform duration-300"
                              height={350}
                              src={item.image}
                              style={{
                                aspectRatio: "500/400",
                                objectFit: "cover",
                              }}
                              width={500}
                            />
                            <CardContent className="p-6 bg-white dark:bg-gray-950">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold">
                                  {item.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <StarIcon className="h-5 w-5 text-yellow-500" />
                                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                                    {item.note}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-500 dark:text-gray-400 mb-6">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-900 dark:text-gray-50 font-semibold">
                                  <CurrencyIcon className="h-12 w-12 current-fill text-yellow-500 shadow-xl text-xl rounded-full bg-gray-200" />
                                  <span className="px-2">
                                    <span className="text-red-500  ">
                                      {item.value[0]}
                                    </span>{" "}
                                    por{" "}
                                    <span className="px-1 text-green-500 text-3xl">
                                      {item.value[1]}
                                    </span>{" "}
                                  </span>
                                </div>
                                <Link href={item.url} target="_blank">
                                  <Button
                                    className="w-full max-w-[150px] bg-green-500"
                                    size="lg"
                                  >
                                    Comprar Agora
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        </HighlightsCard>
                      </CarouselItem>
                    </>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </Up>
        </div> */}
      </div>
    </section>
  );
}
