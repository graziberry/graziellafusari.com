import type { Metadata } from "next";
import { Flower2, Leaf, Sparkles } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Perfumaria Terapêutica",
  description:
    "A arte de criar aromas com intenção, presença e escuta para harmonizar corpo, emoção e ambiente.",
};

const supportMoments = [
  {
    title: "Autocuidado e amor próprio",
    text: "Quando a pessoa precisa voltar para si, se acolher, se nutrir e lembrar do próprio valor.",
  },
  {
    title: "Clareza e presença",
    text: "Quando há excesso mental, cansaço, dispersão ou dificuldade de escutar o próprio caminho.",
  },
  {
    title: "Acolhimento emocional",
    text: "Quando a casa ou a pessoa pedem suavidade, colo, silêncio e reconexão.",
  },
  {
    title: "Vitalidade e movimento",
    text: "Quando é preciso reacender ânimo, coragem, sensualidade, criatividade ou força de ação.",
  },
  {
    title: "Limpeza e renovação energética",
    text: "Quando o ambiente parece pesado, estagnado ou carregado por memórias, conflitos e excessos.",
  },
  {
    title: "Criação de atmosfera",
    text: "Para transformar um espaço em lugar de repouso, concentração, intimidade, meditação, prosperidade ou celebração.",
  },
];

export default function PerfumariaTerapeuticaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Perfumaria Terapêutica"
        title="Perfumaria Terapêutica"
        subtitle="A arte de criar aromas com intenção, presença e escuta."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <SectionHeading
              eyebrow="Aroma com intenção"
              title="Um encontro entre planta, pessoa, casa e alma"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                { icon: Flower2, label: "planta" },
                { icon: Leaf, label: "presença" },
                { icon: Sparkles, label: "alma" },
              ].map((item) => (
                <div key={item.label} className="border-t border-line pt-5">
                  <item.icon className="text-sage" size={24} />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-brown">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              A perfumaria terapêutica é a arte de criar aromas com intenção, presença e escuta. Ela vai além de um
              perfume bonito: é um encontro entre planta, pessoa, casa e alma.
            </p>
            <p>
              Cada aroma carrega uma linguagem sutil. Algumas plantas acolhem, outras despertam. Algumas trazem chão,
              outras abrem o coração, clareiam a mente ou convidam o corpo a voltar para si. Na perfumaria terapêutica,
              os óleos essenciais, resinas, flores, madeiras e especiarias são escolhidos não apenas pelo cheiro, mas
              pela sensação, pela memória e pela energia que evocam.
            </p>
            <p>
              O olfato é uma porta antiga. Antes mesmo da razão compreender, o cheiro toca nossas emoções, desperta
              lembranças, muda atmosferas e cria estados internos. Por isso, um perfume pode se tornar um pequeno
              ritual: uma forma de ancorar presença, intenção, cuidado e transformação no dia a dia.
            </p>
            <p>
              Na Arquitetura Terapêutica, a perfumaria entra como uma extensão sensorial do espaço. Assim como a luz, as
              cores, os objetos e a organização da casa influenciam quem habita ali, os aromas também comunicam. Eles
              ajudam a criar ambientes mais acolhedores, vivos, protegidos, leves ou expansivos, conforme a necessidade
              da pessoa e da casa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Para que serve"
            title="Para harmonizar a relação entre corpo, emoção e ambiente"
            subtitle="Ela pode apoiar momentos de cuidado, clareza, acolhimento, vitalidade, renovação e criação de atmosfera."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportMoments.map((moment) => (
              <article key={moment.title} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <h2 className="font-heading text-3xl font-semibold leading-tight text-brown">{moment.title}</h2>
                <p className="mt-4 text-sm leading-7 text-light-brown">{moment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Quer levar a perfumaria terapêutica para o seu espaço?"
        text="A perfumaria terapêutica pode apoiar a criação de atmosferas mais acolhedoras, vivas, protegidas, leves ou expansivas."
        cta="Falar sobre perfumaria terapêutica"
      />
    </PageShell>
  );
}
