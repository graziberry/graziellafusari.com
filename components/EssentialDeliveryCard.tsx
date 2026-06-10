import type { LucideIcon } from "lucide-react";

type Props = {
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
};

export function EssentialDeliveryCard({ number, title, subtitle, icon: Icon, items }: Props) {
  return (
    <article className="rounded-soft border border-line bg-surface p-6 shadow-soft">
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage font-heading text-2xl text-surface">
            {number}
          </span>
          <div>
            <h3 className="font-heading text-2xl font-medium text-brown">{title}</h3>
            <p className="font-script text-2xl text-terracotta">{subtitle}</p>
          </div>
        </div>
        <Icon className="shrink-0 text-soft-terracotta" size={26} />
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-light-brown">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </article>
  );
}
