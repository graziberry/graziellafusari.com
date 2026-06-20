import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { serviceOverviewCards } from "@/lib/site-content";

type ServiceOverviewCardsProps = {
  compact?: boolean;
};

export function ServiceOverviewCards({ compact = false }: ServiceOverviewCardsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.22fr_0.89fr_0.89fr]">
      {serviceOverviewCards.map((service) => (
        <article
          key={service.title}
          className={`rounded-card border p-7 shadow-soft ${
            service.featured
              ? "border-terracotta bg-surface lg:p-9"
              : "border-line bg-surface/90"
          }`}
        >
          <service.icon className={service.featured ? "text-terracotta" : "text-sage"} size={service.featured ? 36 : 30} />
          <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-brown md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-light-brown">
            {compact ? service.summary : service.description}
          </p>
          <TrackedLink
            href={service.href}
            eventNames={["service_cta_click"]}
            tracking={{ cta_label: service.cta, service_name: service.title }}
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-terracotta transition hover:text-brown"
          >
            {service.cta}
            <ArrowRight size={16} />
          </TrackedLink>
        </article>
      ))}
    </div>
  );
}
