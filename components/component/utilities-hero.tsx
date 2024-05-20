"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeaderCategory as Category } from "./header-category";
import { ProductCard } from "./product-card";
import { useEffect, useState, useTransition } from "react";
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

export function UtilitiesHero() {
  const { isIntersecting, ref } = useIntersectionObserver();

  const [isPending, startTransition] = useTransition();

  const [clicked, setClicket] = useState<boolean>(false);

  const form = useForm<z.infer<typeof whatsAppSchema>>({
    resolver: zodResolver(whatsAppSchema),
    defaultValues: {
      number: "",
    },
  });

  const router = useRouter();

  const [value, setValue] = useState<Array<any>>([]);

  useEffect(() => {
    startTransition(async () => {
      const response = await fetch("/api/utilities", {
        method: "GET",
        next: { revalidate: 3600 },
      });
      const data = await response.json();

      setValue(await data);
    });
  }, []);

  return (
    <>
      <div ref={ref}>
        {isIntersecting == true ? (
          <>
            <summary>
              <Category>
                <FadeDownStagger>
                  <TextAnimatedGradient>Útilidades </TextAnimatedGradient>
                </FadeDownStagger>

                <FadeDownStagger>
                  <p className="font-bold text-gray-800 dark:text-gray-400 text-center ">
                    Facilite sua vida com nossa linha de produtos de utilidade
                    excepcionais, criados para tornar seu dia a dia mais
                    eficiente e agradável.
                  </p>
                </FadeDownStagger>
              </Category>
            </summary>
            <div className="transition-auto container py-6  gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 space-y-4 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-0  animated-background bg-gradient-to-r from-green-300/10 via-blue-500/10 to-purple-600/10 ">
              {isPending ? (
                <>
                  <div className=" py-2 transition-auto h-[150px] flex items-center justify-center bg-transparent">
                    <NeutronLoader />
                  </div>
                </>
              ) : (
                <>
                  <Up>
                    <Carousel className="w-full my-auto flex items-center justify-center">
                      <CarouselContent className="ml-2 md:-ml-4 ">
                        {value.map((item: any, index: any) => {
                          const handler = (value: any) => {
                            startTransition(() => {
                              const { number } = value;

                              return router.push(
                                `https://api.whatsapp.com/send?phone=${number}&text=Quero te compartilhar este produto: *${item.title}* na JM Luz e Arte ✨ 
  *Link do Produto*: ${item.url}

  *Shopee* : https://shopee.com.br/jm_luzearte

  `
                              );
                            });
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

                                      <div className=" p-2 w-full  flex items-center justify-center content-center">
                                        <Button className=" w-full my-2 rounded bg-blue-800  text-sm font-medium transition hover:scale-105 hover:bg-green-500">
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
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    </>
  );
}
