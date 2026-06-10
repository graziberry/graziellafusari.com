import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { architectureHighlights, homePillars, whatsappHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Graziella Fusari | Arquitetura Terapêutica e Ambientes Sensoriais",
  description:
    "Arquitetura terapêutica, harmonização de ambientes, terapias integrativas e perfumaria terapêutica para transformar sua casa em um espaço de equilíbrio e bem-estar.",
};

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-ink">
        <Image
          src="/hero-interior.png"
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
              Arquitetura terapêutica, harmonização de ambientes e recursos sensoriais
            </p>
            <h1 className="mt-5 max-w-[12ch] font-heading text-[3.15rem] font-semibold leading-[0.94] md:text-[5.8rem]">
              Transforme sua casa em um espaço que cuida de você
            </h1>
            <p className="mt-6 max-w-[22rem] text-base font-medium leading-8 text-surface/88 md:max-w-2xl md:text-lg">
              Arquitetura terapêutica, harmonização de ambientes e recursos sensoriais para alinhar sua casa ao
              momento que você está vivendo.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-surface shadow-soft transition hover:bg-soft-terracotta"
              >
                <MessageCircle size={16} />
                Agendar conversa pelo WhatsApp
              </a>
              <Link
                href="/arquitetura-terapeutica"
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
              O espaço pode parecer pesado, desorganizado, sem vida ou simplesmente desconectado da fase que você
              está vivendo.
            </p>
            <p>
              Às vezes, não se trata apenas de mudar móveis ou decorar melhor. É preciso olhar para o ambiente como
              um todo: sua energia, seus fluxos, suas memórias, sua função e a forma como ele afeta quem mora ali.
            </p>
            <p className="font-semibold text-brown">
              A Arquitetura Terapêutica olha para a casa como parte ativa da sua experiência de vida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <SectionHeading
                eyebrow="O que é Arquitetura Terapêutica"
                title="Arquitetura Terapêutica é uma forma sensível e integrada de transformar ambientes"
                subtitle="Ela considera a funcionalidade, a estética, a organização, a energia do espaço e a relação emocional que a pessoa estabelece com a própria casa."
              />
              <p className="mt-5 text-sm leading-8 text-light-brown md:text-base">
                O objetivo não é apenas deixar o ambiente mais bonito. É criar um espaço mais coerente, acolhedor
                e alinhado com a vida de quem o habita.
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
            eyebrow="Uma abordagem integrada"
            title="O trabalho de Graziella Fusari se organiza em três pilares complementares"
            tone="light"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.85fr_0.85fr]">
            {homePillars.map((pillar) => (
              <article
                key={pillar.title}
                className={`rounded-card border p-7 shadow-soft ${
                  pillar.featured
                    ? "border-blush bg-surface text-brown lg:p-9"
                    : "border-surface/18 bg-surface/8 text-surface"
                }`}
              >
                <pillar.icon className={pillar.featured ? "text-terracotta" : "text-blush"} size={pillar.featured ? 36 : 30} />
                <h3 className="mt-5 font-heading text-3xl font-semibold md:text-4xl">{pillar.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${pillar.featured ? "text-light-brown" : "text-surface/74"}`}>
                  {pillar.text}
                </p>
                <Link
                  href={pillar.href}
                  className={`mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${
                    pillar.featured ? "text-terracotta" : "text-blush"
                  }`}
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
          <SectionHeading eyebrow="Para quem é" title="Para quem sente que a casa precisa mudar" />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Este trabalho é para pessoas que sentem que a casa precisa mudar, mas não sabem exatamente por onde
              começar.
            </p>
            <p>
              É para quem percebe que o ambiente influencia o humor, a energia, o descanso e a organização da vida.
            </p>
            <p>
              Também é para quem está vivendo uma fase de transição, recomeço ou reorganização interna, e deseja
              que a casa acompanhe esse novo momento com mais beleza, presença e sentido.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Como o processo pode começar"
        text="Você pode começar de forma simples, com uma Consultoria Essencial, ou aprofundar o processo com uma transformação mais completa do ambiente. Também é possível iniciar por um atendimento individual ou por uma criação olfativa, dependendo da necessidade do momento. Cada caminho faz parte de um mesmo ecossistema de cuidado: casa, pessoa e experiência sensorial."
        cta="Quero entender qual serviço é ideal para mim"
      />
    </PageShell>
  );
}
