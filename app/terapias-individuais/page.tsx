import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { therapyResources } from "@/lib/site-content";
import { canonicalRoutes, createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from "@/lib/seo";

const pageTitle = "Atendimentos Terapêuticos Individuais";
const pageDescription =
  "Atendimentos terapêuticos individuais complementares para escuta, percepção e reorganização energética, sem substituir acompanhamento médico ou psicológico.";

export const metadata: Metadata = createPageMetadata({
  title: "Atendimentos Terapêuticos Individuais",
  description: pageDescription,
  path: canonicalRoutes.therapy,
});

export default function TerapiasIndividuaisPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createServiceJsonLd({
            name: pageTitle,
            description: pageDescription,
            path: canonicalRoutes.therapy,
          }),
          createBreadcrumbJsonLd([
            { name: "Início", path: canonicalRoutes.home },
            { name: "Atendimentos Terapêuticos Individuais", path: canonicalRoutes.therapy },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Atendimentos Terapêuticos Individuais"
        title="Um cuidado complementar para quem habita a casa"
        subtitle="Alguns processos não estão apenas no ambiente. Eles também pedem escuta, percepção e reorganização interna, sempre como complemento ao cuidado principal com a casa."
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
              Eles podem apoiar momentos de transição, bloqueios, sobrecargas, padrões repetitivos ou fases em que
              a pessoa sente necessidade de clareza e reorganização.
            </p>
            <p>
              O foco é ampliar a percepção, favorecer equilíbrio e sustentar mudanças que muitas vezes começam no
              ambiente, mas também passam pela vida interna de quem o habita.
            </p>
            <p className="rounded-card border border-line bg-cream p-5 font-semibold text-brown">
              Os atendimentos individuais não substituem acompanhamento médico, psicológico ou terapêutico convencional.
              Eles são recursos integrativos de escuta, percepção e reorganização energética.
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
          <WhatsAppLink
            messageKey="therapy"
            tracking={{ page: "terapias-individuais", service: "therapy", cta_text: "Agendar atendimento individual" }}
            aria-label="Agendar atendimento individual"
            className="cta-on-dark mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
          >
            <MessageCircle size={16} />
            Agendar atendimento individual
          </WhatsAppLink>
        </div>
      </section>

      <ContactCTA
        title="Quer entender se este cuidado faz sentido para o seu momento?"
        text="A primeira conversa ajuda a compreender se o atendimento terapêutico individual é o melhor caminho agora ou se a Arquitetura Terapêutica deve ser o ponto de partida."
        cta="Agendar atendimento individual"
        page="terapias-individuais"
        service="therapy"
        whatsappMessageKey="therapy"
      />
    </PageShell>
  );
}
