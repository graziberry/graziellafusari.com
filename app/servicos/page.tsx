import type { Metadata } from "next";
import { Flower2, HeartHandshake, Home, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { faqItems, serviceComparisonCards } from "@/lib/site-content";
import { canonicalRoutes, createFaqJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Consultoria Essencial, Consultoria Completa, Projeto Integral, Perfumaria Terapêutica e Atendimentos Individuais para transformar a relação com a casa.",
  path: canonicalRoutes.services,
});

const architecturePaths = [
  {
    title: "Consultoria Essencial",
    subtitle: "Para quem quer transformar a casa sem entrar em obra",
    text:
      "Um olhar direcionado para o que já existe, com orientações práticas para reorganizar a casa, melhorar a sensação dos ambientes e trazer mais harmonia para o dia a dia.",
    cta: "Quero começar pela Consultoria Essencial",
  },
  {
    title: "Consultoria Completa",
    subtitle: "Para uma transformação mais profunda na estética, energia e uso dos ambientes",
    text:
      "Indicada quando a casa pede mais do que pequenos ajustes. O olhar se aprofunda na atmosfera do espaço, na beleza, na funcionalidade e na identidade de quem vive ali.",
    cta: "Quero transformar meu ambiente com mais profundidade",
  },
  {
    title: "Projeto Integral",
    subtitle: "Para quem vai reformar, construir ou criar um espaço desde o início",
    text:
      "Para reformas, mudanças de imóvel, construções, novos ambientes ou reorganizações completas, com a arquitetura terapêutica presente desde as primeiras decisões.",
    cta: "Quero falar sobre um projeto integral",
  },
];

const complementaryServices = [
  {
    icon: Flower2,
    title: "Perfumaria Terapêutica",
    subtitle: "Para criar presença, memória e atmosfera através dos aromas naturais",
    text:
      "Aromas naturais podem apoiar sensações de acolhimento, limpeza, vitalidade, repouso, concentração ou renovação. Pode ser um caminho independente ou complementar à Arquitetura Terapêutica.",
    cta: "Quero criar uma atmosfera olfativa",
    messageKey: "perfumery" as const,
    service: "perfumery",
  },
  {
    icon: HeartHandshake,
    title: "Atendimentos Terapêuticos Individuais",
    subtitle: "Para quando o cuidado precisa olhar também para a pessoa",
    text:
      "Um espaço complementar de escuta, clareza e cuidado energético para fases de mudança, cansaço, bloqueios, excesso mental ou necessidade de reorganização interna.",
    cta: "Quero agendar um atendimento individual",
    messageKey: "therapy" as const,
    service: "therapy",
  },
];

export default function ServicosPage() {
  return (
    <PageShell>
      <JsonLd data={createFaqJsonLd(faqItems)} />
      <PageHero
        eyebrow="Serviços"
        title="Três caminhos para transformar a relação com a casa"
        subtitle="A Arquitetura Terapêutica é o eixo principal do meu trabalho. A partir dela, olho para a casa como um espaço vivo: físico, emocional, energético e sensorial."
      />

      <section className="bg-surface py-16 md:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
          <SectionHeading
            eyebrow="Como escolher"
            title="Cada serviço nasce de uma necessidade diferente"
          />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Às vezes, a casa precisa apenas de ajustes possíveis. Em outros momentos, pede uma transformação mais
              profunda, uma reforma, uma nova organização ou até um projeto pensado desde o início.
            </p>
            <p>
              A primeira conversa ajuda a entender o momento da sua casa, o que você sente nos ambientes e qual caminho
              faz mais sentido agora.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <article className="rounded-card border border-terracotta bg-surface p-7 shadow-soft md:p-9">
            <Home className="text-terracotta" size={34} />
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">Eixo principal</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brown md:text-5xl">
                  Arquitetura Terapêutica
                </h2>
                <p className="mt-5 font-heading text-2xl leading-tight text-brown">
                  Para casas que pedem mais equilíbrio, beleza, presença e sentido
                </p>
              </div>
              <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
                <p>
                  A Arquitetura Terapêutica é indicada para quem sente que a casa já não acompanha mais sua fase de vida,
                  seja por excesso, desconforto, sensação de peso, falta de funcionalidade ou desejo de transformar o
                  ambiente com mais intenção.
                </p>
                <p>
                  O trabalho une arquitetura, sensibilidade, energia dos espaços, natureza, aromas e escuta da pessoa que
                  habita aquele lugar.
                </p>
                <p>Você pode começar de forma mais simples ou aprofundar o processo, dependendo do momento da sua casa.</p>
                <WhatsAppLink
                  messageKey="architecture"
                  eventNames={["whatsapp_click", "service_cta_click"]}
                  tracking={{
                    page_path: "/servicos",
                    service_name: "architecture",
                    cta_label: "Quero entender qual caminho é melhor para mim",
                  }}
                  aria-label="Quero entender qual caminho é melhor para mim"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
                >
                  <MessageCircle size={16} />
                  Quero entender qual caminho é melhor para mim
                </WhatsAppLink>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {architecturePaths.map((service) => (
              <article key={service.title} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-brown">{service.title}</h3>
                <p className="mt-3 text-sm font-bold uppercase leading-6 tracking-[0.14em] text-terracotta">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-light-brown">{service.text}</p>
                <WhatsAppLink
                  messageKey="architecture"
                  eventNames={["whatsapp_click", "service_cta_click"]}
                  tracking={{ page_path: "/servicos", service_name: service.title, cta_label: service.cta }}
                  aria-label={service.cta}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-brown transition hover:text-terracotta"
                >
                  {service.cta}
                  <MessageCircle size={15} />
                </WhatsAppLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Caminhos complementares"
            title="Quando a transformação passa pelo aroma ou pela pessoa"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {complementaryServices.map((service) => (
              <article key={service.title} className="rounded-card border border-line bg-cream p-7 shadow-soft">
                <service.icon className="text-sage" size={31} />
                <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-brown md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase leading-6 tracking-[0.14em] text-terracotta">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-light-brown">{service.text}</p>
                {service.service === "therapy" ? (
                  <p className="mt-4 text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-light-brown">
                    Não substitui acompanhamento médico ou psicológico.
                  </p>
                ) : null}
                <WhatsAppLink
                  messageKey={service.messageKey}
                  eventNames={["whatsapp_click", "service_cta_click"]}
                  tracking={{ page_path: "/servicos", service_name: service.service, cta_label: service.cta }}
                  aria-label={service.cta}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-brown transition hover:text-terracotta"
                >
                  {service.cta}
                  <MessageCircle size={15} />
                </WhatsAppLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Comparativo"
            title="Qual serviço combina com o seu momento?"
            subtitle="Uma visão curta para orientar a escolha, sem fechar a conversa antes de entender sua casa e seu momento."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceComparisonCards.map((card) => (
              <article key={card.title} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <h3 className="font-heading text-2xl font-semibold text-brown">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-light-brown">{card.forWhom}</p>
                <p className="mt-4 border-t border-line pt-4 text-sm font-semibold leading-7 text-brown">
                  <span className="text-terracotta">Foco: </span>
                  {card.focus}
                </p>
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
        title="Não sabe por onde começar?"
        text="Você não precisa saber exatamente qual serviço escolher. Na conversa inicial, eu escuto o que você está vivendo, o que sente na sua casa e qual tipo de transformação procura."
        cta="Quero entender qual serviço é ideal para mim"
        page="/servicos"
        service="general"
        whatsappMessageKey="homepage"
        analyticsEvents={["whatsapp_click", "service_cta_click"]}
      />
    </PageShell>
  );
}
