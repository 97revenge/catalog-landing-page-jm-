import { HightLightSchema } from "@/types/highLight";

export const GET = () => {
  const stack: HightLightSchema = [
    {
      discount: 25,
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv0fjdzqm10d30",
      title: "Extensão de 3 entradas Com Tecido Trançado 2 METROS",
      note: "9.9",
      description:
        "Extensão com cabo trançado super resistente. Inovação & qualidade no mesmo produto.",
      value: ["72,00", "52,90"],
      url: "https://shopee.com.br/Extens%C3%A3o-3-entradas-com-cabo-Tran%C3%A7ado-2mt-i.562459802.19597682352?xptdk=22df062c-9ee7-4ef3-a11a-d60cee813163",
    },
    {
      discount: 25,
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv0fjdzqm10d30",
      title: "Extensão de 3 entradas Com Tecido Trançado 2 METROS",
      note: "9.9",
      description:
        "Extensão com cabo trançado super resistente. Inovação & qualidade no mesmo produto.",
      value: ["72,00", "52,90"],
      url: "https://shopee.com.br/Extens%C3%A3o-3-entradas-com-cabo-Tran%C3%A7ado-2mt-i.562459802.19597682352?xptdk=22df062c-9ee7-4ef3-a11a-d60cee813163",
    },
    {
      discount: 25,
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv0fjdzqm10d30",
      title: "Extensão de 3 entradas Com Tecido Trançado 2 METROS",
      note: "9.9",
      description:
        "Extensão com cabo trançado super resistente. Inovação & qualidade no mesmo produto.",
      value: ["72,00", "52,90"],
      url: "https://shopee.com.br/Extens%C3%A3o-3-entradas-com-cabo-Tran%C3%A7ado-2mt-i.562459802.19597682352?xptdk=22df062c-9ee7-4ef3-a11a-d60cee813163",
    },
  ];

  return Response.json(stack);
};
