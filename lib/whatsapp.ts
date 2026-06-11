export const whatsappNumber = "5511976217578";

export const whatsappMessages = {
  homepage:
    "Olá, Graziella. Vim pelo site e gostaria de agendar uma conversa sobre arquitetura terapêutica.",
  architecture:
    "Olá, Graziella. Tenho interesse em uma consultoria de arquitetura terapêutica para minha casa.",
  perfumery:
    "Olá, Graziella. Vim pelo site e gostaria de saber mais sobre perfumaria terapêutica.",
  therapy: "Olá, Graziella. Gostaria de saber mais sobre os atendimentos individuais.",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export function getWhatsAppHref(messageKey: WhatsAppMessageKey = "homepage") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessages[messageKey])}`;
}

export const whatsappHref = getWhatsAppHref("homepage");
