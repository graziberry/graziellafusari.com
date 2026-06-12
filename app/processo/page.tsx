import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { processDeliverables, processSteps } from "@/lib/site-content";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Método",
  description:
    "Conheça o método de Arquitetura Terapêutica que integra leitura do ambiente, direção sensorial e plano de ação.",
  path: canonicalRoutes.process,
});

export default function ProcessoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Método"
        title="Um cuidado que começa no espaço e se expande para a vida"
        subtitle="A leitura do ambiente organiza sinais, sensações e necessidades práticas para criar uma direção clara de transformação."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Casa → Pessoa → Aroma"
            title="Beleza, função e energia trabalhando juntas"
            subtitle="O método observa como a casa comunica, acolhe e influencia. A partir dessa leitura, cada decisão busca mais coerência entre o espaço, quem vive nele e a atmosfera sensorial desejada."
          />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Não se trata de impor uma estética pronta. O processo parte do que já existe, identifica excessos,
              bloqueios e possibilidades, e transforma percepção em escolhas aplicáveis.
            </p>
            <p>
              A casa passa a ser vista como reflexo, abrigo e apoio para quem você está se tornando.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Etapas"
            title="Um método sensível, claro e aplicável"
            subtitle="Cada etapa traduz percepção em decisão prática para que a transformação aconteça com direção."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border-t border-line pt-6">
                <span className="text-sm font-bold text-terracotta">0{index + 1}</span>
                <step.icon className="mt-6 text-sage" size={28} />
                <h2 className="mt-4 font-heading text-3xl font-semibold text-brown">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-light-brown">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Entregáveis"
            title="O que pode fazer parte do processo"
            subtitle="A entrega se adapta ao nível de transformação necessário, sempre com orientações claras para sair da percepção e chegar à ação."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processDeliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-line bg-cream p-5">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        text=""
        cta="Agendar conversa pelo WhatsApp"
        page="processo"
        service="architecture"
        whatsappMessageKey="architecture"
      />
    </PageShell>
  );
}
