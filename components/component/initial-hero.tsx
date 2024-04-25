"use client";
import Image from "next/image";

import { InitialBanner } from "./initial-banner";
import { Button } from "@/components/ui/button";
import { HeaderCategory as Category } from "./header-category";
import { ProductCard } from "./product-card";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

import { TextAnimatedGradient } from "./text-gradient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FadeUpStagger as Up } from "../Animations/FadeUpStagger";
import { HighlightsCard } from "./highlights-card";

export function InitialHero() {
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
    <section className="w-full">
      <InitialBanner />

      <div>
        <summary>
          <Category>
            <div>
            <TextAnimatedGradient>Novidade na área  </TextAnimatedGradient> 
            </div>
            <p className="text-gray-800 dark:text-gray-400">
              Extensões e Luminárias com  cabo reforçado
            </p>
          </Category>
        </summary>
        <div className="  container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0 animated-background bg-gradient-to-r from-yellow-300/10 via-orange-700/10 to-yellow-400/30 ">
          <div>
          <Up>
            
            <HighlightsCard />
            
        </Up>
          </div>
        </div>
      </div>
    </section>
  );
}
