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
    {
      tag: ["Simples e Lindo 🦋  ", "bg-zinc-400"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/abajur_de_mesa_vime_madeira_347_1_50fa82a86affaad7460dc1e4c670b1ab.png",
      title: "Abajur de mesa Vime Madeira",
      description:
        "Iluminárias de mesa prática, perfeita para iluminar o seu quarto , sua sala & studio ",
      url: "https://www.jmluzearte.com.br/luminarias/abajures/abajur-de-mesa-vime-madeira",
    },
    {
      tag: ["Minimalista e Estiloso 🖼", "bg-gray-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/luminaria_de_mesa_tripe_abajur_com_base_de_madeira_349_1_71a4bcddfafd83de00ffbeec41600c59.png",
      title: "Luminária de Mesa tripé Abajur com Base de Madeira",
      description:
        "A luminária com designer sofisticado, a luminária é perfeita para ambientes do dia a dia.",
      url: "https://www.jmluzearte.com.br/luminarias/abajures/luminaria-de-mesa-tripe-abajur-com-base-de-madeira",
    },
    {
      tag: ["Sofisticado com qualidade ✨", "bg-blue-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/abajur_luminaria_ceramica_lisboa_house_golden_para_quarto_sala_de_estar_e_estudio_303_1_ed938a1e7af53a9ee1e89a6ea9554f29.png",
      description:
        "Este não é apenas um simples abajur; é uma peça decorativa em cerâmica que eleva o charme de qualquer espaço. Com uma base elaboradamente trabalhada que instantaneamente atrai os olhares, este abajur adiciona uma aura encantadora à sua decoração.",
      title:
        "Abajur Luminária Cerâmica Lisboa House Golden Para Quarto , sala de estar e estudio",
      url: "https://www.jmluzearte.com.br/luminarias/abajures/abajur-luminaria-ceramica-lisboa-house-golden-para-quarto-sala-de-estar-e-estudio",
    },
    {
      tag: ["Produto TOP 📊", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/abajur_de_mesa_barril_vime_351_1_cb2ec0b6380e4465336cbae8252c3adc.png",
      title: "Abajur de Mesa Barril Vime",
      description:
        "Feito com materiais de alta qualidade, este abajur combina a delicadeza da porcelana branca com a rusticidade do vime, criando uma atmosfera acolhedora e charmosa em sua sala, quarto ou onde quer que deseje colocá-lo.",
      url: "https://www.jmluzearte.com.br/lumina  rias/abajures/abajur-de-mesa-barril-vime",
    },
  ];

  return Response.json(product);
};
