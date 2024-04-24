import { productSchema } from "@/types/product";
import { z } from "zod";

export const GET = async () => {
  const product: Array<z.infer<typeof productSchema>> = [
    {
      tag: ["Ilumina a casa toda 💡", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/lampada_led_filamento_155_1_f45a0b62d36d5812794aceeb4c1a2a1c.png",
      title: "Lâmpada Led Filamento",
      description:
        "Economia energética com design clássico: a lâmpada LED filamento une eficiência e estilo vintage.",
      url: "https://www.jmluzearte.com.br/iluminacao/lampada/lampada-led-filamento",
      offer: false,
    },
    {
      tag: ["Perfeita para quartos 🌜", "bg-blue-400"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/lampada_led_avant_159_1_9b77a62b2c586f9211ecf835f347fa8c.png",
      title: "Lâmpada Led Avant",
      description:
        "A lâmpada LED Avant oferece iluminação eficiente e durável, com design moderno e baixo consumo de energia, ideal para diversos ambientes.",
      url: "https://www.jmluzearte.com.br/iluminacao/lampada/lampada-led-avant",
      offer: false,
    },
    {
      tag: ["Totalmente Ecônomico ♻", "bg-green-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/lampada_led_bulbo_4w_filamento_161_1_35bfd4a9ad5b3a268e82f2bb30429c1e.png",
      title: "Lâmpada Led Bulbo 4W Filamento",
      description:
        "A lâmpada LED bulbo de 4W com filamento oferece uma solução moderna e eficiente para iluminação. Com seu design clássico de bulbo e tecnologia LED avançada, esta lâmpada combina estilo e economia de energia. Seu filamento de LED reproduz o visual nostálgico das lâmpadas incandescentes tradicionais, mas com uma eficiência energética muito maior.",
      url: "https://www.jmluzearte.com.br/iluminacao/lampada/lampada-led-bulbo-4w-filamento",
      offer: false,
    },
    {
      tag: ["Deixe seu quarto mais estiloso 🚨", "bg-purple-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/luminaria_globo_de_plasma_raios_127v_355_1_5df93abbfd4c9473ebfe24e38fe43ec8.png",
      title: "Luminária Globo de Plasma Raios 127v",
      description:
        "Ótima opção para decorar festas de aniversários, balada, quarto e sala. Indicado para lugares com pouca luz, para que o efeito fique ainda mais bonito.",
      url: "https://www.jmluzearte.com.br/iluminacao/luminaria-globo-de-plasma-raios-127v",
      offer: false,
    },
  ];

  return Response.json(product);
};
