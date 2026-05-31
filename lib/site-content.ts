import type { LucideIcon } from "lucide-react";
import {
  Brush,
  CheckCircle2,
  ClipboardList,
  Flower2,
  Home,
  Leaf,
  Map,
  Moon,
  Sparkles,
  SunMedium,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/processo", label: "Processo" },
  { href: "/contato", label: "Contato" },
];

export const services: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
}> = [
  {
    icon: Leaf,
    title: "Consultoria Essencial",
    description:
      "Para transformar o ambiente com clareza, reorganização, direção estética e uma leitura sensorial do que já existe.",
    items: ["Diagnóstico do ambiente", "Paleta sensorial", "Plano de implantação", "Card aromático"],
    featured: true,
  },
  {
    icon: Brush,
    title: "Consultoria Completa",
    description:
      "Para quem precisa de um projeto mais elaborado, com curadoria visual, materiais, mobiliário e composição.",
    items: ["Moodboard completo", "Cores e materiais", "Sugestões de peças", "Direção de compras"],
  },
  {
    icon: Sparkles,
    title: "Limpeza Energética",
    description:
      "Para renovar a atmosfera da casa com um ritual simples, bonito e conectado à intenção do novo momento.",
    items: ["Preparo do espaço", "Ritual sugerido", "Aromas indicados", "Forma de uso"],
  },
];

export const pillars = [
  {
    icon: Home,
    title: "Casa revela",
    text: "A casa mostra fluxos, excessos, memórias e necessidades que muitas vezes passam despercebidas.",
  },
  {
    icon: Flower2,
    title: "Pessoa aprofunda",
    text: "O projeto nasce da rotina, do corpo, da emoção e da intenção de quem habita o espaço.",
  },
  {
    icon: Leaf,
    title: "Aroma ancora",
    text: "O aroma transforma a intenção em sensação cotidiana e cria um ritual de presença.",
  },
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

export const essentialDeliverables = [
  "Resumo do ambiente e intenção principal",
  "Diagnóstico sensorial com pontos de atenção",
  "Paleta de cores, texturas, luz e aromas",
  "Recomendações do que manter, retirar, reorganizar e incluir",
  "Ritual de limpeza energética quando fizer sentido",
  "Plano de implantação por prioridade",
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

export const rituals = [
  {
    icon: Moon,
    title: "Preparar",
    text: "Abrir janelas, retirar excessos visuais e deixar a casa receber luz e ar.",
  },
  {
    icon: Sparkles,
    title: "Limpar",
    text: "Escolher ervas, spray, difusor ou outra ferramenta que faça sentido para o espaço.",
  },
  {
    icon: Flower2,
    title: "Ancorar",
    text: "Finalizar com um aroma que represente a energia que você quer manter.",
  },
];
