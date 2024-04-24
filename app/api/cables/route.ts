import { productSchema } from "@/types/product";
import { z } from "zod";

export const GET = () => {
  const product: Array<z.infer<typeof productSchema>> = [
    {
      tag: ["Ideal para o Fornecedor 👨‍🏭  ", "bg-zinc-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_tecido_castanho_escuro_133_1_e346ba65f412eedc3cf61a87ea298b7d.png",
      title: "CABO PP EM TECIDO MARROM ESCURO",
      description:
        " Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      url: "https://www.jmluzearte.com.br/cabos/cabos-poliester/cabo-tecido-castanho-escuro?variant_id=583",
      offer: false,
    },
    {
      tag: ["Ideal para o Fornecedor 👨‍🏭  ", "bg-zinc-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_tecido_preto_135_1_ac83b4d155b6777b5d1797c8e2ea3204.png",
      title: "CABO PP EM TECIDO POLIÉSTER PRETO",
      description:
        "Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de  iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      url: "https://www.jmluzearte.com.br/cabos/cabos-poliester/cabo-tecido-preto?variant_id=663",
      offer: false,
    },
    {
      tag: ["Mais Vendidos 🥇", "bg-blue-400"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_tecido_zebrado_215_1_33a00c20b7162d8889c5e878ed2cc3ac.png",
      title: "CABO PP EM TECIDO CHEVRON PRETO E BRANCO",
      description:
        "Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de  iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      url: "https://www.jmluzearte.com.br/cabos/cabos-trancados/cabo-tecido-zebrado?variant_id=243",
      offer: false,
    },

    {
      tag: ["Cor Maravilhosa 🔶", "bg-red-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_tecido_109_1_661ac439cad8eb1e9acad6d31f93118e.png",
      title: "CABO PP EM TECIDO POLIÉSTER COBRE SALMÃO",
      description:
        "Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de  iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      url: "https://www.jmluzearte.com.br/cabos/cabos-poliester/cabo-tecido-109?variant_id=359",
      offer: false,
    },
    {
      tag: ["Ideal para o Fornecedor 👨‍🏭  ", "bg-zinc-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cabo_tecido_cinza_claro_141_1_e932c72dba13a40023b85b5d8b4d3e2f.png",
      title: "CABO PP EM TECIDO POLIÉSTER BEGE",
      description:
        "Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de  iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      url: "Ideal para que você possa criar novos pendentes, abajures, luminárias e objetos de  iluminação a partir do cabo elétrico da forma que quiser e com o cabo no tamanho que desejar.",
      offer: true,
    },
  ];

  return Response.json(product);
};
