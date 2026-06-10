import { Check } from "lucide-react";
import { architectureServices } from "@/lib/site-content";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {architectureServices.map((service) => (
        <article
          key={service.title}
          className={`rounded-card border p-7 shadow-soft ${
            service.featured ? "border-terracotta bg-surface" : "border-line bg-surface/85"
          }`}
        >
          {service.featured ? (
            <span className="mb-5 inline-flex rounded-full bg-blush/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brown">
              Principal porta de entrada
            </span>
          ) : null}
          <service.icon className="text-sage" size={31} />
          <h3 className="mt-5 font-heading text-3xl font-semibold text-brown">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-light-brown">{service.description}</p>
          <ul className="mt-7 space-y-3 text-sm font-medium text-brown">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="shrink-0 text-terracotta" size={17} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
