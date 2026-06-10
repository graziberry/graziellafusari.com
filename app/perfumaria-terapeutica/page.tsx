import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { perfumeryApplications, whatsappHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Perfumaria Terapêutica",
  description:
    "Aromas para ambientes, perfumes terapêuticos e composições autorais para sustentar experiências sensoriais de cuidado e presença.",
};

export default function PerfumariaTerapeuticaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Perfumaria Terapêutica"
        title="Aromas que prolongam o cuidado no espaço"
        subtitle="A perfumaria terapêutica traz a dimensão sensorial da marca para ambientes, rituais e experiências pessoais."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading eyebrow="Experiência sensorial" title="O aroma transforma a percepção de um ambiente" />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>O aroma tem a capacidade de transformar a percepção de um ambiente.</p>
            <p>Ele acolhe, marca presença, cria atmosfera e ajuda a sustentar uma intenção.</p>
            <p>
              Na marca Graziella Fusari, a Perfumaria Terapêutica funciona como uma extensão sensorial do cuidado
              com a casa e com a pessoa.
            </p>
            <p>
              Ela pode aparecer como complemento de uma consultoria, como assinatura olfativa de um espaço ou como
              criação autoral independente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Aplicações"
            title="Criações olfativas para ambientes, rituais e experiências pessoais"
            subtitle="Mais do que perfumar, a proposta é criar uma experiência sensorial alinhada ao ambiente, à intenção e ao momento da pessoa."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perfumeryApplications.map((application) => (
              <div key={application} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-6 text-brown">{application}</p>
              </div>
            ))}
          </div>
          <a
            href={whatsappHref}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
          >
            <MessageCircle size={16} />
            Conhecer criações olfativas
          </a>
        </div>
      </section>

      <ContactCTA
        title="Quer levar a experiência sensorial para o seu espaço?"
        text="As criações olfativas podem acompanhar uma consultoria, uma assinatura de ambiente ou uma intenção pessoal específica."
        cta="Conhecer criações olfativas"
      />
    </PageShell>
  );
}
