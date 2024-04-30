"use client";

import { TextAnimatedGradient } from "./text-gradient";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

const handler = (render: any) => {
  return (
    <>
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        <div>ok</div>
      </Wrapper>
    </>
  );
};

export function LocationHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <div className="space-y-4 ">
          <div>
            <TextAnimatedGradient>
              100% de segurança na entrega
            </TextAnimatedGradient>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover the heart of our operations, a state-of-the-art facility
            that sets the standard for security and professionalism in the
            industry.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto"></div>
      </div>
    </section>
  );
}
