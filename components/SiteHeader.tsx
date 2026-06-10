import { ChevronDown, Flower2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { navLinks, serviceNavLinks, whatsappHref } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/95 shadow-[0_8px_24px_rgba(90,51,35,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Graziella Fusari - início">
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

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) =>
            link.label === "Serviços" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 py-6 text-sm font-semibold text-light-brown transition hover:text-terracotta"
                >
                  {link.label}
                  <ChevronDown size={15} className="transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-[calc(100%-4px)] w-72 -translate-x-1/2 rounded-card border border-line bg-surface p-2 opacity-0 shadow-lift transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {serviceNavLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-[6px] px-4 py-3 text-sm font-semibold leading-5 text-light-brown transition hover:bg-background hover:text-terracotta focus:bg-background focus:text-terracotta"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-light-brown transition hover:text-terracotta"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <a
          href={whatsappHref}
          className="hidden min-h-10 min-w-[108px] items-center justify-center rounded-full bg-brown px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition hover:bg-terracotta sm:inline-flex sm:px-5"
          style={{ color: "#fffdf8" }}
        >
          <MessageCircle className="mr-2" size={15} />
          <span>Agendar</span>
        </a>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line/70 px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-light-brown md:px-8 lg:hidden">
        {[navLinks[0], ...serviceNavLinks, navLinks[2], navLinks[3]].map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 transition hover:text-terracotta">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
