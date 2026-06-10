import Link from "next/link";
import { navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="font-heading text-3xl font-semibold text-brown">Graziella Fusari</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-light-brown">
            Arquitetura terapêutica, harmonização de ambientes, terapias integrativas e perfumaria terapêutica.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-light-brown md:justify-end">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-terracotta">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-light-brown">
        © {new Date().getFullYear()} Graziella Fusari. Todos os direitos reservados.
      </div>
    </footer>
  );
}
