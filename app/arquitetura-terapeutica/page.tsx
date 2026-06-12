import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { architectureFoundations, architectureServices, consultingDeliverables, processSteps } from "@/lib/site-content";
import { canonicalRoutes, createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from "@/lib/seo";

const pageTitle = "Arquitetura Terapêutica";
const pageDescription =
  "Consultoria de arquitetura terapêutica para transformar ambientes com função, beleza, energia, natureza, aroma e bem-estar.";

export const metadata: Metadata = createPageMetadata({
  title: "Arquitetura Terapêutica",
  description: pageDescription,
  path: canonicalRoutes.architecture,
});

export default function ArquiteturaTerapeuticaPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createServiceJsonLd({
            name: pageTitle,
            description: pageDescription,
            path: canonicalRoutes.architecture,
          }),
          createBreadcrumbJsonLd([
            { name: "Início", path: canonicalRoutes.home },
            { name: "Arquitetura Terapêutica", path: canonicalRoutes.architecture },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Arquitetura Terapêutica"
        title="Sua casa pode sustentar melhor sua vida"
        subtitle="A Arquitetura Terapêutica transforma ambientes considerando função, beleza, energia, fluxo e bem-estar. Mais do que decorar, o trabalho busca reorganizar a relação entre a casa e quem vive nela."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Introdução"
            title="Transformar um ambiente exige compreender o que ele sustenta"
          />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              A casa guarda histórias, hábitos, excessos, bloqueios e possibilidades.
            </p>
            <p>
              Transformar um ambiente exige mais do que escolher objetos bonitos. É preciso compreender como aquele
              espaço funciona, o que ele comunica, onde ele pesa, onde ele bloqueia e como pode passar a apoiar
              melhor a rotina, o descanso e a vitalidade da pessoa.
            </p>
            <p>
              A Arquitetura Terapêutica une olhar técnico, sensibilidade estética e leitura energética para criar
              ambientes mais coerentes com a vida de seus moradores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O que sustenta a leitura"
            title="As bases da consultoria"
            subtitle="O olhar integra técnica, sensibilidade e recursos complementares para compreender a casa como espaço físico, energético e sensorial."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {architectureFoundations.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Serviços"
            title="Escolha o nível de transformação para o seu momento"
            subtitle="Da Consultoria Essencial ao Projeto Integral, cada caminho organiza prioridades e cria uma atmosfera coerente com quem habita o espaço."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {architectureServices.map((service) => (
              <article
                key={service.title}
                className={`rounded-card border p-7 shadow-soft ${
                  service.featured ? "border-terracotta bg-surface lg:scale-[1.02]" : "border-line bg-surface/85"
                }`}
              >
                <service.icon className="text-sage" size={31} />
                <h2 className="mt-5 font-heading text-2xl font-semibold text-brown">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-light-brown">{service.description}</p>
                <ul className="mt-7 space-y-3 text-sm font-medium text-brown">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 shrink-0 text-terracotta" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-line pt-5 text-sm font-semibold leading-7 text-light-brown">
                  {service.ideal}
                </p>
                <WhatsAppLink
                  messageKey="architecture"
                  tracking={{
                    page: "arquitetura-terapeutica",
                    service: service.title,
                    cta_text: service.cta,
                  }}
                  aria-label={service.cta}
                  className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-center text-[0.68rem] font-bold uppercase leading-5 tracking-[0.12em] text-surface transition hover:bg-terracotta"
                >
                  <MessageCircle size={15} />
                  {service.cta}
                </WhatsAppLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O que você recebe"
            title="Um plano claro para transformar a casa com prioridade e direção"
            subtitle="A entrega organiza a leitura do ambiente em recomendações práticas, possíveis e coerentes com o nível de transformação escolhido."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consultingDeliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brown py-18 text-surface md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Processo"
            title="Um método sensível, claro e aplicável"
            subtitle="Cada etapa traduz percepção em decisão prática para que a transformação aconteça com direção."
            tone="light"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border-t border-surface/25 pt-6">
                <span className="text-sm font-bold text-blush">0{index + 1}</span>
                <step.icon className="mt-6 text-blush" size={28} />
                <h3 className="mt-4 font-heading text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-surface/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        cta="Falar sobre meu espaço"
        page="arquitetura-terapeutica"
        service="architecture"
        whatsappMessageKey="architecture"
      />
    </PageShell>
  );
}
