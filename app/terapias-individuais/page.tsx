import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { therapyResources, whatsappHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Atendimentos Terapêuticos Individuais",
  description:
    "Atendimentos terapêuticos individuais que complementam o cuidado com a casa e apoiam processos de reorganização, equilíbrio e transformação pessoal.",
};

export default function TerapiasIndividuaisPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Atendimentos Terapêuticos Individuais"
        title="Quando o cuidado também precisa olhar para a pessoa"
        subtitle="Alguns processos não estão apenas no ambiente. Eles também pedem escuta, reorganização interna e cuidado individual."
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Complemento do cuidado"
            title="Um olhar mais profundo para quem habita a casa"
          />
          <div className="space-y-5 text-sm leading-8 text-light-brown md:text-base">
            <p>
              Os Atendimentos Terapêuticos Individuais complementam o trabalho com a casa quando a transformação
              pede um olhar mais profundo para a pessoa.
            </p>
            <p>
              Elas podem apoiar momentos de transição, bloqueios, sobrecargas, padrões repetitivos ou fases em que
              a pessoa sente necessidade de clareza e reorganização.
            </p>
            <p>
              O foco é ampliar a percepção, favorecer equilíbrio e sustentar mudanças que muitas vezes começam no
              ambiente, mas também passam pela vida interna de quem o habita.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Recursos"
            title="Atendimentos conduzidos de acordo com o momento da pessoa"
            subtitle="Cada recurso é escolhido com cuidado, respeitando a necessidade, o ritmo e o processo individual."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {therapyResources.map((resource) => (
              <div key={resource} className="flex gap-3 rounded-card border border-line bg-surface p-5 shadow-soft">
                <Check className="mt-0.5 shrink-0 text-terracotta" size={18} />
                <p className="text-sm font-semibold leading-6 text-brown">{resource}</p>
              </div>
            ))}
          </div>
          <a
            href={whatsappHref}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
          >
            <MessageCircle size={16} />
            Agendar atendimento individual
          </a>
        </div>
      </section>

      <ContactCTA
        title="Quer entender se este cuidado faz sentido para o seu momento?"
        text="A primeira conversa ajuda a compreender se o atendimento terapêutico individual é o melhor caminho agora ou se a Arquitetura Terapêutica deve ser o ponto de partida."
        cta="Agendar atendimento individual"
      />
    </PageShell>
  );
}
