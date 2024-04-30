"use client";

import Embed, { ReactEmbed } from "react-embed";

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
    <section className="w-full  flex items-center justify-center">
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
        <div className=" shadow-xl w-full max-w-4xl mx-auto flex items-center justify-center bg-blue-200 rounded-xl p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.60775006311!2d-46.5420357251334!3d-23.54660646104943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e73cec889db%3A0xb7ba22bf02ffe6e1!2sR.%20Lucinda%20Gomes%20Barreto%2C%20726%20-%20Vila%20Nova%20Manchester%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003440-040!5e0!3m2!1spt-BR!2sbr!4v1714499178082!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
