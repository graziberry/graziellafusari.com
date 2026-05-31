import { ArrowRight, ClipboardList, Flower2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { essentialDeliverables, pillars, processSteps } from "@/lib/site-content";

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src="/hero-interior.png"
          alt="Sala elegante com luz natural, plantas e texturas acolhedoras"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,26,21,0.86),rgba(90,51,35,0.58)_46%,rgba(90,51,35,0.10))]" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-end px-5 pb-14 pt-28 md:px-8 md:pb-20">
          <div className="max-w-3xl text-surface">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blush">
              Arquitetura terapêutica e interiores sensoriais
            </p>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.96] md:text-7xl">
              Casas com beleza, presença e bem-estar.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-surface/82 md:text-lg">
              Graziella Fusari transforma ambientes por meio de um olhar que une função, estética,
              biofilia, aromas e energia para criar espaços que acolhem a vida real.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-soft-terracotta"
              >
                Agendar conversa
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-surface/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-surface/10"
              >
                Conhecer serviços
              </Link>
            </div>
            <p className="mt-10 font-script text-4xl text-blush">
              A casa revela. A pessoa aprofunda. O aroma ancora.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Conceito"
            title="O espaço onde você vive também fala sobre você."
            subtitle="A casa carrega fluxos, memórias, excessos, vazios e sensações. A arquitetura terapêutica observa esses sinais e propõe mudanças bonitas, possíveis e conectadas à rotina."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-card border border-line bg-background p-7 text-center shadow-soft">
                <pillar.icon className="mx-auto text-sage" size={31} />
                <h3 className="mt-5 font-heading text-3xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-light-brown">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Serviços"
            title="Escolha o nível de transformação para o seu momento."
            subtitle="Da consultoria essencial ao projeto completo, cada caminho organiza prioridades e cria uma atmosfera coerente com quem habita o espaço."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="bg-brown py-18 text-surface md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Processo"
            title="Um método sensível, claro e aplicável."
            subtitle="Cada etapa traduz percepção em decisão prática para que a transformação não dependa de uma obra grande ou de excesso de informação."
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

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <SectionHeading
              eyebrow="Consultoria Essencial"
              title="Uma entrega objetiva para criar movimento agora."
              subtitle="Ideal para quem sente que a casa precisa respirar, mas não quer iniciar uma obra ou um processo longo."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {essentialDeliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-line bg-background p-5">
                <ClipboardList className="mt-1 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-medium leading-6 text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid overflow-hidden rounded-card border border-line bg-surface shadow-lift md:grid-cols-2">
            <div className="relative min-h-[360px]">
              <Image
                src="/hero-interior.png"
                alt="Interior acolhedor com materiais naturais"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <Flower2 className="text-sage" size={34} />
              <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight md:text-5xl">
                Beleza sem excesso. Presença sem rigidez.
              </h2>
              <p className="mt-5 text-sm leading-7 text-light-brown">
                A proposta é criar ambientes elegantes, vivos e possíveis: uma casa com menos ruído,
                mais intenção e escolhas que sustentam o cotidiano com delicadeza.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm font-bold text-terracotta">
                <Sparkles size={18} />
                interiores, energia e sensorialidade em uma mesma leitura
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageShell>
  );
}
