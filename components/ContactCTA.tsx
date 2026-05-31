import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="bg-brown py-18 text-surface md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Contato</p>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-6xl">
          Vamos olhar para a sua casa com calma?
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-surface/75 md:text-base">
          Conte o que você sente no ambiente e o que deseja transformar. A primeira conversa ajuda a entender
          qual caminho faz mais sentido para o seu momento.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:contato@graziellafusari.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-soft-terracotta"
          >
            <Mail size={16} />
            Enviar e-mail
          </a>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-surface/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-surface/10"
          >
            Ver contatos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
