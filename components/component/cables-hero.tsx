"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeaderCategory as Category } from "./header-category";
import { ProductCard } from "./product-card";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

import { FadeUpStagger as Up } from "../Animations/FadeUpStagger";

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

import { show } from "@/actions/show";
import { DialogWhatsapp } from "./dialog-whatsapp";

import { whatsAppSchema } from "@/types/whatsApp";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { TextAnimatedGradient } from "./text-gradient";

export function CablesHero() {
  const form = useForm<z.infer<typeof whatsAppSchema>>({
    resolver: zodResolver(whatsAppSchema),
    defaultValues: {
      number: "",
    },
  });

  const router = useRouter();

  const [value, setValue] = useState<Array<any>>([]);

  useEffect(() => {
    async function HandleValue() {
      const response = await fetch("/api/cables", {
        method: "GET",
        next: { revalidate: 3600 },
      });
      const data = await response.json();
      show(data);

      setValue(await data);
    }
    HandleValue();
  }, []);

  return (
    <>
      <div>
        <summary>
          <Category>
            <TextAnimatedGradient> Cabos para Luminárias</TextAnimatedGradient>
            <p className="font-bold text-gray-800 dark:text-gray-400 text-center ">
              Produto Perfeito para seu forneçedores de iluminação para vender
              cada vez mais.
            </p>
          </Category>
        </summary>
        <div className=" container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0 bg-gradient-to-r from-green-300/10 via-blue-500/10 to-purple-600/10 ">
          <Up>
            <Carousel className="w-full my-auto ">
              <CarouselContent className="ml-2 md:-ml-4 ">
                {value.map((item: any, index: any) => {
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
                        className="w-full h-full  md:basis-0/0 lg:basis-2/6  "
                      >
                        <ProductCard>
                          {item?.tag[0] == "" ? (
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
                              {item.offer === false ? (
                                <>
                                  <div></div>
                                </>
                              ) : (
                                <>
                                  <div>
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
                                  </div>
                                </>
                              )}

                              <h3 className="mt-4 line-clamp-2 text-lg font-medium text-gray-900 bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
                                {item.title}
                              </h3>

                              <p className="mt-1.5 text-sm text-gray-700 line-clamp-1 ">
                                {item.description}
                              </p>

                              <div className="  w-full  flex items-center justify-center content-center">
                                <Button className=" w-full my-2 rounded bg-blue-800  text-sm font-medium transition hover:scale-105">
                                  <Link
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Dar uma olhada
                                  </Link>
                                </Button>
                                <DialogWhatsapp>
                                  <Form {...form}>
                                    <form onSubmit={form.handleSubmit(handler)}>
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
                                                placeholder="+55 (555) 555-5555"
                                                {...field}
                                              />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <DialogFooter className="p-2 w-full  flex items-center justify-center">
                                        <Button
                                          className="bg-green-500 w-full"
                                          type="submit"
                                        >
                                          Enviar{" "}
                                          <div className="mx-2">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="25"
                                              viewBox="0 0 256 258"
                                            >
                                              <defs>
                                                <linearGradient
                                                  id="logosWhatsappIcon0"
                                                  x1="50%"
                                                  x2="50%"
                                                  y1="100%"
                                                  y2="0%"
                                                >
                                                  <stop
                                                    offset="0%"
                                                    stop-color="#1FAF38"
                                                  />
                                                  <stop
                                                    offset="100%"
                                                    stop-color="#60D669"
                                                  />
                                                </linearGradient>
                                                <linearGradient
                                                  id="logosWhatsappIcon1"
                                                  x1="50%"
                                                  x2="50%"
                                                  y1="100%"
                                                  y2="0%"
                                                >
                                                  <stop
                                                    offset="0%"
                                                    stop-color="#F9F9F9"
                                                  />
                                                  <stop
                                                    offset="100%"
                                                    stop-color="#FFF"
                                                  />
                                                </linearGradient>
                                              </defs>
                                              <path
                                                fill="url(#logosWhatsappIcon0)"
                                                d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                                              />
                                              <path
                                                fill="url(#logosWhatsappIcon1)"
                                                d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                                              />
                                              <path
                                                fill="#FFF"
                                                d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                                              />
                                            </svg>
                                          </div>
                                        </Button>
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
        </div>
      </div>
    </>
  );
}
