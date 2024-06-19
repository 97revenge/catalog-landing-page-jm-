"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { HeaderCategory as Category } from "./header-category";
import { ProductCard } from "./product-card";
import { SVGProps, useEffect, useState, useTransition } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

import { FadeUpStagger as Up } from "../Animations/FadeUpStagger";
import { FadeDownStagger } from "../Animations/FadeDownStagger";

import { DialogFooter } from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/form";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

import { DialogWhatsapp } from "./dialog-whatsapp";

import { whatsAppSchema } from "@/types/whatsApp";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { TextAnimatedGradient } from "./text-gradient";
import {
  getCookies as cookies,
  removeCookies as remove,
} from "@/actions/cookies";
import { WhatsAppButton } from "./whatsapp-button";
import { NeutronLoader } from "../Loaders/NeutronLoader";

import { useIntersectionObserver } from "usehooks-ts";
import { useFetch } from "@/hooks/useFetch";
import { PingLoader } from "../Loaders/PingLoader";

export function UtilitiesHero({ url }: { url: string }) {
  // const { isIntersecting, ref } = useIntersectionObserver();

  const [clicked, setClicket] = useState<boolean>(false);

  const { state, isPending } = useFetch({ url });

  const form = useForm<z.infer<typeof whatsAppSchema>>({
    resolver: zodResolver(whatsAppSchema),
    defaultValues: {
      number: "",
    },
  });

  const router = useRouter();

  return (
    <>
      <div>
        <>
          <div className="transition-auto container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0  animated-background bg-gradient-to-r from-green-300/10 via-blue-500/10 to-purple-600/10 ">
            {isPending ? (
              <>
                <div className=" py-2 transition-auto h-[150px] flex items-center justify-center bg-transparent">
                  <PingLoader />
                </div>
              </>
            ) : (
              <>
                <Up>
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 3500,
                      }),
                    ]}
                    className="w-full my-auto flex items-center justify-center"
                  >
                    <CarouselContent className="ml-2 md:-ml-4 ">
                      {state.map((item: any, index: any) => {
                        const handler = (value: any) => {
                          const { number } = value;

                          return router.push(
                            `https://api.whatsapp.com/send?phone=${number}&text=Quero te compartilhar este produto: *${item.title}* na JM Luz e Arte ✨ 
  *Link do Produto*: ${item.url}

  *Shopee* : https://shopee.com.br/jm_luzearte

  `
                          );
                        };

                        return (
                          <>
                            <CarouselItem
                              key={index}
                              className="w-full h-full   lg:basis-2/6  "
                            >
                              <ProductCard>
                                {item.tag[0] == "" ? (
                                  <>
                                    <div></div>
                                  </>
                                ) : (
                                  <>
                                    <Badge
                                      className={`w-auto bg-green-500 text-white animate-bounce mt-2 ${item.tag[1]}`}
                                    >
                                      {String(item.tag).split(",")[0]}
                                    </Badge>
                                  </>
                                )}
                                <Card className="group relative block overflow-hidden h-full rounded-xl shadow-lg">
                                  <Button
                                    onClick={() => {
                                      setClicket(!clicked);
                                      if (clicked == true) {
                                        return cookies({
                                          title: item.title,
                                          url: item.url,
                                        });
                                      } else {
                                        return remove({
                                          title: item.title,
                                          url: item.url,
                                        });
                                      }
                                    }}
                                    className="hover:bg-gray-100 absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                  >
                                    <span className="sr-only">Wishlist</span>

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="72"
                                      height="72"
                                      viewBox="0 0 24 24"
                                      className={
                                        clicked == false
                                          ? "h-4 w-4 current-fill text-gray-900 text-lg"
                                          : "h-4 w-4 current-fill text-red-900 text-lg"
                                      }
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 18h5.5q.425 0 .788-.213t.512-.587l2.1-4.9q.05-.125.075-.25T18 11.8V11q0-.425-.288-.713T17 10h-4.6l.6-3.4q.05-.25-.025-.475t-.25-.4L12 5l-4.6 5q-.2.2-.3.45T7 11v5q0 .825.588 1.413T9 18m3 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                                      />
                                    </svg>
                                  </Button>

                                  <Image
                                    width={500}
                                    height={200}
                                    quality={100}
                                    src={item.image}
                                    alt="an icon image"
                                    className=" p-2  object-contain transition duration-500 group-hover:scale-105 sm:h-72"
                                  />

                                  <div className="h-[270px]  flex items-start justify-between  flex-col relative border border-gray-100  p-6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 24 24"
                                      className="relative top-2.5 animate-ping current-fill text-red-500"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M7.9 20.875q-1.75-1.05-2.825-2.863Q4 16.2 4 14q0-2.825 1.675-5.425q1.675-2.6 4.6-4.55q.55-.375 1.138-.038Q12 4.325 12 5v1.3q0 .85.588 1.425q.587.575 1.437.575q.425 0 .813-.187q.387-.188.687-.538q.2-.25.513-.313q.312-.062.587.138Q18.2 8.525 19.1 10.275q.9 1.75.9 3.725q0 2.2-1.075 4.012q-1.075 1.813-2.825 2.863q.425-.6.663-1.313Q17 18.85 17 18.05q0-1-.375-1.887q-.375-.888-1.075-1.588L12 11.1l-3.525 3.475q-.725.725-1.1 1.6Q7 17.05 7 18.05q0 .8.238 1.512q.237.713.662 1.313ZM12 21q-1.25 0-2.125-.863Q9 19.275 9 18.05q0-.575.225-1.112q.225-.538.65-.963L12 13.9l2.125 2.075q.425.425.65.95q.225.525.225 1.125q0 1.225-.875 2.087Q13.25 21 12 21Z"
                                      />
                                    </svg>
                                    <span className="whitespace-nowrap rounded-2xl bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                                      {" "}
                                      Produto Em promoção
                                    </span>

                                    <h3 className="mt-4 line-clamp-2 text-lg font-medium text-gray-900 bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
                                      {item.title}
                                    </h3>

                                    <p className="mt-1.5 text-sm text-gray-700 line-clamp-1 ">
                                      {item.description}
                                    </p>

                                    <div className="  w-full  flex items-center justify-center content-center">
                                      <div className="w-auto relative left-4 bg-red-200   gap-x-2 flex flex-row items-center justify-center       ">
                                        <Button className="h-12  w-full my-2 rounded bg-blue-800  text-sm font-medium transition hover:scale-105 hover:bg-green-500">
                                          <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <SubwayBag className="text-2xl" />
                                          </Link>
                                        </Button>
                                        <Button className="h-12  w-full my-2 rounded bg-[#f6422e]  text-sm font-medium transition hover:scale-105 hover:bg-[#f6422e]">
                                          <Link
                                            href={
                                              "https://shopee.com.br/jm_luzearte?shopCollection=152524164#product_list"
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <SimpleIconsShopee className="text-2xl" />
                                          </Link>
                                        </Button>
                                        <Button className="h-12  w-full my-2 rounded bg-[#e2350b]  text-sm font-medium transition hover:scale-105 hover:bg-[#e2350b]">
                                          <Link
                                            href={
                                              "https://www.aliexpress.com/store/1103015110"
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <ArcticonsAliexpress className="text-2xl" />
                                          </Link>
                                        </Button>
                                      </div>
                                      <DialogWhatsapp>
                                        <Form {...form}>
                                          <form
                                            onSubmit={form.handleSubmit(
                                              handler
                                            )}
                                          >
                                            <FormField
                                              name="number"
                                              control={form.control}
                                              render={({ field }) => (
                                                <FormItem className=" ">
                                                  <FormLabel
                                                    className="text-right"
                                                    htmlFor="phone-number"
                                                  >
                                                    Numero de telefone
                                                  </FormLabel>
                                                  <FormControl>
                                                    <Input
                                                      type="text"
                                                      className="col-span-3 "
                                                      id="text"
                                                      placeholder="+55 (55) 5555-5555"
                                                      {...field}
                                                    />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                            <DialogFooter className="p-2 w-full  flex items-center justify-center">
                                              <WhatsAppButton
                                                disable={isPending}
                                              >
                                                Enviar
                                              </WhatsAppButton>
                                            </DialogFooter>
                                          </form>
                                        </Form>
                                      </DialogWhatsapp>
                                    </div>
                                  </div>
                                </Card>
                              </ProductCard>
                            </CarouselItem>
                          </>
                        );
                      })}
                    </CarouselContent>
                  </Carousel>
                </Up>
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
}

export function SubwayBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M421.2 128h-42.7v21.3c0 23.5-19.1 42.7-42.7 42.7c-23.5 0-42.7-19.1-42.7-42.7V128h-85.3v21.3c0 23.5-19.1 42.7-42.7 42.7c-23.5 0-42.7-19.1-42.7-42.7V128H79.9c0 213.3-21.3 384-21.3 384h384c-.1 0-21.4-170.7-21.4-384m-256 42.7c11.8 0 21.3-9.5 21.3-21.3v-42.7c0-35.4 28.6-64 64-64s64 28.6 64 64v42.7c0 11.8 9.5 21.3 21.3 21.3s21.3-9.5 21.3-21.3v-42.7C357.2 47.8 309.4 0 250.5 0c-58.9 0-106.7 47.8-106.7 106.7v42.7c.1 11.7 9.6 21.3 21.4 21.3"
      ></path>
    </svg>
  );
}

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="M15.941 17.963c.23-1.879-.98-3.077-4.175-4.097c-1.548-.528-2.277-1.22-2.26-2.171c.065-1.056 1.048-1.825 2.352-1.85a5.3 5.3 0 0 1 2.883.89c.116.072.197.06.263-.04c.09-.144.315-.493.39-.62c.051-.08.061-.186-.068-.28c-.185-.137-.704-.415-.983-.532a6.5 6.5 0 0 0-2.511-.514c-1.91.008-3.413 1.215-3.54 2.826q-.122 1.746 1.73 2.827c.263.152 1.68.716 2.244.892c1.774.552 2.695 1.542 2.478 2.697c-.197 1.047-1.299 1.724-2.818 1.744c-1.203-.046-2.287-.537-3.127-1.19l-.141-.11c-.104-.08-.218-.075-.287.03c-.05.077-.376.547-.458.67c-.077.108-.035.168.045.234c.35.293.817.613 1.134.775a6.7 6.7 0 0 0 2.829.727a4.9 4.9 0 0 0 2.075-.354c1.095-.465 1.803-1.394 1.945-2.554M12 1.401c-2.068 0-3.754 1.95-3.833 4.39h7.665C15.751 3.35 14.066 1.4 12 1.4m7.851 22.598l-.08.001l-15.784-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195l-.707-15.526a.46.46 0 0 1 .45-.494h4.975C6.845 2.568 9.16 0 12 0s5.153 2.569 5.275 5.79h4.968a.46.46 0 0 1 .458.483l-.773 15.588l-.007.131c-.094 1.094-.979 1.977-2.07 2.006"
  />
</svg>;

export function SimpleIconsShopee(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.941 17.963c.23-1.879-.98-3.077-4.175-4.097c-1.548-.528-2.277-1.22-2.26-2.171c.065-1.056 1.048-1.825 2.352-1.85a5.3 5.3 0 0 1 2.883.89c.116.072.197.06.263-.04c.09-.144.315-.493.39-.62c.051-.08.061-.186-.068-.28c-.185-.137-.704-.415-.983-.532a6.5 6.5 0 0 0-2.511-.514c-1.91.008-3.413 1.215-3.54 2.826q-.122 1.746 1.73 2.827c.263.152 1.68.716 2.244.892c1.774.552 2.695 1.542 2.478 2.697c-.197 1.047-1.299 1.724-2.818 1.744c-1.203-.046-2.287-.537-3.127-1.19l-.141-.11c-.104-.08-.218-.075-.287.03c-.05.077-.376.547-.458.67c-.077.108-.035.168.045.234c.35.293.817.613 1.134.775a6.7 6.7 0 0 0 2.829.727a4.9 4.9 0 0 0 2.075-.354c1.095-.465 1.803-1.394 1.945-2.554M12 1.401c-2.068 0-3.754 1.95-3.833 4.39h7.665C15.751 3.35 14.066 1.4 12 1.4m7.851 22.598l-.08.001l-15.784-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195l-.707-15.526a.46.46 0 0 1 .45-.494h4.975C6.845 2.568 9.16 0 12 0s5.153 2.569 5.275 5.79h4.968a.46.46 0 0 1 .458.483l-.773 15.588l-.007.131c-.094 1.094-.979 1.977-2.07 2.006"
      ></path>
    </svg>
  );
}

export function ArcticonsAliexpress(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.34 8.27A2.77 2.77 0 0 0 5.5 11.1v28.77a2.8 2.8 0 0 0 2.9 2.63h31.36a2.77 2.77 0 0 0 2.74-3V11a2.8 2.8 0 0 0-3.13-2.68Z"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.72 8.27A2.77 2.77 0 0 0 37 5.5H11a2.77 2.77 0 0 0-2.73 2.77h0"
      ></path>
      <circle
        cx="13.13"
        cy="22.11"
        r="1.94"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <circle
        cx="34.86"
        cy="22.11"
        r="1.94"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.3 24a10.87 10.87 0 0 0 21.39 0"
      ></path>
    </svg>
  );
}
