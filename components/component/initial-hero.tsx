"use client";

import { InitialBanner } from "./initial-banner";
import { HeaderCategory as Category } from "./header-category";
import { useEffect, useState } from "react";

import { TextAnimatedGradient } from "./text-gradient";
import { FadeUpStagger as Up } from "../Animations/FadeUpStagger";
import { HighlightsCard } from "./highlights-card";
import { useFetch } from "@/hooks/useFetch";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function InitialHero() {
  const [value, setValue] = useState<Array<any>>([]);

  // const [isPending, instance] = useFetch("api/");

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
    <section id="primary" className="w-full">
      <InitialBanner />

      <div>
        <summary>
          <Category>
            <div>
              <TextAnimatedGradient>Novidade na área </TextAnimatedGradient>
            </div>
            <p className="text-gray-800 dark:text-gray-400">
              Extensões e Luminárias com cabo reforçado
            </p>
          </Category>
        </summary>
        <div className=" flex flex-row items-center justify-center transition-auto container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0  animated-background bg-gradient-to-r from-green-300/10 via-blue-500/10 to-purple-600/10 ">
          <Carousel className="w-full my-auto">
            <Up>
              <HighlightsCard />
            </Up>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
