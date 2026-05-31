import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Graziella Fusari para consultoria de arquitetura terapêutica e interiores sensoriais.",
};

const contacts = [
  {
    icon: Mail,
    title: "E-mail",
    text: "contato@graziellafusari.com",
    href: "mailto:contato@graziellafusari.com",
  },
  {
    icon: MessageCircle,
    title: "Instagram",
    text: "@graziellafusari",
    href: "https://www.instagram.com/graziellafusari",
  },
  {
    icon: MapPin,
    title: "Atendimento",
    text: "Online e presencial sob consulta",
    href: null,
  },
];

export default function ContatoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu ambiente?"
        subtitle="Conte qual espaço deseja transformar, o que ele precisa sustentar e qual sensação você gostaria de viver com mais presença."
      />

      <section className="py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8">
          {contacts.map((contact) => (
            <article key={contact.title} className="rounded-card border border-line bg-surface p-7 shadow-soft">
              <contact.icon className="text-terracotta" size={30} />
              <h2 className="mt-5 font-heading text-3xl font-semibold">{contact.title}</h2>
              {contact.href ? (
                <a href={contact.href} className="mt-3 block text-sm font-semibold text-light-brown transition hover:text-terracotta">
                  {contact.text}
                </a>
              ) : (
                <p className="mt-3 text-sm font-semibold text-light-brown">{contact.text}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-18 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">Primeira conversa</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-6xl">
            O ponto de partida é entender o que a casa está pedindo.
          </h2>
          <p className="mt-6 text-sm leading-7 text-light-brown md:text-base">
            Se possível, envie algumas fotos do ambiente e descreva o principal incômodo: sensação de peso,
            falta de aconchego, excesso de objetos, dificuldade de uso, iluminação ou desejo de renovação.
          </p>
          <a
            href="mailto:contato@graziellafusari.com?subject=Consultoria%20de%20Arquitetura%20Terap%C3%AAutica"
            className="mt-9 inline-flex rounded-full bg-brown px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-surface transition hover:bg-terracotta"
          >
            Iniciar por e-mail
          </a>
        </div>
      </section>
    </PageShell>
  );
}
