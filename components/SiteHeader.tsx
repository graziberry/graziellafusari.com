"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { navLinks } from "@/lib/site-content";

function SeedOfLifeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="7" r="5" />
      <circle cx="16.33" cy="9.5" r="5" />
      <circle cx="16.33" cy="14.5" r="5" />
      <circle cx="12" cy="17" r="5" />
      <circle cx="7.67" cy="14.5" r="5" />
      <circle cx="7.67" cy="9.5" r="5" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    }
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileOpen]);

  function isCurrent(href: string) {
    return pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  }

  const conversation = (
    <WhatsAppLink
      messageKey="homepage"
      eventNames={["whatsapp_click", "schedule_click"]}
      tracking={{ service_name: "general", cta_label: "Conversar" }}
      aria-label="Conversar pelo WhatsApp"
      onClick={() => setMobileOpen(false)}
      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-xs font-bold transition hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
      style={{ color: "#fffdf8" }}
    >
      <MessageCircle size={16} aria-hidden="true" />
      Conversar
    </WhatsAppLink>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line/70 bg-surface/95 shadow-[0_8px_24px_rgba(90,51,35,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex min-w-0 items-center gap-3" aria-label="Graziella Fusari - início">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta text-surface shadow-soft">
            <SeedOfLifeIcon />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-heading text-[1.5rem] font-semibold leading-none text-brown">Graziella Fusari</span>
            <span className="mt-1 block truncate text-[0.6rem] font-bold uppercase tracking-[0.16em] text-light-brown">Arquitetura holística</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`flex min-h-11 items-center text-[0.8rem] font-semibold transition hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta ${isCurrent(link.href) ? "text-terracotta" : "text-light-brown"}`}>
              {link.label}
            </Link>
          ))}
          {conversation}
        </nav>
        <button ref={toggleRef} type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line text-brown transition hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta xl:hidden">
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" hidden={!mobileOpen} aria-label="Navegação móvel"
        className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line/70 bg-surface px-5 py-4 md:px-8 xl:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`flex min-h-12 items-center rounded-[6px] px-3 py-3 text-sm font-semibold transition hover:bg-background focus-visible:outline-2 focus-visible:outline-terracotta ${isCurrent(link.href) ? "bg-background text-terracotta" : "text-brown"}`}>
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-line pt-4">{conversation}</div>
        </div>
      </nav>
    </header>
  );
}
