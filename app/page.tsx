import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceOverviewCards } from "@/components/ServiceOverviewCards";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  architectureHighlights,
  careSignals,
  consultingDeliverables,
  faqItems,
  homePillars,
  methodLayers,
} from "@/lib/site-content";
import { canonicalRoutes, createFaqJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Graziella Fusari | Arquitetura Terapêutica e Ambientes Sensoriais",
  description:
    "Arquitetura Terapêutica e Ambientes Sensoriais por Graziella Fusari: consultorias que integram arquitetura, energia, natureza, antroposofia e perfumaria natural para transformar casas.",
  path: canonicalRoutes.home,
});

export default function HomePage() {
  return (
    <PageShell>
      <JsonLd data={createFaqJsonLd(faqItems)} />
      <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-ink">
        <Image
          src="/hero-interior.webp"
          alt="Sala elegante com luz natural, plantas e texturas acolhedoras"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,26,21,0.90)_0%,rgba(90,51,35,0.72)_38%,rgba(90,51,35,0.22)_72%,rgba(36,26,21,0.10)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/62 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-5 py-16 md:px-8 md:py-20">
          <div className="w-full max-w-[calc(100vw-40px)] text-surface drop-shadow-[0_2px_18px_rgba(36,26,21,0.32)] md:max-w-[780px]">
            <p className="max-w-[22rem] text-[0.68rem] font-bold uppercase leading-6 tracking-[0.16em] text-blush md:max-w-[36rem] md:text-xs md:tracking-[0.22em]">
              Arquitetura Terapêutica e Ambientes Sensoriais
            </p>
            <h1 className="mt-5 max-w-[14.5ch] font-heading text-[2.45rem] font-semibold leading-[1.02] md:text-[3.75rem] lg:text-[4.15rem] xl:text-[4.45rem]">
              Transforme sua casa em um espaço que cuida de você
            </h1>
            <p className="mt-6 max-w-[22rem] text-base font-medium leading-8 text-surface/88 md:max-w-2xl md:text-lg">
              Um trabalho autoral que integra arquitetura, energia, natureza e aroma para criar casas mais conscientes,
              sensoriais e alinhadas com quem vive nelas.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <WhatsAppLink
                messageKey="homepage"
                tracking={{ page: "homepage", service: "architecture", cta_text: "Agendar conversa pelo WhatsApp" }}
                aria-label="Agendar conversa pelo WhatsApp"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-surface shadow-soft transition hover:bg-soft-terracotta"
              >
                <MessageCircle size={16} />
                Agendar conversa pelo WhatsApp
              </WhatsAppLink>
              <Link
                href="/servicos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-surface/55 px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-surface transition hover:bg-surface/12"
              >
                Conhecer os serviços
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="A casa como ponto de partida"
            title="Há momentos em que a casa deixa de acompanhar quem você é"
          />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              O espaço pode parecer pesado, desorganizado, sem vida ou simplesmente desconectado da fase que você está
              vivendo.
            </p>
            <p>
              Às vezes, não se trata apenas de mudar móveis ou decorar melhor. É preciso olhar para o ambiente como um
              todo: sua energia, seus fluxos, suas memórias, sua função e a forma como ele afeta quem mora ali.
            </p>
            <p className="font-semibold text-brown">
              A Arquitetura Terapêutica olha para a casa como parte ativa da sua experiência de vida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Quando procurar esse trabalho"
            title="Talvez sua casa esteja pedindo cuidado se você sente que:"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careSignals.map((signal) => (
              <article key={signal} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{signal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Serviços"
            title="Como posso cuidar do seu espaço e da sua energia"
            subtitle="Arquitetura Terapêutica é a porta principal. Perfumaria Terapêutica e Atendimentos Terapêuticos Individuais entram como aprofundamentos complementares."
          />
          <div className="mt-12">
            <ServiceOverviewCards compact />
          </div>
          <Link
            href="/servicos"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
          >
            Entender qual serviço é ideal para mim
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div>
              <SectionHeading
                eyebrow="O que é Arquitetura Terapêutica"
                title="Arquitetura Terapêutica é uma leitura profunda da casa como espaço físico, emocional, energético e sensorial"
                subtitle="Não é apenas decoração. É um processo que observa função, fluxo, luz, organização, cores, materiais, memórias, energia do espaço e a relação emocional que a pessoa estabelece com a própria casa."
              />
              <p className="mt-5 text-sm leading-8 text-light-brown md:text-base">
                A partir dessa leitura, cada escolha se transforma em orientação prática para criar um ambiente mais
                coerente com a vida de quem o habita.
              </p>
            </div>
            <div className="grid gap-3">
              {architectureHighlights.map((item) => (
                <div key={item.text} className="flex items-center gap-4 rounded-card border border-line bg-surface p-5 shadow-soft">
                  <item.icon className="shrink-0 text-terracotta" size={24} />
                  <p className="text-sm font-semibold text-brown">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown py-18 text-surface md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="As camadas do meu olhar"
            title="O espaço é lido por diferentes dimensões"
            tone="light"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {methodLayers.map((layer) => (
              <article key={layer.title} className="rounded-card border border-surface/18 bg-surface/8 p-6 shadow-soft">
                <layer.icon className="text-blush" size={28} />
                <h3 className="mt-5 font-heading text-2xl font-semibold">{layer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-surface/74">{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="O que você recebe"
            title="O resultado não é só uma ideia bonita. É um plano claro de transformação."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consultingDeliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-card border border-line bg-cream p-5">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Uma abordagem integrada"
            title="O trabalho de Graziella Fusari se organiza em três pilares complementares"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.85fr_0.85fr]">
            {homePillars.map((pillar) => (
              <article
                key={pillar.title}
                className={`rounded-card border p-7 shadow-soft ${
                  pillar.featured
                    ? "border-terracotta bg-surface text-brown lg:p-9"
                    : "border-line bg-surface text-brown"
                }`}
              >
                <pillar.icon className={pillar.featured ? "text-terracotta" : "text-sage"} size={pillar.featured ? 36 : 30} />
                <h3 className="mt-5 font-heading text-2xl font-semibold md:text-3xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-light-brown">{pillar.text}</p>
                <Link
                  href={pillar.href}
                  className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-terracotta"
                >
                  {pillar.cta}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Sobre Graziella"
            title="Arquiteta, perfumista natural e terapeuta de ambientes"
          />
          <div className="space-y-7 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Minha trajetória une arquitetura, natureza, energia e aroma. Sou arquiteta de formação, com
              pós-graduação em Gestão Ambiental, perfumista natural e estudiosa de caminhos que observam a casa como um
              organismo vivo: Feng Shui tradicional, geobiologia, radiestesia, biofilia, neuroarquitetura, psicologia da
              arquitetura e antroposofia.
            </p>
            <p>
              A Arquitetura Terapêutica nasce dessa integração entre técnica, escuta sensível e cuidado com os
              ambientes.
            </p>
            <Link
              href="/sobre"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-terracotta px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-terracotta transition hover:bg-terracotta hover:text-surface"
            >
              Conhecer minha história
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-brown">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-light-brown">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Como o processo pode começar"
        text="Você pode começar de forma simples, com uma Consultoria Essencial, ou aprofundar o processo com uma transformação mais completa do ambiente."
        cta="Quero entender qual serviço é ideal para mim"
        page="homepage"
        service="architecture"
        whatsappMessageKey="homepage"
      />
    </PageShell>
  );
}
