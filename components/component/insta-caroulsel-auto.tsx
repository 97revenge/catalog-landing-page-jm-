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
import { InstagramEmbed } from "react-social-media-embed";

const url: Array<string> = [
  "https://www.instagram.com/p/C4DgfvFgjU5/",
  "https://www.instagram.com/p/C4Bj-C6pBJG/",
  "https://www.instagram.com/p/C5eZWGgJ4KY/",
  "https://www.instagram.com/p/C4D6g4tRFJt/",
  "https://www.instagram.com/p/C33EwoVp_Dw/",
  "https://www.instagram.com/p/CfL5fhyASmC/",
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
                <InstagramEmbed
                  url={item}
                  width={328}
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
