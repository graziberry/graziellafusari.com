import { Flower2 } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/95 shadow-[0_8px_24px_rgba(90,51,35,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Graziella Fusari - inicio">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta text-surface shadow-soft">
            <Flower2 size={21} strokeWidth={1.8} />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-heading text-[1.7rem] font-semibold leading-[0.9] text-brown">
              Graziella Fusari
            </span>
            <span className="mt-1 block truncate text-[0.62rem] font-bold uppercase tracking-[0.18em] text-light-brown">
              Arquitetura terapêutica
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-light-brown transition hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden min-h-10 min-w-[108px] items-center justify-center rounded-full bg-brown px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition hover:bg-terracotta sm:inline-flex sm:px-5"
          style={{ color: "#fffdf8" }}
        >
          <span>Agendar</span>
        </Link>
      </div>
    </header>
  );
}
