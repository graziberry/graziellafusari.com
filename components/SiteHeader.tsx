import { Flower2 } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta text-surface">
            <Flower2 size={20} />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-2xl font-semibold text-brown">Graziella Fusari</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-light-brown">
              Arquitetura terapêutica
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-light-brown transition hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full bg-brown px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta md:inline-flex"
        >
          Agendar
        </Link>
      </div>
    </header>
  );
}
