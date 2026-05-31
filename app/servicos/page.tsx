import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { essentialDeliverables, rituals } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de consultoria essencial, consultoria completa e limpeza energética para ambientes residenciais.",
};

export default function ServicosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serviços"
        title="Transformações para diferentes fases da casa."
        subtitle="Cada serviço combina leitura sensorial, escolhas práticas e direção estética para que o ambiente se torne mais leve, bonito e funcional."
      />

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ServiceGrid />
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Consultoria Essencial"
            title="A entrega para começar com clareza."
            subtitle="Uma consultoria objetiva para reorganizar o ambiente, aliviar ruídos visuais e criar uma direção sensorial aplicável."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {essentialDeliverables.map((item) => (
              <div key={item} className="rounded-card border border-line bg-background p-5 text-sm font-medium leading-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Limpeza energética"
            title="Renovar a atmosfera também é parte do cuidado."
            subtitle="A etapa energética é simples, respeitosa e adaptada ao que faz sentido para cada casa."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {rituals.map((item) => (
              <article key={item.title} className="rounded-card border border-line bg-surface p-7 text-center shadow-soft">
                <item.icon className="mx-auto text-terracotta" size={30} />
                <h3 className="mt-5 font-heading text-3xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-light-brown">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageShell>
  );
}
