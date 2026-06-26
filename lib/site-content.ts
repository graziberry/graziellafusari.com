import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Brain,
  CheckCircle2,
  ClipboardList,
  Flower2,
  HeartHandshake,
  Home,
  Leaf,
  Map,
  MessageCircle,
  MoveRight,
  Palette,
  Recycle,
  Sparkles,
  SunMedium,
  Wind,
} from "lucide-react";
import { serviceRoutes } from "@/lib/seo";
import { whatsappHref } from "@/lib/whatsapp";

export const contactEmail = "contato@graziellafusari.com";

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/processo", label: "Método" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const serviceNavLinks = [
  {
    href: serviceRoutes.architecture,
    label: "Arquitetura Terapêutica",
    microcopy: "Ambientes que cuidam",
  },
  {
    href: serviceRoutes.perfumery,
    label: "Perfumaria Terapêutica",
    microcopy: "Aromas e rituais sensoriais",
  },
  {
    href: serviceRoutes.therapy,
    label: "Atendimentos Terapêuticos Individuais",
    microcopy: "Cuidado energético e pessoal",
  },
];

export const serviceOverviewCards = [
  {
    title: "Arquitetura Terapêutica",
    summary: "O eixo principal para transformar ambientes em espaços de acolhimento, coerência e presença.",
    description:
      "Um olhar profundo para a casa como espaço físico, emocional, energético e sensorial. A consultoria observa função, fluxo, organização, luz, memórias, atmosfera e relação emocional para criar direcionamentos práticos.",
    cta: "Conhecer Arquitetura Terapêutica",
    href: serviceRoutes.architecture,
    featured: true,
    icon: Home,
  },
  {
    title: "Perfumaria Terapêutica",
    summary: "Aromas naturais e composições olfativas conectadas à pessoa, à casa e à intenção do espaço.",
    description:
      "A criação olfativa entra como aprofundamento sensorial do cuidado. Óleos essenciais, tinturas botânicas e matérias-primas naturais ajudam a criar atmosfera, memória e presença.",
    cta: "Conhecer Perfumaria Terapêutica",
    href: serviceRoutes.perfumery,
    featured: false,
    icon: Flower2,
  },
  {
    title: "Atendimentos Terapêuticos Individuais",
    summary: "Recursos integrativos complementares para processos pessoais de escuta e reorganização energética.",
    description:
      "Sessões voltadas à pessoa quando o processo pede um olhar além do ambiente. Não substituem acompanhamento médico ou psicológico; são um espaço complementar de percepção, clareza e cuidado.",
    cta: "Conhecer Atendimentos",
    href: serviceRoutes.therapy,
    featured: false,
    icon: HeartHandshake,
  },
];

export const careSignals = [
  "o ambiente parece pesado, parado ou sem vida",
  "você não descansa bem em casa",
  "a decoração não combina mais com quem você é",
  "há excesso de objetos, memórias ou desordem",
  "os espaços não fluem na rotina",
  "você sente vontade de mudar, mas não sabe por onde começar",
  "sua casa não acompanha a fase que você está vivendo",
];

export const methodLayers: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Armchair,
    title: "Arquitetura e funcionalidade",
    text: "Fluxos, layout, uso dos ambientes, ergonomia, luz, circulação, organização e soluções práticas.",
  },
  {
    icon: Sparkles,
    title: "Energia do ambiente",
    text: "Feng Shui tradicional, geobiologia, radiestesia e harmonização energética como recursos de leitura sutil do espaço.",
  },
  {
    icon: Leaf,
    title: "Natureza e sustentabilidade",
    text: "Biofilia, materiais naturais, plantas, ciclos vivos e consciência ambiental como parte da forma de habitar.",
  },
  {
    icon: Brain,
    title: "Corpo, emoção e percepção",
    text: "Neuroarquitetura e psicologia da arquitetura para observar como os espaços afetam descanso, foco, humor, rotina e presença.",
  },
  {
    icon: SunMedium,
    title: "Antroposofia",
    text: "Uma visão ampliada do ser humano, das cores, dos ritmos, da natureza e dos espaços que acolhem a vida.",
  },
  {
    icon: Flower2,
    title: "Aroma e atmosfera",
    text: "Perfumaria natural, óleos essenciais e tinturas botânicas para criar uma dimensão olfativa coerente com a casa e com a pessoa.",
  },
];

export const consultingDeliverables = [
  "clareza sobre o que sua casa está pedindo agora",
  "orientações possíveis para trazer mais leveza e fluidez",
  "direção estética e sensorial coerente com o seu momento",
  "prioridades para transformar o ambiente sem excesso",
  "caminhos para aprofundar o processo quando fizer sentido",
];

export const processDeliverables = [
  "escuta do momento da casa e da pessoa",
  "percepção do que pesa, trava ou não acompanha mais a rotina",
  "direção de transformação com prioridades claras",
  "orientações aplicáveis ao nível de mudança escolhido",
  "encaminhamento para o serviço mais adequado quando necessário",
];

export const aboutFoundations = [
  "Arquitetura e interiores",
  "Pós-graduação em Gestão Ambiental",
  "Perfumaria natural",
  "Feng Shui tradicional",
  "Geobiologia e radiestesia",
  "Biofilia e sustentabilidade",
  "Neuroarquitetura e psicologia da arquitetura",
  "Antroposofia",
  "Harmonização energética dos ambientes",
  "Atendimentos energéticos complementares",
];

export const architectureFoundations = [
  "Arquitetura, função e layout",
  "Feng Shui tradicional",
  "Geobiologia e radiestesia",
  "Biofilia e sustentabilidade",
  "Neuroarquitetura e psicologia da arquitetura",
  "Antroposofia",
  "Perfumaria natural",
  "Harmonização energética",
];

export const serviceDecisionCards = [
  {
    title: "Quero mudar minha casa",
    destination: "Arquitetura Terapêutica",
    text: "Para reorganizar, harmonizar e transformar ambientes, com ou sem reforma.",
    href: serviceRoutes.architecture,
  },
  {
    title: "Quero transformar visual, energia e sensação do ambiente",
    destination: "Consultoria Completa ou Projeto Integral",
    text: "Para quem deseja aprofundar layout, decoração, materiais, atmosfera e funcionalidade.",
    href: serviceRoutes.architecture,
  },
  {
    title: "Quero um aroma personalizado ou uma atmosfera olfativa",
    destination: "Perfumaria Terapêutica",
    text: "Para criar uma composição natural conectada à pessoa, à casa e à intenção do espaço.",
    href: serviceRoutes.perfumery,
  },
  {
    title: "Sinto que a questão está mais em mim do que na casa",
    destination: "Atendimentos Terapêuticos Individuais",
    text: "Para processos pessoais de escuta, clareza e reorganização interna.",
    href: serviceRoutes.therapy,
  },
  {
    title: "Não sei por onde começar",
    destination: "Conversa inicial pelo WhatsApp",
    text: "A conversa inicial ajuda a entender o caminho mais adequado para o seu momento.",
    href: null,
  },
];

export const serviceComparisonCards = [
  {
    title: "Consultoria Essencial",
    forWhom: "Para quem quer melhorar a casa sem reforma.",
    focus: "leveza, organização, harmonia e ajustes possíveis.",
  },
  {
    title: "Consultoria Completa",
    forWhom: "Para quem quer transformar estética, energia e sensação dos ambientes.",
    focus: "ambiente mais bonito, funcional, acolhedor e coerente com você.",
  },
  {
    title: "Projeto Integral",
    forWhom: "Para quem vai reformar, construir ou começar um espaço desde o início.",
    focus: "transformação profunda com olhar arquitetônico, terapêutico e sensorial.",
  },
  {
    title: "Perfumaria Terapêutica",
    forWhom: "Para quem quer criar uma atmosfera olfativa natural e personalizada.",
    focus: "aroma, presença, memória e intenção no espaço.",
  },
  {
    title: "Atendimento Individual",
    forWhom: "Para quem sente que o cuidado precisa começar pela pessoa.",
    focus: "clareza, reorganização interna e cuidado energético complementar.",
  },
];

export const faqItems = [
  {
    question: "Arquitetura Terapêutica é a mesma coisa que decoração?",
    answer:
      "Não. A decoração pode fazer parte do processo, mas a Arquitetura Terapêutica vai além da estética. Ela observa função, fluxo, organização, luz, energia, memória, sensação e relação emocional com a casa.",
  },
  {
    question: "Preciso reformar minha casa?",
    answer:
      "Não necessariamente. A Consultoria Essencial parte do que já existe e propõe ajustes possíveis com móveis, objetos, organização, cores, plantas, aromas e fluxos. Quando há necessidade de mudanças maiores, o Projeto Integral pode ser indicado.",
  },
  {
    question: "Você atende online?",
    answer:
      "Sim, alguns processos podem acontecer online ou em formato híbrido. A modalidade ideal depende do tipo de ambiente, da profundidade da transformação e da necessidade da pessoa.",
  },
  {
    question: "Você usa Feng Shui?",
    answer:
      "Sim. O Feng Shui tradicional pode fazer parte da leitura do ambiente, junto com arquitetura, geobiologia, radiestesia, biofilia, neuroarquitetura, psicologia da arquitetura, antroposofia e perfumaria natural.",
  },
  {
    question: "O que é leitura energética do ambiente?",
    answer:
      "É uma escuta sensível do espaço, observando sensação, peso, fluidez, excessos, bloqueios, memórias, usos e pontos que pedem reorganização ou harmonização.",
  },
  {
    question: "A consultoria inclui aroma?",
    answer:
      "Pode incluir orientação olfativa ou sugestão de aromas naturais quando isso fizer sentido para a casa e para o momento da pessoa.",
  },
  {
    question: "O atendimento substitui terapia médica ou psicológica?",
    answer:
      "Não. O trabalho é integrativo e complementar. Ele não substitui acompanhamento médico, psicológico ou qualquer tratamento profissional de saúde.",
  },
  {
    question: "O que recebo depois da consultoria?",
    answer:
      "Você recebe uma direção clara para transformar a casa de acordo com o seu momento, com prioridades e orientações possíveis para começar sem se perder no excesso.",
  },
];

export const architectureServices: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  paragraphs?: string[];
  items: string[];
  ideal: string;
  cta: string;
  featured?: boolean;
}> = [
  {
    icon: Leaf,
    title: "Consultoria Essencial",
    description:
      "Para quem sente que a casa precisa de mais leveza, ordem e harmonia, mas não quer entrar em obra nem fazer grandes mudanças.",
    paragraphs: [
      "Para quem sente que a casa precisa de mais leveza, ordem e harmonia, mas não quer entrar em obra nem fazer grandes mudanças.",
      "A Consultoria Essencial traz um olhar terapêutico para o que já existe, ajudando a perceber o que pode ser ajustado para que o ambiente fique mais acolhedor, fluido e alinhado com o momento de vida da pessoa.",
      "É uma forma de começar a transformação da casa com clareza, sensibilidade e mudanças possíveis.",
    ],
    items: [],
    ideal: "",
    cta: "Quero começar pela Consultoria Essencial",
    featured: true,
  },
  {
    icon: Palette,
    title: "Consultoria Completa",
    description:
      "A Consultoria Completa engloba tudo o que existe na Consultoria Essencial, mas acrescenta a parte de design de interiores.",
    paragraphs: [
      "A Consultoria Completa engloba tudo o que existe na Consultoria Essencial, mas acrescenta a parte de design de interiores.",
      "Ela é indicada para quem quer transformar o ambiente com mais profundidade estética e funcional, mas sem reforma.",
    ],
    items: [],
    ideal: "",
    cta: "Quero transformar meu ambiente com mais profundidade",
  },
  {
    icon: Home,
    title: "Projeto Integral",
    description:
      "Para quem está em um momento de transformação maior: reforma, mudança de imóvel, construção, criação de um novo ambiente ou reorganização completa da casa.",
    items: [
      "casa pensada com profundidade desde as primeiras decisões",
      "funcionalidade, estética, energia e sensorialidade juntas",
      "transformação maior com olhar arquitetônico e terapêutico",
    ],
    ideal:
      "Ideal para quem quer criar um espaço alinhado ao modo como deseja viver agora e nos próximos anos.",
    cta: "Quero falar sobre um projeto integral",
  },
];

export const homePillars = [
  {
    icon: Home,
    title: "Arquitetura Terapêutica",
    text: "Um olhar para a casa como espaço vivo, unindo função, beleza, energia e sensorialidade para tornar os ambientes mais conscientes, acolhedores e coerentes com quem vive ali.",
    href: serviceRoutes.architecture,
    cta: "Conhecer a Consultoria Essencial",
    featured: true,
  },
  {
    icon: Flower2,
    title: "Perfumaria Terapêutica",
    text: "A dimensão olfativa do cuidado. Aromas naturais, óleos essenciais e tinturas botânicas criam atmosferas que favorecem presença, acolhimento, memória e intenção no espaço.",
    href: serviceRoutes.perfumery,
    cta: "Conhecer criações olfativas",
  },
  {
    icon: HeartHandshake,
    title: "Atendimentos Terapêuticos Individuais",
    text: "Atendimentos complementares para a pessoa, quando o processo pede um olhar para padrões, fases de transição, sobrecargas ou reorganização energética interna.",
    href: serviceRoutes.therapy,
    cta: "Agendar atendimento individual",
  },
];

export const therapyResources = [
  "mesa radiônica",
  "ferramentas de Access Consciousness®",
  "radiestesia",
  "outros recursos integrativos alinhados ao processo",
];

export const perfumeryApplications = [
  "aroma para acolhimento",
  "aroma para clareza e foco",
  "aroma para limpeza e renovação energética",
  "aroma para descanso",
  "aroma para vitalidade",
  "assinatura olfativa para ambientes",
];

export const processSteps = [
  {
    icon: ClipboardList,
    title: "Conversa inicial",
    text: "Entendimento do momento de vida, incômodos, rotina, desejos, necessidades práticas e sensação atual da casa.",
  },
  {
    icon: Map,
    title: "Leitura do ambiente",
    text: "Análise de luz, circulação, usos, organização, fluxos, excessos, vazios, memórias, pontos de acolhimento e leitura energética do espaço.",
  },
  {
    icon: SunMedium,
    title: "Direção estética e sensorial",
    text: "Definição de atmosfera, cores, materiais, objetos, plantas, aromas naturais, prioridades e ajustes possíveis com ou sem reforma.",
  },
  {
    icon: CheckCircle2,
    title: "Plano de ação",
    text: "Entrega organizada com recomendações práticas, prioridades, caminhos de implantação e orientações para que a mudança aconteça com clareza.",
  },
];

export const contactPaths = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Agendar conversa pelo WhatsApp",
    href: whatsappHref,
  },
  {
    icon: MoveRight,
    title: "Orientação",
    text: "Quero entender qual serviço é ideal para mim",
    href: whatsappHref,
  },
  {
    icon: Wind,
    title: "Atendimento",
    text: "Online e presencial sob consulta",
    href: null,
  },
];

export const moodboard = [
  { label: "Off-white", color: "bg-surface" },
  { label: "Creme", color: "bg-cream" },
  { label: "Areia", color: "bg-sand" },
  { label: "Terracota", color: "bg-terracotta" },
  { label: "Sálvia", color: "bg-sage" },
  { label: "Blush", color: "bg-blush" },
  { label: "Madeira", color: "bg-warm-beige" },
  { label: "Marrom", color: "bg-brown" },
];

export const architectureHighlights = [
  { icon: Armchair, text: "função, fluxo e organização" },
  { icon: Sparkles, text: "beleza com sentido" },
  { icon: Recycle, text: "natureza, energia e atmosfera sensorial" },
];
