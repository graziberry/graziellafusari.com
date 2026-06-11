import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceOverviewCards } from "@/components/ServiceOverviewCards";
import { SectionHeading } from "@/components/SectionHeading";
import { canonicalRoutes, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços",
  description:
    "Três caminhos de cuidado com Arquitetura Terapêutica, Perfumaria Terapêutica e Atendimentos Terapêuticos Individuais.",
  path: canonicalRoutes.services,
});

export default function ServicosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serviços"
        title="Três caminhos de cuidado para a casa e para a pessoa"
        subtitle="A Arquitetura Terapêutica integra espaço, presença e sensorialidade para transformar a forma como você habita, sente e se relaciona com o ambiente."
      />

      <section className="bg-surface py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-4xl font-semibold leading-tight text-brown md:text-6xl">
            Casa <span className="text-terracotta">→</span> Pessoa <span className="text-terracotta">→</span> Aroma
          </p>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Caminhos de cuidado"
            title="Escolha o caminho que mais conversa com o seu momento"
            subtitle="Arquitetura Terapêutica é o eixo principal da marca. Perfumaria Terapêutica e Atendimentos Terapêuticos Individuais ampliam o cuidado quando a experiência pede mais sensorialidade, escuta e presença."
          />
          <div className="mt-12">
            <ServiceOverviewCards />
          </div>
        </div>
      </section>

      <ContactCTA
        title="Quer entender por onde começar?"
        text="A primeira conversa ajuda a perceber se o melhor caminho é transformar o ambiente, criar uma atmosfera sensorial ou iniciar um cuidado terapêutico individual."
        cta="Quero entender qual serviço é ideal para mim"
        page="servicos"
        service="general"
        whatsappMessageKey="homepage"
      />
    </PageShell>
  );
}
