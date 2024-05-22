import { HightLightSchema, hightLightSchema } from "@/types/highLight";
import { z } from "zod";

export const GET = () => {
  const stack: Array<any> = [
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
      insights: {
        title: "Extensão com entrada 3 tomadas",
        description: "cabo reforçado e trançado com tecido.",
        content: [
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
        ],
      },
    },
    {
      discount: 25,
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-luuoomg6ex5x56",
      title: "Extensão com Entrada USB e Cabo Trançado 2mt",
      note: "10",
      description:
        "Extensão com entrada para plug macho e USB, com cabo reforçado e trançado com tecido para combinar com a decoração do seu ambiente.",
      value: ["79,99", "59,90"],
      url: "https://shopee.com.br/Extens%C3%A3o-com-Entrada-USB-e-Cabo-Tran%C3%A7ado-2mt-i.562459802.23397482318?sp_atk=83cedf98-5922-4bdc-bcf0-c7f8d84a00bf&xptdk=83cedf98-5922-4bdc-bcf0-c7f8d84a00bf",
      insights: {
        title: "Extensão com entrada 3 tomadas",
        description: "cabo reforçado e trançado com tecido.",
        content: [
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
        ],
      },
    },
    {
      discount: 25,
      image:
        "https://down-br.img.susercontent.com/file/sg-11134201-7rd52-lvacxp6e97fa92",
      title: "Extensão 5 Tomadas 4 USB 1 USB Tipo C Cabo Reforçado 2 Metros",
      note: "9.8",
      description:
        "Extensão com cabo trançado super resistente. Inovação & qualidade no mesmo produto.",
      value: ["113,20", "84,90"],
      url: "https://shopee.com.br/Extens%C3%A3o-3-entradas-com-cabo-Tran%C3%A7ado-2mt-i.562459802.19597682352?xptdk=22df062c-9ee7-4ef3-a11a-d60cee813163",
      insights: {
        title: "Extensão com entrada 3 tomadas",
        description: "cabo reforçado e trançado com tecido.",
        content: [
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "cabo reforçado e trançado com tecido.",
            title: "Otima qualidade",
          },
        ],
      },
    },
  ];

  return Response.json(stack);
};
