"use client";

import { HeaderCategory as Category } from "./header-category";

import { TextAnimatedGradient } from "./text-gradient";
import { HighlightsCard } from "./highlights-card";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { CurrencyIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";

import { ResponsiveLine } from "@nivo/line";
import { JSX, SVGProps } from "react";
import { ClassAttributes, HTMLAttributes } from "react";
import { useFetch } from "@/hooks/useFetch";

export function HighlighHero() {
  const [state] = useFetch({ url: "/api/newest" });
  return (
    <section className=" items-start justify-start  py-4">
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
      <div className="container grid grid-cols-1  lg:grid-cols-2">
        <div className=" flex items-center justify-center p-4">
          {state.map((item: any, index: any) => {
            return (
              <>
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
                        <h3 className="text-2xl font-bold">{item.title}</h3>
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
              </>
            );
          })}
        </div>
        <div className=" bg-blue-200 my-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lorem Ipsum Lorem Ipsum
            </h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Leverage our powerful analytics to drive informed decisions and
              accelerate growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <PieChartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Analytics</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain deep insights into your business performance.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ViewIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Reporting</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate comprehensive reports to inform your decisions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Forecasting</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Predict future trends and plan for growth.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <OptionIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Optimization</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Identify and address inefficiencies in your operations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MergeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Collaboration</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Empower your team to work together seamlessly.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ScalingIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h4 className="text-lg font-medium">Scalability</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Grow your business with ease and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

function PieChartIcon(
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ScalingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
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
