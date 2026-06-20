"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackCtaEvents, type AnalyticsEventName, type CtaAnalyticsProperties } from "@/lib/analytics";
import { getWhatsAppHref, type WhatsAppMessageKey } from "@/lib/whatsapp";

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> & {
  children: ReactNode;
  messageKey?: WhatsAppMessageKey;
  tracking: CtaAnalyticsProperties;
  eventNames?: AnalyticsEventName[];
};

export function WhatsAppLink({
  children,
  messageKey = "homepage",
  tracking,
  eventNames = ["whatsapp_click"],
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const href = getWhatsAppHref(messageKey);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    trackCtaEvents(eventNames, { ...tracking, destination: href });
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
