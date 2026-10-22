export const whatsappNumber = "5511976217579";

export const whatsappMessages = {
  homepage:
    "Olá, Graziella. Vim pelo site e gostaria de conversar sobre os seus serviços.",
  architecture:
    "Olá, Graziella. Tenho interesse em uma consultoria de arquitetura holística para minha casa.",
  perfumery:
    "Olá, Graziella. Vim pelo site e gostaria de saber mais sobre perfumaria natural.",
  therapy: "Olá, Graziella. Gostaria de saber mais sobre os atendimentos individuais.",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export function getWhatsAppHref(messageKey: WhatsAppMessageKey = "homepage") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessages[messageKey])}`;
}

export const whatsappHref = getWhatsAppHref("homepage");
