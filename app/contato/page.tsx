import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { EmailContactActions } from "@/components/EmailContactActions";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { contactEmail, contactPaths } from "@/lib/site-content";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato pelo WhatsApp ou email para conversar sobre arquitetura terapêutica, perfumaria terapêutica e atendimentos terapêuticos individuais.",
  path: canonicalRoutes.contact,
});

export default function ContatoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Vamos olhar para a sua casa com mais intenção?"
        subtitle="Se você sente que seu espaço precisa de mais equilíbrio, beleza, leveza ou sentido, o primeiro passo pode ser uma conversa."
      />

      <section className="py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
          {contactPaths.map((contact) => (
            <article key={contact.title} className="rounded-card border border-line bg-surface p-7 shadow-soft">
              <contact.icon className="text-terracotta" size={30} />
              <h3 className="mt-5 font-heading text-2xl font-semibold">{contact.title}</h3>
              {contact.href ? (
                <WhatsAppLink
                  messageKey="homepage"
                  tracking={{ page: "contato", service: contact.title, cta_text: contact.text }}
                  aria-label={contact.text}
                  className="mt-3 block text-sm font-semibold leading-6 text-light-brown transition hover:text-terracotta"
                >
                  {contact.text}
                </WhatsAppLink>
              ) : (
                <p className="mt-3 text-sm font-semibold leading-6 text-light-brown">{contact.text}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">Primeira conversa</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight md:text-5xl">
              Conte brevemente o que você está vivendo
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Conte brevemente o que você está vivendo, o que sente em relação à sua casa e qual tipo de
              transformação procura.
            </p>
            <p>
              A partir disso, será possível indicar o caminho mais adequado: Consultoria Essencial, Consultoria
              Completa, Projeto Integral, Atendimentos Terapêuticos Individuais ou Perfumaria Terapêutica.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                messageKey="homepage"
                tracking={{ page: "contato", service: "general", cta_text: "Chamar no WhatsApp" }}
                aria-label="Chamar no WhatsApp"
                className="cta-on-dark inline-flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </WhatsAppLink>
            </div>
            <EmailContactActions email={contactEmail} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
