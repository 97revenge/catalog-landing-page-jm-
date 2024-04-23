import { productSchema } from "@/types/product";
import { z } from "zod";

export const GET = () => {
  const products: Array<z.infer<typeof productSchema>> = [
    {
      tag: ["Presente perfeito de dia das Mães 👪", "bg-red-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/porta_temperos_condimentos_16_potes_giratorio_quadrado_inox_379_1_3c0dc3f998c45beb3b8ebc3df7a78ad3.png",
      title: "Porta Temperos Condimentos 16 Potes Giratorio Quadrado Inox",
      description:
        "Este conjunto de porta temperos condimentos não apenas adiciona um toque de elegância à sua cozinha, mas também oferece praticidade e funcionalidade. Com 16 potes giratórios quadrados de aço inoxidável, este conjunto não só é durável, mas também permite fácil acesso aos seus temperos e condimentos essenciais durante o preparo das refeições. Sua estrutura robusta e resistente garante uma longa vida útil, enquanto sua superfície lisa facilita a limpeza, tornando-o uma adição valiosa para qualquer cozinha moderna.",
      url: "https://www.jmluzearte.com.br/utilidades/porta-temperos-condimentos-16-potes-giratorio-quadrado-inox",
    },
    {
      tag: ["Útil para cozinha 👩‍🍳", "bg-red-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/kit_conjunto_utensilios_silicone_facas_tabua_de_cortar_19_pecas_359_1_5f042c3171bc72c326f5d0fe4cf0fbe2.png",
      title: "Kit Conjunto Utensílios Silicone Facas Tabua De Cortar 19 Peças",
      description:
        "Este lindo kit de utensílios de cozinha traz a versatilidade, praticidade e a durabilidade que você precisa dentro da sua cozinha! Ele também é o PRESENTE IDEAL em datas comemorativas.",
      url: "https://www.jmluzearte.com.br/utilidades/kit-conjunto-utensilios-silicone-facas-tabua-de-cortar-19-pecas",
    },
    {
      tag: ["Super Novidade ✨", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/abridor_de_saca_rolhas_eletrico_para_garrafas_de_vinho_recarregavel_ah_k002_371_2_5830ba638b0bc708a3a98b67658ef6b8.png",
      title:
        "Abridor De Saca-rolhas Elétrico Para Garrafas De Vinho Recarregavel AH- K002",
      description:
        "Prático vinho garrafa abridor desgaste-resistente ABS portátil automático vinho saca-rolhas para uso diário",
      url: "https://www.jmluzearte.com.br/utilidades/abridor-de-saca-rolhas-eletrico-para-garrafas-de-vinho-recarregavel-ah-k002",
    },
    {
      tag: ["Super Desconto 👀", "bg-green-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/massageador_pistola_eletrico_profissional_muscular_portatil_341_1_47a7fdf531e279c0d70dd1e455cae545.png",
      title: "Massageador Pistola Elétrico Profissional Muscular Portátil",
      description:
        "Equipes esportivas profissionais usam armas de massagem de alta frequência. Este modelo oferece massagem profunda para trabalhos físicos exigentes, com 6 intensidades ajustáveis, 4 cabeças de massagem e baixo ruído. Com bateria recarregável de longa duração e design portátil.",
      url: "https://www.jmluzearte.com.br/utilidades/massageador-pistola-eletrico-profissional-muscular-portatil",
    },
    {
      tag: ["Muito Resistente 🏃‍♂️", "bg-red-600"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/joelheira_compressao_protecao_ajustavel_cross_fitness_339_1_240188000876b8f199dd1c9ee0700e2a.png",
      title: "Joelheira Compressão Proteção Ajustável Cross Fitness",
      description:
        "A Joelheira de compressão de 360º graus oferece modelagem anatômica com ajuste perfeito, contribuindo para retardar o desgaste muscular e melhorar o desempenho em atividades físicas, além de minimizar danos musculares.",
      url: "https://www.jmluzearte.com.br/utilidades/joelheira-compressao-protecao-ajustavel-cross-fitness",
    },
    {
      tag: ["Refresca tudo 💨 ", "bg-blue-300"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/ventilador_e_umidificador_portatil_357_1_514358edd33e9fd6e9727a80161783c9.png",
      title: "Ventilador e Umidificador Portátil",
      description:
        "Três Velocidades: Refresque o ar através da evaporação da água com três diferentes velocidades.",
      url: "https://www.jmluzearte.com.br/utilidades/ventilador-e-umidificador-portatil?variant_id=987",
    },
    {
      tag: [
        "Quente ou Frio 🍨🔥",
        "bg-gradient-to-r from-red-500 via-red-500 to-blue-500",
      ],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/garrafa_isotermica_com_tres_canecas_333_1_91eca1db82550700ff42606bfc877018.png",
      title: "Garrafa isotérmica com três canecas",
      description:
        " A caneca de café de parede dupla pode ser usada ao ar livre ou em ambientes fechados. A tampa da caneca isolada tem um anel de vedação de silicone de grau alimentício embutido, que é selado e à prova de vazamentos. A caneca de café pode ser facilmente colocada em sua bolsa ou porta-copos do seu veículo, então o copo de café isolado é tão conveniente para transportar para o trabalho, exercício e sair. Esta não é apenas uma xícara de café, mas também sua xícara de chá, suco e caneca de viagem, atendendo às suas necessidades a qualquer hora, em qualquer lugar",
      url: "https://www.jmluzearte.com.br/utilidades/garrafa-isotermica-com-tres-canecas",
    },
    {
      tag: ["Super Eficiente 🍶", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/garrafa_eletrica_dobravel_331_1_65b66d3429e6c042f4e22867b6ebd2e4.png",
      title: "Garrafa elétrica dobrável",
      description:
        "A chaleira com tudo incluído foi lindamente projetada para ferver água com eficácia. Superfície fácil de gerenciar Usos: fazer café, fazer leite em pó, fazer chá, ferver água.",
      url: "https://www.jmluzearte.com.br/utilidades/garrafa-eletrica-dobravel",
    },
    {
      tag: ["Presente Perfeito 🥇", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/mouse_pad_rgb_800mm_x_300mm_375_1_4c4c8f65eb676c75ad83a104dea284cb.png",
      title: "Mouse Pad RGB 800mm x 300mm",
      description:
        "Este Mouse Pad RGB 01 da Aitek é o complemento perfeito para a sua estação de trabalho. Com características técnicas de ponta e um design elegante, ele oferece uma experiência de uso superior para gamers e profissionais exigentes. O Mouse Pad apresenta uma superfície antiderrapante em poliéster, garantindo precisão e estabilidade durante suas sessões de jogo ou trabalho intenso. Além disso, o sistema LED RGB integrado proporciona uma iluminação vibrante e personalizável, elevando o estilo da sua configuração. Não apenas um acessório funcional, mas também um elemento de destaque em sua mesa.",
      url: "https://www.jmluzearte.com.br/utilidades/tecnologia/mouse-pad-rgb-800mm-x-300mm",
    },
    {
      tag: ["Super Qualidade 🆗", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/balanca_digital_bioimpedancia_aplicativo_bluetooth_180kg_vtr_12221_369_1_51fd23c25b2cf335f9521eb072b89bde.png",
      title:
        "Balança Digital Bioimpedância Aplicativo Bluetooth 180kg VTR-12221",
      description:
        "Mede dados do corpo, sensor inteligente com energia automática, cantos seguros anti-colisão, detecta temperatura interna, conecta via Bluetooth com um clique no app.",
      url: "https://www.jmluzearte.com.br/utilidades/balanca-digital-bioimpedancia-aplicativo-bluetooth-180kg-vtr-12221",
    },
    {
      tag: ["Útil para cozinha 👩‍🍳", "bg-red-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/cortador_triturador_eletrico_multifuncional_4_em_1_345_1_c8bdb2087423ddfd7ce665c648b81988.png",
      title: "Cortador Triturador Elétrico Multifuncional 4 em 1",
      description:
        "Apresentando o Fatiador de Legumes Elétrico [4 em 1], um utensílio versátil que simplifica suas tarefas na cozinha. Com a capacidade de cortar vegetais e picar carne, basta trocar os acessórios para alternar entre suas funcionalidades. Prepare suas refeições com facilidade, cortando os vegetais diretamente no recipiente e adicionando os temperos desejados. Além disso, é ideal para triturar uma variedade de ingredientes, como cebola, alho, pimenta, salsinha, cominho, gengibre e muito mais.",
      url: "https://www.jmluzearte.com.br/utilidades/cortador-triturador-eletrico-multifuncional-4-em-1",
    },
    {
      tag: ["Masta Mosquitos 🦟", "bg-lime-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/armadilha_mata_mosquito_5w_eletrico_usb_led_repelente_220v_363_1_8820323d23bc4ef84da3f64247e7e872.png",
      title: "Armadilha Mata Mosquito 5W Eletrico USB LED Repelente 220V",
      description:
        "Tipo de praga: mosquitos, controle de pragas Tipo: armadilhas, categoria: controle de pragas, fabricado na China",
      url: "https://www.jmluzearte.com.br/utilidades/armadilha-mata-mosquito-5w-eletrico-usb-led-repelente-220v",
    },
    {
      tag: ["Presente Perfeito 🥇", "bg-blue-600"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/suporte_de_notebook_com_2_cooler_led_silenciosos_delta_b1022_373_1_e3104038b9e299309db2432477efba93.png",
      title: "Suporte De Notebook Com 2 Cooler Led Silenciosos Delta B1022",
      description:
        "Ventiladores ultra-silenciososos:  A almofada de resfriamento para laptop duas ventoinhas ultrasilenciosas criam um ambiente sem ruído para você. A taxa de ruído é menos 26 DB, super silenciosa para dormir.Superfície de metal USB extra: Duas portas USB extra. Malha de metal multidirecional de alta qualidade oferece uma superfície de transporte estável e resistente ao desgaste.",
      url: "https://www.jmluzearte.com.br/utilidades/tecnologia/suporte-de-notebook-com-2-cooler-led-silenciosos-delta-b1022",
    },
    {
      tag: ["Aspirador Potente 🎆", "bg-yellow-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/aspirador_portatil_automotivo_potente_recarregavel_365_1_a81e0335fdd54e2e01de4c011709999b.png",
      title: "Aspirador portatil Automotivo Potente Recarregável",
      description:
        "Motor super potente de 120W fornece forte sucção de até 5,5 Kpa, pode facilmente absorver cabelos, resíduos de comida, partículas e menos de 0,1 mícron de detritos escondidos no sofá, almofada, etc. Uma escolha inteligente para rapidez diária, limpeza de automóveis e limpeza doméstica.",
      url: "https://www.jmluzearte.com.br/utilidades/aspirador-portatil-automotivo-potente-recarregavel",
    },
    {
      tag: ["Produto TOP 📊 ", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/campainha_c_camera_wifi_s_fio_inteligente_interfone_c_audio_110v_220v_329_1_38b9add4938f51af970d07d2dca8ce37.png",
      title:
        "Campainha C/ Câmera Wifi S Fio Inteligente Interfone C Áudio 110v/220v",
      description:
        "Transforme a segurança e a conveniência da sua casa com a Campainha Inteligente com Câmera WiFi Sem Fio. Esta inovadora campainha não só oferece a funcionalidade clássica de uma campainha tradicional, mas também incorpora recursos avançados para proporcionar uma experiência de segurança completa.",
      url: "https://www.jmluzearte.com.br/utilidades/campainha-c-camera-wifi-s-fio-inteligente-interfone-c-audio-110v220v-329",
    },
    {
      tag: ["Produto TOP 📊", "bg-blue-500"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/difusor_de_aroma_umidificador_efeito_de_chama_essencias_oleo_branco_335_2_194d091379ebbebc364ccdf93bdc35ff.png",
      title:
        "Difusor de aroma, umidificador, efeito de chama, essências, óleo branco",
      description:
        "É antibacteriano.Indique se você tem pouca água.Tem um desligamento automático.Com difusor aromático.",
      url: "https://www.jmluzearte.com.br/utilidades/difusor-de-aroma-umidificador-efeito-de-chama-essencias-oleo-branco?variant_id=977",
    },
    {
      tag: ["Presente Animal 🐶", "bg-red-700"],
      image:
        "https://images.tcdn.com.br/img/img_prod/1112215/coleira_guia_retratil_para_caes_gatos_resistente_343_1_8a843ec709b9071f33a01c3c237fba3f.png",
      title: "Coleira Guia Retrátil Para Cães, Gatos, Resistente",
      description:
        "Com Essa Guia a Segurança é Garantida e o Controle de Seu Animal Também  Ideal Para Apropriar o Produto a Idade, Tamanho e Temperamento do Seu Animal",
      url: "https://www.jmluzearte.com.br/utilidades/coleira-guia-retratil-para-caes-gatos-resistente",
    },
  ];

  return Response.json(products);
};
