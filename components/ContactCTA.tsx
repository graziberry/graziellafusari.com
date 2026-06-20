import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import type { AnalyticsEventName } from "@/lib/analytics";
import type { WhatsAppMessageKey } from "@/lib/whatsapp";

type ContactCTAProps = {
  title?: string;
  text?: string;
  cta?: string;
  page?: string;
  service?: string;
  whatsappMessageKey?: WhatsAppMessageKey;
  analyticsEvents?: AnalyticsEventName[];
};

export function ContactCTA({
  title = "Vamos olhar para a sua casa com mais intenção?",
  text = "Você pode começar de forma simples, com uma Consultoria Essencial, ou aprofundar o processo com uma transformação mais completa do ambiente.",
  cta = "Agendar conversa pelo WhatsApp",
  page,
  service,
  whatsappMessageKey = "homepage",
  analyticsEvents = ["whatsapp_click"],
}: ContactCTAProps) {
  return (
    <section className="bg-brown py-18 text-surface md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Contato</p>
        <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        {text ? <p className="mt-6 max-w-2xl text-sm leading-7 text-surface/75 md:text-base">{text}</p> : null}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <WhatsAppLink
            messageKey={whatsappMessageKey}
            eventNames={analyticsEvents}
            tracking={{ page_path: page, service_name: service, cta_label: cta }}
            aria-label={cta}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-soft-terracotta"
          >
            <MessageCircle size={16} />
            {cta}
          </WhatsAppLink>
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-surface/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-surface/10"
          >
            Conhecer os serviços
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
