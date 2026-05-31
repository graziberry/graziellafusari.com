import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-brown">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
