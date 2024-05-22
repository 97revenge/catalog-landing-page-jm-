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
    </section>
  );
}
