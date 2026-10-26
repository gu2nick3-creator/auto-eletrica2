export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  car: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarText: string;
}

export const COMPANY_INFO = {
  name: "Nissey Auto Elétrico",
  slogan: "Seu carro com energia total",
  subtitle: "Baterias, alternadores, injeção e som automotivo.",
  address: "R. Profa. Elvira Lefévre Sales Nemer, 193 - Jardim Sao Pedro, Barueri - SP, 06402-190",
  shortAddress: "Jardim São Pedro, Barueri - SP",
  phoneDisplay: "(11) 4198-3832",
  phoneRaw: "551141983832",
  whatsappUrl: "https://wa.me/551141983832",
  googleRating: 4.7,
  reviewsCount: 213,
  hours: [
    { day: "Segunda a Sexta", time: "08:00 - 18:00" },
    { day: "Sábado", time: "08:00 - 12:00" },
    { day: "Domingo e Feriados", time: "Fechado" },
  ],
  regions: ["Barueri", "Alphaville", "Tamboré", "Carapicuíba", "Jandira", "Osasco"],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "baterias",
    title: "Baterias Automotivas",
    badge: "Troca Expressa",
    shortDesc: "Venda, instalação imediata e teste completo de fuga de corrente e alternador.",
    fullDesc: "Trabalhamos com as melhores marcas do mercado nacional e importado (Moura, Heliar, Bosch). Fazemos diagnóstico de saúde da bateria e sistema de recarga para garantir que você não fique na mão.",
    image: "/src/assets/images/service_battery_1792992985354.jpg",
    features: [
      "Marcas originais com garantia de fábrica",
      "Teste computadorizado de carga e partida",
      "Instalação no local com descarte ecológico",
      "Atendimento para nacionais e importados"
    ]
  },
  {
    id: "injecao",
    title: "Injeção Eletrônica",
    badge: "Diagnóstico Computadorizado",
    shortDesc: "Leitura de falhas com scanner de última geração, limpeza de bicos e calibração de sensores.",
    fullDesc: "Identificação precisa da causa de luz acesa no painel, engasgos, perda de potência ou consumo excessivo de combustível. Nossa equipe interpreta os dados técnicos com precisão.",
    image: "/src/assets/images/service_injection_1792992996594.jpg",
    features: [
      "Scanner automotivo de última geração",
      "Limpeza e equalização de bicos injetores",
      "Diagnóstico de sonda lambda, MAP e MAF",
      "Resolução de falhas intermitentes e falhas de partida"
    ]
  },
  {
    id: "som",
    title: "Som Automotivo & Multimídia",
    badge: "Conectividade & Qualidade",
    shortDesc: "Instalação profissional de centrais multimídia, Apple CarPlay, alto-falantes e amplificadores.",
    fullDesc: "Modernize a cabine do seu carro com conectividade total, comandos no volante mantidos, câmeras de ré de alta definição e sonorização acústica de alto padrão.",
    image: "/src/assets/images/service_sound_1792993009584.jpg",
    features: [
      "Centrais Multimídia Android Auto & Apple CarPlay",
      "Câmeras de ré e sensores de estacionamento",
      "Kits duas vias, subwoofers e amplificadores",
      "Acabamento original sem cortes de chicote de fábrica"
    ]
  },
  {
    id: "alternadores",
    title: "Alternadores & Motores de Partida",
    badge: "Revisão e Reparo",
    shortDesc: "Recondicionamento, substituição de escovas, reguladores de voltagem e induzidos.",
    fullDesc: "Se o carro tem dificuldade para dar a partida ou a luz de bateria acende no painel, realizamos teste em bancada de alta precisão com peças de primeira linha.",
    image: "/src/assets/images/service_alternator_1792993020688.jpg",
    features: [
      "Bancada de teste de carga e rotação",
      "Troca de regulador, placa de diodos e rolamentos",
      "Motores de arranque para linha leve e utilitários",
      "Serviço rápido com garantia documentada"
    ]
  },
  {
    id: "iluminacao",
    title: "Iluminação & Faróis",
    badge: "Segurança Noturna",
    shortDesc: "Instalação de lâmpadas LED premium, regulagem de facho e reparo de chicotes de iluminação.",
    fullDesc: "Melhore drasticamente sua visibilidade em pistas e rodovias com iluminação eficiente, alinhamento milimétrico de faróis para não ofuscar outros condutores e reparo de lanternas e setas.",
    image: "/src/assets/images/service_headlights_1792993031590.jpg",
    features: [
      "Lâmpadas LED de alta performance e durabilidade",
      "Regulagem óptica computadorizada",
      "Faróis de milha e neblina auxiliares",
      "Substituição de relés, interruptores e fusíveis"
    ]
  },
  {
    id: "ar-e-acessorios",
    title: "Travas, Vidros & Ar-Condicionado",
    badge: "Conforto Total",
    shortDesc: "Manutenção de vidros elétricos, travas elétricas, alarmes e carga de gás do ar-condicionado.",
    fullDesc: "Segurança e conforto para o seu dia a dia. Solucionamos problemas em módulos de vidro, substituição de máquinas e botões, além de higienização do sistema de climatização.",
    image: "/src/assets/images/hero_auto_electric_1792992973205.jpg",
    features: [
      "Carga de gás refrigerante e óleo compressor",
      "Reparo de máquinas de vidro elétrico e travas",
      "Instalação e desativação segura de alarmes",
      "Troca de filtro de cabine e ozonização"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Diagnóstico Elétrico de Alta Precisão",
    category: "Diagnóstico",
    image: "/src/assets/images/hero_auto_electric_1792992973205.jpg",
    caption: "Verificação detalhada de chicotes e sensores em nossa oficina técnica em Barueri."
  },
  {
    id: "gal-2",
    title: "Instalação de Bateria e Teste de Carga",
    category: "Baterias",
    image: "/src/assets/images/service_battery_1792992985354.jpg",
    caption: "Bateria selada de alta amperagem com terminais limpos e teste Fluke de voltagem."
  },
  {
    id: "gal-3",
    title: "Scanner Computadorizado OBD2",
    category: "Injeção",
    image: "/src/assets/images/service_injection_1792992996594.jpg",
    caption: "Leitura de telemetria da injeção eletrônica com scanner profissional atualizado."
  },
  {
    id: "gal-4",
    title: "Central Multimídia & Som Automotivo",
    category: "Som & Acessórios",
    image: "/src/assets/images/service_sound_1792993009584.jpg",
    caption: "Instalação de central touchscreen com espelhamento sem fio integrada ao painel."
  },
  {
    id: "gal-5",
    title: "Bancada de Teste de Alternador",
    category: "Alternadores",
    image: "/src/assets/images/service_alternator_1792993020688.jpg",
    caption: "Recondicionamento de alternadores e motores de partida testados com carga máxima."
  },
  {
    id: "gal-6",
    title: "Alinhamento Óptico & Lâmpadas LED",
    category: "Iluminação",
    image: "/src/assets/images/service_headlights_1792993031590.jpg",
    caption: "Calibração e foco de faróis dianteiros para máxima segurança e conformidade."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Marcelo S. Prado",
    car: "Toyota Corolla 2021",
    rating: 5,
    date: "há 2 semanas",
    comment: "Excelente atendimento! Meu carro apagou no caminho do trabalho e me indicaram a Nissey. Descobriram rápido que era o alternador, me explicaram tudo com honestidade e o preço foi super justo. Recomendo de olhos fechados!",
    verified: true,
    avatarText: "MP"
  },
  {
    id: "t-2",
    name: "Fernanda Takahashi",
    car: "Jeep Renegade 2020",
    rating: 5,
    date: "há 1 mês",
    comment: "A bateria do meu carro descarregou em casa. Liguei pelo WhatsApp, me deram todas as opções de bateria Moura e Heliar com muita transparência. Fizeram o teste antes de trocar para comprovar que precisava mesmo. Pessoal muito honesto e prestativo.",
    verified: true,
    avatarText: "FT"
  },
  {
    id: "t-3",
    name: "Carlos Eduardo Nogueira",
    car: "Honda Civic G10",
    rating: 5,
    date: "há 3 semanas",
    comment: "Estava com uma luz da injeção que outras oficinas não conseguiam resolver. O técnico da Nissey passou o scanner de ponta e identificou na hora o sensor com defeito. Problema resolvido no mesmo dia. Nota 10!",
    verified: true,
    avatarText: "CN"
  },
  {
    id: "t-4",
    name: "Rogério Mendes",
    car: "VW Golf TSI",
    rating: 4.8,
    date: "há 2 meses",
    comment: "Instalei uma central multimídia moderna e kit duas vias. Acabamento impecável, nenhum fio exposto ou cortado, mantiveram todos os controles no volante. Oficina limpa e organizada no Jardim São Pedro.",
    verified: true,
    avatarText: "RM"
  }
];

export function buildWhatsAppLink(message?: string): string {
  const defaultMsg = "Olá, Nissey Auto Elétrico! Gostaria de pedir um orçamento para o meu veículo.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`;
}

export function buildServiceWhatsAppLink(serviceTitle: string): string {
  const msg = `Olá, Nissey Auto Elétrico! Vi o serviço de *${serviceTitle}* no site e gostaria de solicitar um orçamento e saber a disponibilidade.`;
  return buildWhatsAppLink(msg);
}
