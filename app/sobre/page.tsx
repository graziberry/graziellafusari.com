import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { pillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o olhar da Graziella Fusari para arquitetura terapêutica, interiores sensoriais e casas com bem-estar.",
};

export default function SobrePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre"
        title="Um olhar para casas que acolhem corpo, rotina e emoção."
        subtitle="A arquitetura terapêutica parte da escuta. Antes de pensar em objetos, cores ou layout, ela observa a relação entre pessoa, casa e sensação."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-card border border-line shadow-soft">
            <Image
              src="/hero-interior.png"
              alt="Ambiente residencial com luz natural e materiais acolhedores"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <SectionHeading
              eyebrow="Abordagem"
              title="Interiores com função, beleza e presença."
              subtitle="O trabalho une organização espacial, estética sensorial, biofilia, aromas e uma leitura energética delicada. O resultado são ambientes possíveis de aplicar, bonitos de viver e coerentes com a fase de quem mora ali."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-card bg-background p-5">
                  <pillar.icon className="text-sage" size={26} />
                  <h3 className="mt-4 font-heading text-2xl font-semibold">{pillar.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="font-heading text-4xl font-semibold leading-tight text-brown md:text-5xl">
            “Uma casa bem cuidada não precisa parecer perfeita. Ela precisa sustentar a vida que acontece dentro dela.”
          </p>
          <p className="mt-8 text-sm leading-8 text-light-brown md:text-base">
            Por isso, cada escolha considera rotina, luz, circulação, memória afetiva, objetos, silêncio, cheiro,
            textura e o ritmo real da casa. A intenção é transformar sem apagar a história do ambiente.
          </p>
        </div>
      </section>

      <ContactCTA />
    </PageShell>
  );
}
