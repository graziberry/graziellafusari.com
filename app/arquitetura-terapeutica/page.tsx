import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { architectureServices } from "@/lib/site-content";
import { canonicalRoutes, createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from "@/lib/seo";

const pageTitle = "Arquitetura Holística";
const pageDescription =
  "Arquitetura Holística: projetos e consultorias que integram conhecimentos arquitetônicos, humanos, ambientais e sensoriais, com harmonização incluída nas modalidades.";

export const metadata: Metadata = createPageMetadata({
  title: "Arquitetura Holística",
  description: pageDescription,
  path: canonicalRoutes.architecture,
});

export default function ArquiteturaTerapeuticaPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createServiceJsonLd({
            name: pageTitle,
            description: pageDescription,
            path: canonicalRoutes.architecture,
          }),
          createBreadcrumbJsonLd([
            { name: "Início", path: canonicalRoutes.home },
            { name: "Arquitetura Holística", path: canonicalRoutes.architecture },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Arquitetura Holística"
        title="Um olhar completo para o espaço e para quem o habita"
        subtitle="A formação de arquiteta é a base de uma análise que integra funcionalidade, conforto, percepção, natureza, energia e experiência sensorial. Cada decisão parte das necessidades da pessoa e das condições reais do ambiente."
      />
      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Da análise às decisões"
            title="Conhecimentos que orientam o projeto"
            subtitle="O olhar holístico reúne diferentes dimensões do habitar para definir prioridades, soluções e escolhas coerentes com a rotina."
          />
          <dl className="mt-10 divide-y divide-line">
            {[
              ["Formação em Arquitetura", "Sustenta a leitura do espaço e as decisões de layout, circulação, ergonomia, iluminação, materiais e funcionalidade. As propostas consideram o uso dos ambientes e a viabilidade de cada intervenção."],
              ["Neuroarquitetura", "Informa a observação dos estímulos do ambiente e de como são percebidos. Ajuda a orientar escolhas de luz, cores, texturas, acústica e organização conforme as necessidades de descanso, foco e conforto."],
              ["Psicologia Ambiental", "Traz atenção aos hábitos, às memórias, à identidade, à privacidade e à relação afetiva com a casa. Essa escuta orienta a distribuição dos espaços e as escolhas que favorecem pertencimento e autonomia."],
              ["Biofilia e Gestão Ambiental", "Orientam a conexão com a natureza e o cuidado com o ambiente construído: luz natural, ventilação, vegetação, materiais e uso consciente dos recursos, conforme as condições do local."],
              ["Feng Shui e Geobiologia do Habitat", "O Feng Shui acrescenta uma leitura dos fluxos, da organização e da disposição dos elementos. A Geobiologia do Habitat amplia a observação da relação entre o local, o ambiente construído e quem o habita. Essas leituras dialogam com os critérios arquitetônicos, humanos e ambientais nas decisões de projeto."],
              ["Dimensão energética e sensorial", "A harmonização energética faz parte da análise e das propostas de Arquitetura Holística, junto com o cuidado com a luz, os materiais, as cores e a atmosfera. Sua aplicação acompanha as necessidades e o alcance de cada modalidade."],
            ].map(([title, text]) => (
              <div key={title} className="grid gap-3 py-7 md:grid-cols-[0.4fr_0.6fr] md:gap-10">
                <dt className="font-heading text-2xl font-semibold text-brown">{title}</dt>
                <dd className="text-sm leading-8 text-light-brown md:text-base">{text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border-l-2 border-terracotta pl-6">
            <h2 className="font-heading text-2xl font-semibold text-brown">Antroposofia na filosofia de cuidado</h2>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-light-brown md:text-base">
              A Antroposofia participa da filosofia de cuidado: inspira a escuta, o respeito aos ritmos e a atenção à
              vida de quem habita. Essa referência filosófica acompanha a relação com a pessoa e com o espaço, sem
              ser oferecida como técnica de projeto.
            </p>
          </div>
          <Link href="/processo/" className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-terracotta underline underline-offset-4">
            Conhecer as etapas do trabalho
          </Link>
        </div>
      </section>
      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Modalidades de Arquitetura Holística"
            title="Escolha a transformação para o seu momento"
            subtitle="Consultoria Essencial, Consultoria Completa e Projeto Integral integram a harmonização de ambientes ao cuidado arquitetônico, humano, ambiental e sensorial, conforme o alcance de cada modalidade."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {architectureServices.map((service) => (
              <article
                key={service.title}
                className={`flex h-full flex-col rounded-card border p-7 shadow-soft ${
                  service.featured ? "border-terracotta bg-surface lg:scale-[1.02]" : "border-line bg-surface/85"
                }`}
              >
                <service.icon className="text-sage" size={31} />
                <h2 className="mt-5 font-heading text-2xl font-semibold text-brown">{service.title}</h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-light-brown">
                  {(service.paragraphs ?? [service.description]).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {service.items.length ? (
                  <ul className="mt-7 space-y-3 text-sm font-medium text-brown">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="mt-0.5 shrink-0 text-terracotta" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {service.ideal ? (
                  <p className="mt-7 border-t border-line pt-5 text-sm font-semibold leading-7 text-light-brown">
                    {service.ideal}
                  </p>
                ) : null}
                <div className="mt-auto pt-8">
                  <WhatsAppLink
                    messageKey="architecture"
                    eventNames={["whatsapp_click", "service_cta_click"]}
                    tracking={{
                      page_path: "/arquitetura-terapeutica",
                      service_name: service.title,
                      cta_label: service.cta,
                    }}
                    aria-label={service.cta}
                    className="cta-on-dark inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-center text-[0.68rem] font-bold uppercase leading-5 tracking-[0.12em] text-surface transition hover:bg-terracotta"
                    style={{ color: "#fffdf8" }}
                  >
                    <MessageCircle size={15} />
                    {service.cta}
                  </WhatsAppLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
