import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutFoundations } from "@/lib/site-content";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça Graziella Fusari, arquiteta, perfumista natural e terapeuta de ambientes, com trajetória em sustentabilidade, antroposofia, biofilia e leitura energética dos espaços.",
  path: canonicalRoutes.about,
});

export default function SobrePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre Graziella"
        title="Uma trajetória entre arquitetura, natureza, energia e aroma"
        subtitle="Sou arquiteta, perfumista natural e terapeuta de ambientes. Meu trabalho nasce da união entre técnica, sensibilidade, sustentabilidade, antroposofia, energia dos espaços e perfumaria natural."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-card border border-line shadow-soft">
            <Image
              src="/hero-interior.webp"
              alt="Ambiente residencial com luz natural, plantas e materiais acolhedores"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <SectionHeading
              eyebrow="Meu caminho"
              title="Antes de ser método, esse olhar foi uma forma de viver"
            />
            <p className="mt-8 text-sm leading-8 text-light-brown md:text-base">
              Minha relação com a casa, a natureza e os ambientes sempre foi profunda. A arquitetura me deu a base
              técnica para compreender espaço, função, forma, luz e materiais. A pós-graduação em Gestão Ambiental
              ampliou minha consciência sobre sustentabilidade, ciclos naturais e responsabilidade com o ambiente
              construído. Com o tempo, percebi que não fazia mais sentido separar arquitetura, energia, natureza, aroma
              e cuidado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 md:px-8">
          <article className="md:col-span-1">
            <SectionHeading
              eyebrow="Natureza como raiz"
              title="A natureza não entra como decoração. Ela orienta o olhar."
            />
          </article>
          <div className="space-y-10 md:col-span-2">
            <p className="text-sm leading-8 text-light-brown md:text-base">
              A sustentabilidade, o respeito aos ciclos naturais e a presença da natureza sempre fizeram parte da minha
              forma de perceber o mundo. Esse caminho se expressa na biofilia, nos materiais naturais, nas plantas, nos
              aromas botânicos e na busca por ambientes que respeitem a vida e acolham quem os habita.
            </p>
            <div className="border-t border-line pt-10">
              <SectionHeading
                eyebrow="Antroposofia"
                title="Uma visão ampliada do ser humano e dos espaços"
                subtitle="A antroposofia atravessa minha história pessoal e profissional. Ela inspira uma forma de olhar para o ser humano, a casa, as cores, os ritmos, a matéria, a natureza e os ambientes como dimensões conectadas. Essa influência aparece no meu trabalho como uma camada de percepção, cuidado e respeito pela vida."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown py-18 text-surface md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Como tudo se tornou método"
            title="Arquitetura Terapêutica nasceu da integração entre técnica e sensibilidade"
            tone="light"
          />
          <p className="text-sm leading-8 text-surface/75 md:text-base">
            Ao estudar Feng Shui tradicional, geobiologia, radiestesia, neuroarquitetura, psicologia da arquitetura,
            biofilia e perfumaria natural, compreendi que todas essas áreas conversam. Cada uma observa uma dimensão da
            experiência de habitar: o corpo, a emoção, a energia, os sentidos, a memória, a funcionalidade e a atmosfera
            do espaço.
          </p>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Fundamentos" title="O que sustenta meu trabalho" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutFoundations.map((foundation) => (
              <div key={foundation} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-7 text-brown">{foundation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-heading text-3xl font-semibold leading-tight text-brown md:text-4xl">
            Transformar a casa é também transformar a forma como a vida pode acontecer dentro dela.
          </p>
        </div>
      </section>

      <ContactCTA
        cta="Conversar com Graziella"
        page="/sobre"
        service="architecture"
        whatsappMessageKey="homepage"
      />
    </PageShell>
  );
}
