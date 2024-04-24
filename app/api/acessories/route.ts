import { productSchema } from "@/types/product";
import { z } from "zod";

export const GET = () => {
  const product: Array<z.infer<typeof productSchema>> = [
    {
      tag: ["Toda casa precisa 🏠", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/kit_3_adaptador_benjamin_cubo_3d_3_entradas_110v_1_220v_universal_tomada_3_pinos_319_1_c714fc4ac2cf41043cf637c653ad855f.png",
      title:
        "KIT 3 Adaptador Benjamin Cubo 3d 3 Entradas 110v 1 220v Universal Tomada 3 Pinos",
      description:
        "Pode ser ligado ate 4 aparelhos eletrônicos com segurança, material resistente ante-chama.o cubo tem 4 tomadas do modelo 10 aperes para aparelhos de baixa voltagem.",
      url: "https://www.jmluzearte.com.br/acessorios/kit-3-adaptador-benjamin-cubo-3d-3-entradas-110v-1-220v-universal-tomada-3-pinos",
      offer: true,
    },
    {
      tag: ["Mais Vendido 🥇", "bg-yellow-400"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/kit_rabicho_de_abajur_em_tecido_zebrado_com_soquete_3mts_283_1_e4e2230b3d1c8acc3932af14a5cf450b.jpeg",
      title: "KIT RABICHO DE ABAJUR EM TECIDO ZEBRADO COM SOQUETE 3mts",
      description:
        "Kit rabicho de abajur de  3 mts com interruptor e soquete  branco ",
      url: "https://www.jmluzearte.com.br/acessorios/rabichos/kit-rabicho-de-abajur-em-tecido-zebrado-com-soquete-3mts",
      offer: true,
    },
    {
      tag: ["Produto TOP 🚀", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/extensao_33_1_6291fec48f49735f23dfda8efcf5e09c.png",
      title: "Extensão em Tecido Poliéster",
      description:
        "Extensão de Energia com acabamento elegante. Ideal para seu Home Office ou quarto, compondo de forma harmônica com as luminárias Diluminato.",
      url: "https://www.jmluzearte.com.br/acessorios/extensoes/extensao-2-metros?variant_id=101",
      offer: true,
    },
    {
      tag: ["Queridinho dos clientes ❤", "bg-red-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/rabicho_em_tecido_chevron_com_interruptor_1_60_metros_275_1_220f314ef73fedd5da9e5fb840389667.jpeg",
      title: "RABICHO EM TECIDO CHEVRON COM INTERRUPTOR 1,60 METROS",
      description: "1,60 metros com interruptor para iluminação elegante",
      url: "https://www.jmluzearte.com.br/acessorios/rabichos/rabicho-em-tecido-chevron-com-interruptor-1-60-metros?variant_id=957",
      offer: false,
    },
    {
      tag: ["Cor Exótica 🔥", "bg-orange-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/rabicho_abajur_em_tecido_com_soquete_1_60_metros_245_1_2750242631bf18820f87c6f058863c3a.png",
      title: "KIT RABICHO DE ABAJUR EM TECIDO COM SOQUETE",
      description:
        "Transforme seu abajur com estilo! Kit rabicho em tecido com soquete: iluminação personalizada para sua casa.",
      url: "https://www.jmluzearte.com.br/acessorios/rabichos/rabicho-abajur-em-tecido-com-soquete-1-60-metros?variant_id=921",
      offer: false,
    },
    {
      tag: ["Ótimo para fornecedores 👨‍🏭 ", "bg-gray-400"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/rabicho_em_tecido_com_interuptor_193_1_0b5e161bf0d8c039e9b224b603beb461.png",
      title: "Rabicho em Tecido com Interuptor",
      description: "Rabicho em Tecido com Interuptor ótimo para fornecedores",
      url: "https://www.jmluzearte.com.br/acessorios/rabichos/rabicho-em-tecido-com-interuptor?variant_id=125",
      offer: false,
    },
    {
      tag: ["Alicate de presente 👨‍🏭", "bg-lime-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/decapador_para_cabo_coaxial_37_1_7ca5e4d5d39d7e033ee280abbc86f4b8.png",
      title: "ALICATE DECAPADOR PARA CABO COAXIAL",
      description:
        "O Alicate Decapador possui corpo em plástico rígido é compacto e equipado com lâminas especiais e ajustáveis, foi desenvolvido especificamente para descascar e decapar fios e cabos coaxiais de 4, 6, 8 e 12 mm de espessura, vindo pré-definido para cabos de 6 mm e podendo ser ajustado para os outros tamanhos",
      url: "https://www.jmluzearte.com.br/acessorios/decapadores/decapador-para-cabo-coaxial",
      offer: false,
    },
  ];

  return Response.json(product);
};
