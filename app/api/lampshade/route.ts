import { productSchema } from "@/types/product";
import { z } from "zod";

export const GET = () => {
  const product: Array<z.infer<typeof productSchema>> = [
    {
      tag: ["Muito estilo 🦆", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/abajur_luminaria_modelo_cisne_porcelana_para_quarto_sala_de_estar_studio_313_1_9a5f40a0855d2bf808731e16f552e34e.png",
      title:
        "Abajur Luminária Modelo Cisne Porcelana para Quarto , Sala de estar , Studio",
      description:
        "Cúpula Tecido Estampado Base de porcelana Material Premium Largura. 30cm",
      url: "https://www.jmluzearte.com.br/luminarias/abajures/abajur-luminaria-modelo-cisne-porcelana-para-quarto-sala-de-estar-studio",
    },
  ];

  return Response.json(product);
};
