"use client";

import { ChevronDown, Flower2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { navLinks, serviceNavLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) =>
            link.label === "Serviços" ? (
              <div
                key={link.href}
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-haspopup="menu"
                  aria-expanded={desktopServicesOpen}
                  className="flex min-h-11 items-center gap-1.5 py-6 text-sm font-semibold text-light-brown transition hover:text-terracotta focus:text-terracotta"
                  onFocus={() => setDesktopServicesOpen(true)}
                  onKeyDown={(event) => {
                    if (event.key === " ") {
                      event.preventDefault();
                      setDesktopServicesOpen((open) => !open);
                    }
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition ${desktopServicesOpen ? "rotate-180 text-terracotta" : ""}`}
                  />
                </Link>
                <div
                  role="menu"
                  className={`absolute left-1/2 top-[calc(100%-4px)] w-80 -translate-x-1/2 rounded-card border border-line bg-surface p-2 shadow-lift transition duration-150 ${
                    desktopServicesOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  {serviceNavLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      role="menuitem"
                      className="block min-h-12 rounded-[6px] px-4 py-3 transition hover:bg-background focus:bg-background"
                      onClick={() => setDesktopServicesOpen(false)}
                    >
                      <span className="block text-sm font-semibold leading-5 text-brown">{service.label}</span>
                      <span className="mt-1 block text-xs font-medium leading-5 text-light-brown">
                        {service.microcopy}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center text-sm font-semibold text-light-brown transition hover:text-terracotta focus:text-terracotta"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <WhatsAppLink
          messageKey="homepage"
          tracking={{ page: "header", service: "architecture", cta_text: "Agendar" }}
          aria-label="Agendar conversa pelo WhatsApp"
          className="hidden min-h-10 min-w-[108px] items-center justify-center rounded-full bg-brown px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition hover:bg-terracotta sm:inline-flex sm:px-5"
          style={{ color: "#fffdf8" }}
        >
          <MessageCircle className="mr-2" size={15} />
          <span>Agendar</span>
        </WhatsAppLink>
      </div>

      <nav
        className="border-t border-line/70 px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-light-brown md:px-8 lg:hidden"
        aria-label="Navegação mobile"
      >
        <div className="flex gap-4 overflow-x-auto">
          {navLinks.map((link) =>
            link.label === "Serviços" ? (
              <button
                key={link.href}
                type="button"
                aria-haspopup="menu"
                aria-expanded={mobileServicesOpen}
                className="flex min-h-11 shrink-0 items-center gap-1.5 transition hover:text-terracotta"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                {link.label}
                <ChevronDown size={14} className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Link key={link.href} href={link.href} className="flex min-h-11 shrink-0 items-center transition hover:text-terracotta">
                {link.label}
              </Link>
            )
          )}
          <WhatsAppLink
            messageKey="homepage"
            tracking={{ page: "mobile-header", service: "architecture", cta_text: "Agendar" }}
            aria-label="Agendar conversa pelo WhatsApp"
            className="flex min-h-11 shrink-0 items-center text-terracotta"
          >
            Agendar
          </WhatsAppLink>
        </div>
        {mobileServicesOpen ? (
          <div role="menu" className="mt-2 grid gap-2 rounded-card border border-line bg-surface p-2 shadow-soft">
            <Link
              href="/servicos"
              role="menuitem"
              className="min-h-11 rounded-[6px] px-4 py-3 text-sm font-semibold normal-case tracking-normal text-brown transition hover:bg-background"
              onClick={() => setMobileServicesOpen(false)}
            >
              Ver todos os serviços
            </Link>
            {serviceNavLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                role="menuitem"
                className="min-h-11 rounded-[6px] px-4 py-3 normal-case tracking-normal transition hover:bg-background"
                onClick={() => setMobileServicesOpen(false)}
              >
                <span className="block text-sm font-semibold text-brown">{service.label}</span>
                <span className="mt-1 block text-xs font-medium text-light-brown">{service.microcopy}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
