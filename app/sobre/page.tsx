import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { homePillars } from "@/lib/site-content";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça a abordagem autoral de Graziella Fusari, que integra arquitetura, harmonização de ambientes, terapias integrativas e perfumaria terapêutica.",
  path: canonicalRoutes.about,
});

export default function SobrePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre"
        title="Um olhar sensível para a casa, a pessoa e a experiência de viver"
        subtitle="Graziella Fusari desenvolve um trabalho autoral que integra arquitetura, harmonização de ambientes, terapias integrativas e perfumaria terapêutica."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-card border border-line shadow-soft">
            <Image
              src="/hero-interior.webp"
              alt="Ambiente residencial com luz natural e materiais acolhedores"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <SectionHeading
              eyebrow="Abordagem"
              title="A casa e a pessoa estão em relação constante"
              subtitle="O ambiente influencia a forma como descansamos, criamos, nos organizamos, nos percebemos e atravessamos as fases da vida. Ao mesmo tempo, a casa também reflete histórias, escolhas, padrões e momentos internos."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-light-brown md:text-base">
              <p>
                Por isso, seu trabalho propõe uma transformação integrada: olhar para o espaço, compreender sua
                energia, reorganizar sua função, trazer beleza com sentido e, quando necessário, aprofundar o cuidado
                por meio de atendimentos terapêuticos individuais e recursos sensoriais.
              </p>
              <p>
                A marca Graziella Fusari não separa técnica e sensibilidade. Ela une olhar profissional, escuta,
                estética, energia e presença para criar ambientes mais coerentes com a vida de quem os habita.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Ecossistema"
            title="Casa, pessoa e sentidos em um mesmo cuidado"
            subtitle="Arquitetura Terapêutica é a entrada principal. Atendimentos Terapêuticos Individuais e Perfumaria Terapêutica aparecem como aprofundamentos complementares quando fazem sentido para o processo."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {homePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-card border border-line bg-surface p-7 shadow-soft">
                <pillar.icon className="text-sage" size={30} />
                <h3 className="mt-5 font-heading text-3xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-light-brown">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-heading text-4xl font-semibold leading-tight text-brown md:text-5xl">
            Transformar a casa é também abrir espaço para uma nova forma de viver.
          </p>
        </div>
      </section>

      <ContactCTA
        cta="Conversar com Graziella"
        page="sobre"
        service="architecture"
        whatsappMessageKey="homepage"
      />
    </PageShell>
  );
}
