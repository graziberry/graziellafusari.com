import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { architectureServices } from "@/lib/site-content";
import { canonicalRoutes, createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from "@/lib/seo";

const pageTitle = "Arquitetura Terapêutica";
const pageDescription =
  "Consultoria de arquitetura terapêutica para transformar ambientes com função, beleza, energia, natureza, aroma e bem-estar.";

export const metadata: Metadata = createPageMetadata({
  title: "Arquitetura Terapêutica",
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
            { name: "Arquitetura Terapêutica", path: canonicalRoutes.architecture },
          ]),
        ]}
      />

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Serviços"
            title="Escolha a transformação para o seu momento"
            subtitle="Da Consultoria Essencial ao Projeto Integral, cada caminho organiza prioridades e cria uma atmosfera coerente com quem habita o espaço."
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
