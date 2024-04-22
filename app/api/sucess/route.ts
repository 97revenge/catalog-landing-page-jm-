import { z } from "zod";

const productSchema = z.object({
  tag: z.string().optional(),
  image: z.string().url(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
});

export const GET = async () => {
  const products: Array<z.infer<typeof productSchema>> = [
    {
      tag: "Super Qualidade",
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_pp_cristal_2x0_50_mm_171_3_4d1db6402f9065a86b590f859ecc7384.png",
      description: "Cabo para iluminação",
      title: "Cabo PP Cristal 2x0,50 MM",
      url: "https://www.jmluzearte.com.br/cabos/outros/cabo-pp-cristal?variant_id=237",
    },

    {
      tag: "Super Qualidade",
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/lustre_luminaria_pendente_em_aramado_diamante_295_1_65e970c379dfb19325cc38d2469f30d2.png",
      description:
        "A luminária pendente Diamante é ideal para iluminar sua sala de estar, sala de jantar, varandas, bancadas e muito mais.",
      title: "Lustre luminária Pendente em Aramado Diamante",
      url: "https://www.jmluzearte.com.br/luminarias/lustre-luminaria-pendente-em-aramado-diamante-295?variant_id=971",
    },
    {
      tag: "Tropical 🍹",
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/luminaria_de_palha_tropical_design_brasileiro_carnauba_para_quartos_sala_de_estar_eamp_studio_317_3_8202f0c69284adc315903713b97944d1.png",
      description:
        "Experimente a sofisticação do design brasileiro com nossa luminária de palha tropical de carnaúba. Ideal para quartos, salas de estar e estúdios, proporcionando uma atmosfera acolhedora e elegante.",
      title:
        "Luminária De Palha Tropical Design Brasileiro carnaúba para quartos , sala de estar & studio",
      url: "https://www.jmluzearte.com.br/luminarias/luminaria-de-palha-tropical-design-brasileiro-carnauba-para-quartos-sala-de-estar-amp-studio",
    },
  ];

  return Response.json(products);
};
