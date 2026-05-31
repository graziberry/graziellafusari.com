import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { moodboard, processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Conheça o processo de arquitetura terapêutica: escuta, leitura do ambiente, direção sensorial e plano de ação.",
};

export default function ProcessoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Processo"
        title="Do incômodo à ação, com leveza e método."
        subtitle="O processo transforma percepções subjetivas em escolhas concretas: o que fica, o que sai, o que muda e o que ancora a nova sensação."
      />

      <section className="bg-brown py-18 text-surface md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border-t border-surface/25 pt-6">
                <span className="text-sm font-bold text-blush">0{index + 1}</span>
                <step.icon className="mt-6 text-blush" size={28} />
                <h2 className="mt-4 font-heading text-3xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-surface/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Moodboard"
            title="A paleta sensorial da marca."
            subtitle="As cores guiam uma atmosfera natural, feminina, acolhedora e sofisticada sem cair em excesso decorativo."
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moodboard.map((item) => (
              <div key={item.label} className="overflow-hidden rounded-card border border-line bg-surface shadow-soft">
                <div className={`h-28 ${item.color}`} />
                <div className="p-4 text-sm font-semibold text-light-brown">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-script text-5xl text-terracotta">A casa revela. A pessoa aprofunda. O aroma ancora.</p>
          <p className="mt-6 text-sm leading-7 text-light-brown md:text-base">
            Essa frase orienta todo o método: observar o espaço, escutar a pessoa e criar uma âncora sensorial
            para que a transformação permaneça viva no dia a dia.
          </p>
        </div>
      </section>

      <ContactCTA />
    </PageShell>
  );
}
