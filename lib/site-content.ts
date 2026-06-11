import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Brush,
  CheckCircle2,
  ClipboardList,
  Flower2,
  HeartHandshake,
  Home,
  Leaf,
  Map,
  MessageCircle,
  MoveRight,
  Sparkles,
  SunMedium,
  Wind,
} from "lucide-react";
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
    href: "/servicos/arquitetura-terapeutica",
    label: "Arquitetura Terapêutica",
    microcopy: "Ambientes que cuidam",
  },
  {
    href: "/servicos/perfumaria-terapeutica",
    label: "Perfumaria Terapêutica",
    microcopy: "Aromas e rituais sensoriais",
  },
  {
    href: "/servicos/atendimentos-terapeuticos-individuais",
    label: "Atendimentos Terapêuticos Individuais",
    microcopy: "Cuidado energético e pessoal",
  },
];

export const serviceOverviewCards = [
  {
    title: "Arquitetura Terapêutica",
    summary: "Para transformar ambientes em espaços de acolhimento, equilíbrio e presença.",
    description:
      "Um olhar profundo para a casa como extensão da vida. A consultoria identifica bloqueios, excessos, necessidades práticas e sensoriais do ambiente, criando direcionamentos para que o espaço acolha melhor a rotina, o corpo e a energia de quem vive nele.",
    cta: "Conhecer Arquitetura Terapêutica",
    href: "/servicos/arquitetura-terapeutica",
    featured: true,
    icon: Home,
  },
  {
    title: "Perfumaria Terapêutica",
    summary: "Para criar aromas, rituais e experiências sensoriais conectadas ao espaço.",
    description:
      "A criação de aromas terapêuticos amplia a experiência do cuidado no espaço. Por meio de fragrâncias naturais, rituais olfativos e composições sensoriais, o ambiente ganha presença, memória e identidade.",
    cta: "Conhecer Perfumaria Terapêutica",
    href: "/servicos/perfumaria-terapeutica",
    featured: false,
    icon: Flower2,
  },
  {
    title: "Atendimentos Terapêuticos Individuais",
    summary: "Para processos pessoais de cuidado energético, escuta e reorganização interna.",
    description:
      "Sessões voltadas ao cuidado energético, emocional e pessoal, apoiando processos de reorganização interna, clareza e reconexão. Um espaço de escuta sensível para quem busca cuidado além do ambiente físico.",
    cta: "Conhecer Atendimentos",
    href: "/servicos/atendimentos-terapeuticos-individuais",
    featured: false,
    icon: HeartHandshake,
  },
];

export const architectureServices: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  ideal: string;
  cta: string;
  featured?: boolean;
}> = [
  {
    icon: Leaf,
    title: "Consultoria Essencial",
    description:
      "A porta de entrada para quem deseja transformar a casa sem necessariamente reformar ou comprar novos móveis. Ela parte do que já existe no ambiente e propõe ajustes possíveis, conscientes e transformadores.",
    items: [
      "diagnóstico do espaço",
      "leitura sensível e energética do ambiente",
      "identificação de bloqueios, excessos e desequilíbrios",
      "orientação para reorganização",
      "harmonização do espaço",
      "melhoria de fluxos, função e bem-estar",
      "sugestões práticas usando recursos já presentes na casa",
    ],
    ideal:
      "Ideal para quem sente que a casa precisa respirar melhor, ficar mais leve e se alinhar ao momento atual da vida.",
    cta: "Quero começar pela Consultoria Essencial",
    featured: true,
  },
  {
    icon: Brush,
    title: "Consultoria Completa",
    description:
      "Inclui tudo o que está na Consultoria Essencial, com um aprofundamento em interiores. Além da leitura e harmonização do espaço, entram direcionamentos de layout, mobiliário, objetos, paleta, materiais e composição estética. É indicada para quem deseja uma transformação mais visível, funcional e sensorial da casa.",
    items: [
      "diagnóstico e harmonização do ambiente",
      "proposta de layout",
      "orientação de mobiliário",
      "paleta de cores e materiais",
      "sugestões de decoração",
      "organização estética e funcional",
      "construção de uma atmosfera mais alinhada à pessoa",
    ],
    ideal: "Ideal para quem quer unir energia, beleza, função e identidade no mesmo processo.",
    cta: "Quero uma transformação mais completa",
  },
  {
    icon: Home,
    title: "Projeto Integral",
    description:
      "Indicado quando a transformação envolve reforma, mudanças estruturais ou um projeto mais completo para o ambiente. Ele une a base da Arquitetura Terapêutica ao desenvolvimento de soluções de projeto, criando uma transformação profunda e coerente entre espaço, função, estética e bem-estar.",
    items: [
      "diagnóstico do espaço",
      "leitura e harmonização",
      "projeto de reforma",
      "soluções integradas de layout e interiores",
      "orientação estética, funcional e sensorial",
      "acompanhamento conceitual da transformação",
    ],
    ideal:
      "Ideal para quem deseja transformar a casa em profundidade e criar um espaço mais alinhado à vida que deseja viver.",
    cta: "Quero falar sobre um projeto",
  },
];

export const homePillars = [
  {
    icon: Home,
    title: "Arquitetura Terapêutica",
    text: "O principal caminho de transformação da marca. Inclui diagnóstico do espaço, leitura sensível do ambiente, harmonização, organização de fluxos, orientação estética e soluções para tornar a casa mais equilibrada e funcional.",
    href: "/servicos/arquitetura-terapeutica",
    cta: "Conhecer a Consultoria Essencial",
    featured: true,
  },
  {
    icon: HeartHandshake,
    title: "Atendimentos Terapêuticos Individuais",
    text: "Atendimentos voltados para a pessoa, quando o processo pede um olhar mais profundo para padrões, bloqueios, fases de transição ou questões individuais que impactam a relação com a vida e com o ambiente.",
    href: "/servicos/atendimentos-terapeuticos-individuais",
    cta: "Agendar atendimento individual",
  },
  {
    icon: Flower2,
    title: "Perfumaria Terapêutica",
    text: "A dimensão sensorial do cuidado. Aromas, perfumes e composições autorais que ajudam a sustentar a experiência de bem-estar, presença e harmonia no espaço.",
    href: "/servicos/perfumaria-terapeutica",
    cta: "Conhecer criações olfativas",
  },
];

export const therapyResources = [
  "mesa radiônica",
  "ferramentas de Access Consciousness®",
  "radiestesia",
  "outros recursos integrativos alinhados ao processo",
];

export const perfumeryApplications = [
  "aromas para ambientes",
  "perfumes terapêuticos",
  "composições autorais",
  "assinatura olfativa para espaços",
  "recursos olfativos complementares aos atendimentos e projetos",
];

export const processSteps = [
  {
    icon: ClipboardList,
    title: "Conversa inicial",
    text: "Entendimento do momento, dos incômodos, da rotina e do desejo para o ambiente.",
  },
  {
    icon: Map,
    title: "Leitura do ambiente",
    text: "Análise de luz, circulação, uso, texturas, excessos, vazios e pontos de acolhimento.",
  },
  {
    icon: SunMedium,
    title: "Direção sensorial",
    text: "Definição de atmosfera, cores, materiais, aromas, prioridades e ajustes possíveis.",
  },
  {
    icon: CheckCircle2,
    title: "Plano de ação",
    text: "Entrega organizada por etapas para que a mudança aconteça com autonomia e leveza.",
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
  { icon: Leaf, text: "atmosfera sensorial e acolhedora" },
];
