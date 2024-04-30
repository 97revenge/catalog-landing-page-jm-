"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { TextAnimatedGradient } from "./text-gradient";
import { useEffect, useState } from "react";
import Image from "next/image";

const Card = ({ ...props }) => {
  return (
    <>
      <div className="flex flex-col animated-background bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  items-center  rounded-2xl  p-2 pb-5 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950 dark:text-gray-50">
        <div
          className="bg-white h-full rounded-xl  flex flex-col items-center justify-center space-y-4 py-6"
          {...props}
        ></div>
      </div>
    </>
  );
};

export function TestimonialsCard() {
  const [comment, setComment] = useState<Array<any>>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("api/testimonials");
        const data = await response.json();
        setComment(data);
      } catch (err) {
        alert(err);
      }
    }

    getData();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <TextAnimatedGradient>
              Ouça nossos clientes satisfeitos
            </TextAnimatedGradient>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Nossos clientes amam nossos produtos . Aqui está um pouco eles tem
              a dizer .
            </p>
          </div>
        </div>
        <div className="mt-10  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {comment.map((item, index) => {
            return (
              <>
                <Card key={index}>
                  <div className=" h-full flex items-center justify-center flex-col">
                    <Avatar className=" hover:animate-bounce h-18 w-18 ">
                      <AvatarImage alt="Jared Palmer" src={item.image} />
                      <AvatarFallback>😁</AvatarFallback>
                    </Avatar>

                    <div className="flex items-center mt-2  ">
                      <svg
                        className="w-12 h-12 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-12 h-12 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-12 h-12 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-12 h-12 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>

                      <svg
                        className="w-12 h-12 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <div className=" text-center h-full bg-gray-100 bg-opacity-50 shadow-md">
                    <div className="font-semibold text-lg p-2">
                      {item.author}
                    </div>
                    <blockquote className="text-lg p-2 font-semibold leading-snug text-center">
                      {JSON.stringify(item.Description)}
                    </blockquote>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
