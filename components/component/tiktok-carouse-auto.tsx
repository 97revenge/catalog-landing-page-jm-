import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TikTokEmbed } from "react-social-media-embed";

const url: Array<string> = [
  "https://www.tiktok.com/@edilsondagel/photo/7310723335606865158",
  "https://www.tiktok.com/@edilsondagel/video/7295959577940561158",
  "https://www.tiktok.com/@edilsondagel/photo/7290339754187492614",
  "https://www.tiktok.com/@edilsondagel/video/6823523511059909894",
  "https://www.tiktok.com/@edilsondagel/video/6823520225502219526",
];

export function CarouselPlugin({ ...props }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {url.map((item: any, index: any) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TikTokEmbed url={item} width={328} rel="noopener noreferrer" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
