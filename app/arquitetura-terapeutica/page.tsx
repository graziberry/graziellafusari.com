import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { architectureServices, processSteps, whatsappHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Arquitetura Terapêutica",
  description:
    "Consultoria Essencial, Consultoria Completa e Projeto Integral para transformar ambientes com função, beleza, energia e bem-estar.",
};

export default function ArquiteturaTerapeuticaPage() {
  return (
    <PageShell>
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
                <h2 className="mt-5 font-heading text-3xl font-semibold text-brown">{service.title}</h2>
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
                <a
                  href={whatsappHref}
                  className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-center text-[0.68rem] font-bold uppercase leading-5 tracking-[0.12em] text-surface transition hover:bg-terracotta"
                >
                  <MessageCircle size={15} />
                  {service.cta}
                </a>
              </article>
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
                <h3 className="mt-4 font-heading text-3xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-surface/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA cta="Falar sobre meu espaço" />
    </PageShell>
  );
}
