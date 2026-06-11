import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Método",
  description:
    "Conheça o método de Arquitetura Terapêutica que integra leitura do ambiente, direção sensorial e plano de ação.",
};

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

      <ContactCTA text="" cta="Agendar conversa pelo WhatsApp" />
    </PageShell>
  );
}
