"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

type EmailContactActionsProps = {
  email: string;
};

export function EmailContactActions({ email }: EmailContactActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-brown transition hover:border-terracotta hover:text-terracotta"
        >
          <Mail size={16} />
          Enviar mensagem por email
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-brown transition hover:border-terracotta hover:text-terracotta"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Email copiado" : "Copiar email"}
        </button>
      </div>
      <p className="flex items-center gap-2 text-sm font-semibold leading-6 text-light-brown">
        <Check size={15} className="text-terracotta" />
        {email}
      </p>
    </div>
  );
}
