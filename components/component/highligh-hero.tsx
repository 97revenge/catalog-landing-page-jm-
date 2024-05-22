"use client";

import { HeaderCategory as Category } from "./header-category";

import { TextAnimatedGradient } from "./text-gradient";
import { HighlightsCard } from "./highlights-card";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { CurrencyIcon, ScalingIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";

import { ResponsiveLine } from "@nivo/line";
import { JSX, SVGProps, useRef, useTransition } from "react";
import { ClassAttributes, HTMLAttributes } from "react";
import { useFetch } from "@/hooks/useFetch";
import { HightLightSchema, hightLightSchema } from "@/types/highLight";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { z } from "zod";

import Autoplay from "embla-carousel-autoplay";
import { FadeUpStagger } from "../Animations/FadeUpStagger";
import { NeutronLoader } from "../Loaders/NeutronLoader";
export function HighlighHero() {
  const { state, isPending } = useFetch({
    url: "api/newest",
  });

  if (isPending) {
    return (
      <>
        <div className="w-full h-auto py-20 flex items-center justify-center">
          <NeutronLoader />
        </div>
      </>
    );
  }

  return (
    <>
      <FadeUpStagger>
        <section className=" items-start justify-start  py-4 w-full  ">
          <div className="flex sm:flex-col xl:flex-row items-start justify-between">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className=" w-[100%]"
            >
              <CarouselContent>
                {state.map(
                  (item: z.infer<typeof hightLightSchema>, index: any) => {
                    return (
                      <>
                        <CarouselItem
                          key={index}
                          className=" flex flex-col sm:flex-col  lg:flex-row items-center  justify-center p-4  w-full"
                        >
                          <div className="p-12 flex items-center justify-center ">
                            <HighlightsCard>
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
                                  src={`${item.image}`}
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
                                  <p className=" text-start  font-bold text-gray-500 dark:text-gray-400 mb-6">
                                    {item.description}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center  gap-2 text-gray-900 dark:text-gray-50 font-semibold">
                                      <StarIcon className="h-12  p-2 animate-pulse w-16 current-fill text-yellow-500 shadow-xl text-xl rounded-full bg-gray-200" />
                                      <span className="px-2">
                                        <span className="text-red-500  ">
                                          {item.value[0]}
                                        </span>{" "}
                                        por{" "}
                                        <span className="px-1 text-green-500 text-5xl animate-bounce">
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
                          </div>
                          <div className=" mx-12 bg-gray-100  my-auto p-4 rounded-xl shadow-xl space-y-6">
                            <div className="space-y-2">
                              <TextAnimatedGradient>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                  {item.insights?.title}
                                </h2>
                              </TextAnimatedGradient>
                              <p className="text-gray-500 text-center font-bold md:text-xl dark:text-gray-400">
                                {item.insights?.description}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              {item.insights?.content.map((item) => {
                                return (
                                  <>
                                    <div className="transition-all blur-none hover:blur-none flex items-start space-x-3">
                                      <ViewIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                      <div>
                                        <h4 className="text-lg font-medium">
                                          {item?.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                          {item?.descripton}
                                        </p>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </CarouselItem>
                      </>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </FadeUpStagger>
    </>
  );
}

function CalendarIcon(
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function MergeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function OptionIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <>
      <div {...props}></div>
    </>
  );
}

function ViewIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
