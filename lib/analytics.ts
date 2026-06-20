"use client";

import { track } from "@vercel/analytics";

export type AnalyticsEventName =
  | "whatsapp_click"
  | "email_click"
  | "schedule_click"
  | "service_cta_click"
  | "contact_cta_click";

export type CtaAnalyticsProperties = {
  page_path?: string;
  cta_label?: string;
  service_name?: string;
  destination?: string;
};

function currentPagePath() {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.location.pathname;
}

function compactProperties(properties: CtaAnalyticsProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined && value !== "")
  ) as Record<string, string>;
}

// Analytics event definitions for privacy-conscious CTA metrics.
// Only page paths, CTA labels, service names, and destinations are sent.
export function trackCtaEvent(eventName: AnalyticsEventName, properties: CtaAnalyticsProperties = {}) {
  track(
    eventName,
    compactProperties({
      page_path: properties.page_path ?? currentPagePath(),
      cta_label: properties.cta_label,
      service_name: properties.service_name,
      destination: properties.destination,
    })
  );
}

export function trackCtaEvents(eventNames: AnalyticsEventName[], properties: CtaAnalyticsProperties = {}) {
  eventNames.forEach((eventName) => trackCtaEvent(eventName, properties));
}
