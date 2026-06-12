import type { Metadata } from "next";
import { Flower2, Leaf, Sparkles } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { perfumeryApplications } from "@/lib/site-content";
import { canonicalRoutes, createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from "@/lib/seo";

const pageTitle = "Perfumaria Terapêutica";
const pageDescription =
  "Perfumaria terapêutica natural com óleos essenciais, tinturas botânicas e matérias-primas naturais para criar atmosferas sensoriais e olfativas.";

export const metadata: Metadata = createPageMetadata({
  title: "Perfumaria Terapêutica",
  description: pageDescription,
  path: canonicalRoutes.perfumery,
});

const supportMoments = [
  {
    title: "Autocuidado e amor próprio",
    text: "Pode apoiar pequenos rituais de presença, acolhimento e reconexão com o próprio tempo.",
  },
  {
    title: "Clareza e presença",
    text: "Ajuda a criar uma atmosfera mais limpa, silenciosa e favorável ao foco.",
  },
  {
    title: "Acolhimento emocional",
    text: "Convida ao recolhimento, à suavidade e à criação de um espaço mais gentil para estar.",
  },
  {
    title: "Vitalidade e movimento",
    text: "Pode favorecer uma sensação de ânimo, criatividade e abertura para a ação.",
  },
  {
    title: "Limpeza e renovação energética",
    text: "Sustenta uma intenção de renovação quando o ambiente parece parado, pesado ou carregado de excessos.",
  },
  {
    title: "Criação de atmosfera",
    text: "Ajuda a marcar repouso, concentração, intimidade, meditação, celebração ou chegada em casa.",
  },
];

export default function PerfumariaTerapeuticaPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createServiceJsonLd({
            name: pageTitle,
            description: pageDescription,
            path: canonicalRoutes.perfumery,
          }),
          createBreadcrumbJsonLd([
            { name: "Início", path: canonicalRoutes.home },
            { name: "Perfumaria Terapêutica", path: canonicalRoutes.perfumery },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Perfumaria Terapêutica"
        title="Perfumaria Terapêutica"
        subtitle="A arte de criar aromas com intenção, presença e escuta."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Perfumaria natural"
            title="Aromas criados apenas com matérias-primas naturais"
          />
          <p className="text-sm leading-8 text-light-brown md:text-base">
            Trabalho com óleos essenciais, tinturas botânicas, flores, madeiras, resinas, especiarias e plantas
            aromáticas. Não uso fragrâncias sintéticas. Cada composição nasce da escuta da pessoa, da casa e da
            atmosfera que se deseja criar.
          </p>
        </div>
      </section>

      <section className="py-18 md:py-24">
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
                { icon: Sparkles, label: "atmosfera" },
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
              perfume bonito: é um encontro entre planta, pessoa, casa e atmosfera.
            </p>
            <p>
              Cada aroma carrega uma linguagem sutil. Algumas plantas acolhem, outras despertam. Algumas trazem chão,
              outras convidam ao silêncio, à clareza ou ao movimento. Na perfumaria terapêutica, óleos essenciais,
              resinas, flores, madeiras e especiarias são escolhidos pela sensação, pela memória e pela intenção que
              ajudam a sustentar.
            </p>
            <p>
              O olfato é uma porta antiga. Antes mesmo da razão compreender, o cheiro toca lembranças, muda atmosferas e
              cria pequenos rituais de presença no dia a dia.
            </p>
            <p>
              Na Arquitetura Terapêutica, a perfumaria entra como uma extensão sensorial do espaço. Assim como luz,
              cores, objetos e organização comunicam, os aromas também participam da experiência de habitar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Para que pode apoiar"
            title="Para harmonizar a relação entre corpo, emoção e ambiente"
            subtitle="A perfumaria natural ajuda a criar atmosfera, favorece presença, convida ao acolhimento e sustenta uma intenção para o espaço."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportMoments.map((moment) => (
              <article key={moment.title} className="rounded-card border border-line bg-cream p-6">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-brown">{moment.title}</h3>
                <p className="mt-4 text-sm leading-7 text-light-brown">{moment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading title="Como a perfumaria entra na casa" eyebrow="Aplicações" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perfumeryApplications.map((item) => (
              <div key={item} className="rounded-card border border-line bg-surface p-6 shadow-soft">
                <p className="font-heading text-2xl font-semibold leading-tight text-brown">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Quer levar a perfumaria terapêutica para o seu espaço?"
        text="A perfumaria terapêutica pode apoiar a criação de atmosferas mais acolhedoras, vivas, protegidas, leves ou expansivas."
        cta="Falar sobre perfumaria terapêutica"
        page="perfumaria-terapeutica"
        service="perfumery"
        whatsappMessageKey="perfumery"
      />
    </PageShell>
  );
}
