import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceOverviewCards } from "@/components/ServiceOverviewCards";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { faqItems, serviceComparisonCards, serviceDecisionCards } from "@/lib/site-content";
import { canonicalRoutes, createFaqJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Consultoria Essencial, Consultoria Completa, Projeto Integral, Perfumaria Terapêutica e Atendimentos Individuais para casas mais conscientes, sensoriais e alinhadas.",
  path: canonicalRoutes.services,
});

export default function ServicosPage() {
  return (
    <PageShell>
      <JsonLd data={createFaqJsonLd(faqItems)} />
      <PageHero
        eyebrow="Serviços"
        title="Três caminhos de cuidado para a casa e para a pessoa"
        subtitle="A Arquitetura Terapêutica integra espaço, presença e sensorialidade para transformar a forma como você habita, sente e se relaciona com o ambiente."
      />

      <section className="bg-surface py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-3xl font-semibold leading-tight text-brown md:text-5xl">
            Casa <span className="text-terracotta">→</span> Pessoa <span className="text-terracotta">→</span> Aroma
          </p>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Caminhos de cuidado"
            title="Escolha o caminho que mais conversa com o seu momento"
            subtitle="Arquitetura Terapêutica é o eixo principal da marca. Perfumaria Terapêutica e Atendimentos Terapêuticos Individuais ampliam o cuidado quando a experiência pede mais sensorialidade, escuta e presença."
          />
          <div className="mt-12">
            <ServiceOverviewCards />
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Por onde começar" title="Qual caminho faz sentido para você?" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {serviceDecisionCards.map((card) => (
              <article key={card.title} className="rounded-card border border-line bg-cream p-6">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-brown">{card.title}</h3>
                <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-terracotta">
                  {card.destination}
                </p>
                <p className="mt-4 text-sm leading-7 text-light-brown">{card.text}</p>
                {card.href ? (
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brown"
                  >
                    Ver caminho
                    <ArrowRight size={15} />
                  </Link>
                ) : (
                  <WhatsAppLink
                    messageKey="homepage"
                    tracking={{ page: "servicos", service: "general", cta_text: "Conversar pelo WhatsApp" }}
                    aria-label="Conversar pelo WhatsApp"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brown"
                  >
                    Conversar
                    <MessageCircle size={15} />
                  </WhatsAppLink>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Comparativo"
            title="Uma visão simples dos caminhos possíveis"
            subtitle="Os serviços não competem entre si. Eles organizam níveis diferentes de profundidade, do ambiente à experiência sensorial e ao cuidado individual."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceComparisonCards.map((card) => (
              <article key={card.title} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <h3 className="font-heading text-2xl font-semibold text-brown">{card.title}</h3>
                <dl className="mt-6 space-y-5 text-sm leading-7">
                  <div>
                    <dt className="font-bold uppercase tracking-[0.12em] text-terracotta">Para quem é</dt>
                    <dd className="mt-1 text-light-brown">{card.forWhom}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-[0.12em] text-terracotta">Inclui</dt>
                    <dd className="mt-1 text-light-brown">{card.includes}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-[0.12em] text-terracotta">Resultado</dt>
                    <dd className="mt-1 text-light-brown">{card.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-card border border-line bg-cream p-6">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-brown">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-light-brown">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Quer entender por onde começar?"
        text="A primeira conversa ajuda a perceber se o melhor caminho é transformar o ambiente, criar uma atmosfera sensorial ou iniciar um cuidado terapêutico individual."
        cta="Quero entender qual serviço é ideal para mim"
        page="servicos"
        service="general"
        whatsappMessageKey="homepage"
      />
    </PageShell>
  );
}
