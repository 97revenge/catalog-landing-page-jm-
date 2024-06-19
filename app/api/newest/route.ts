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
            icon: "https://api.iconify.design/arcticons:orange-flex.svg",
            descripton: "O cabo de 2 metros de comprimento oferece maior alcance, permitindo que os dispositivos sejam conectados a uma tomada distante. Isso proporciona flexibilidade na disposição dos móveis e na localização dos aparelhos eletrônicos",
            title: "Cabo Longo e Flexível.",
          },
          {
            icon: "https://api.iconify.design/basil:power-button-outline.svg",
            descripton: "A extensão vem com um botão liga/desliga, permitindo que você corte a energia de todos os dispositivos conectados de uma só vez. Isso é útil para economizar energia e aumentar a segurança ao desligar dispositivos que não estão em uso.",
            title: "Botão Liga/Desliga",
          },
          {
            icon: "https://api.iconify.design/tdesign:assignment-checked.svg",
            descripton: "O cabo trançado com tecido não só é esteticamente agradável, combinando com a decoração do ambiente, mas também oferece maior durabilidade e resistência ao desgaste, tornando-o mais seguro e duradouro.",
            title: "Design Atraente e Durável.",
          },
          {
            icon: "https://api.iconify.design/pajamas:issue-type-maintenance.svg",
            descripton: "O cabo trançado é menos propenso a se enredar e formar nós, facilitando a organização e o armazenamento da extensão quando não estiver em uso. Isso ajuda a manter um ambiente mais organizado e seguro.",
            title: "Facilidade de Manutenção",
          },
          {
            icon: "https://api.iconify.design/simple-icons:awsorganizations.svg",
            descripton: "Ter uma extensão com várias entradas ajuda a manter os cabos organizados, evitando a confusão de fios espalhados pelo ambiente. Isso não apenas melhora a estética, mas também reduz o risco de tropeços e facilita a limpeza do espaço.",
            title: "Organização",
          },
          {
            icon: "https://api.iconify.design/material-symbols:s  ecurity-rounded.svg",
            descripton: "A extensão é equipada com um botão de liga/desliga, permitindo que você controle o fornecimento de energia para os dispositivos conectados. Isso pode prevenir sobrecargas e garantir que os aparelhos sejam desligados quando não estiverem em uso, aumentando a segurança.",
            title: " Segurança",
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
        title: "Extensão com Entrada USB e Cabo Trançado",
        description: "A extensão oferece três tomadas tradicionais e duas portas USB, permitindo carregar múltiplos dispositivos simultaneamente, como smartphones, tablets e laptops. ",
        content: [
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O cabo trançado com tecido não só é funcional, mas também esteticamente agradável. Disponível em várias cores, pode ser escolhido para combinar com a decoração do seu ambiente.",
            title: "Design Estético",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O cabo reforçado e trançado oferece maior durabilidade e resistência ao desgaste diário, além de reduzir riscos de danos internos.",
            title: "Durabilidade e Segurança",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O cabo reforçado e trançado oferece maior durabilidade e resistência ao desgaste diário, além de reduzir riscos de danos internos.",
            title: "Organização e Praticidade",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "Leve e portátil, pode ser facilmente transportada e utilizada em diferentes cômodos ou mesmo em viagens.",
            title: " Mobilidade e Facilidade de Uso",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "Com preço acessível e múltiplas funcionalidades, oferece um excelente retorno sobre o investimento. A garantia de 7 dias pelo vendedor proporciona uma segurança adicional na compra.",
            title: "Custo-Benefício",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "A extensão com entrada para plug macho e USB, com cabo reforçado e trançado com tecido, é uma solução prática e estética para o seu dia a dia",
            title: "Ideal para sua casa",
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
            descripton: "Com 5 tomadas tradicionais, 4 portas USB e 1 porta USB Tipo C, esta extensão permite carregar e alimentar diversos dispositivos ao mesmo tempo, como celulares, tablets, laptops e pequenos eletrodomésticos, economizando tempo e espaço.",
            title: "Carregamento Simultâneo de Múltiplos Dispositivos",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O cabo reforçado e trançado com tecido, disponível em várias cores, combina com a decoração do seu ambiente, trazendo uma estética moderna e organizada para qualquer cômodo da casa.",
            title: "Design Elegante e Funcional",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "A extensão vem com uma garantia de 7 dias oferecida pelo vendedor, proporcionando segurança e confiança na sua compra. Em caso de problemas, você pode contar com suporte rápido e eficiente.",
            title: "Garantia e Suporte",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O cabo de 2 metros é reforçado para maior durabilidade e segurança, prevenindo desgastes e danos que podem ocorrer com cabos comuns. Além disso, a extensão possui proteção contra sobrecarga e curto-circuito.",
            title: "Segurança Aumentada",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "O comprimento do cabo de 2 metros oferece maior flexibilidade para posicionar a extensão onde for mais conveniente, permitindo que você alcance tomadas distantes sem esforço.",
            title: "Flexibilidade e Alcance",
          },
          {
            icon: "https://api.iconify.design/ri:outlet-2-line.svg",
            descripton: "Com várias opções de entrada em um único dispositivo, você economiza espaço, evitando o uso de múltiplos adaptadores e extensões, mantendo o ambiente mais organizado e funcional.",
            title: "Economia de Espaço",
          },
        ],
      },
    },
  ];

  return Response.json(stack);
};
