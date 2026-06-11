"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { getWhatsAppHref, type WhatsAppMessageKey } from "@/lib/whatsapp";

type TrackingProperties = {
  page: string;
  service?: string;
  cta_text: string;
};

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> & {
  children: ReactNode;
  messageKey?: WhatsAppMessageKey;
  tracking: TrackingProperties;
};

type AnalyticsWindow = Window & {
  gtag?: (command: "event", eventName: string, properties: Record<string, string>) => void;
  dataLayer?: Array<Record<string, string>>;
  plausible?: (eventName: string, options: { props: Record<string, string> }) => void;
  posthog?: {
    capture: (eventName: string, properties: Record<string, string>) => void;
  };
};

function trackWhatsAppClick(properties: TrackingProperties & { destination: string }) {
  const eventName = "whatsapp_cta_click";
  const analyticsWindow = window as AnalyticsWindow;

  analyticsWindow.gtag?.("event", eventName, properties);
  analyticsWindow.dataLayer?.push({ event: eventName, ...properties });
  analyticsWindow.plausible?.(eventName, { props: properties });
  analyticsWindow.posthog?.capture(eventName, properties);
}

export function WhatsAppLink({ children, messageKey = "homepage", tracking, onClick, ...props }: WhatsAppLinkProps) {
  const href = getWhatsAppHref(messageKey);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    trackWhatsAppClick({ ...tracking, destination: href });
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
