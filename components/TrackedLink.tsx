"use client";

import type { MouseEvent, ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { trackCtaEvents, type AnalyticsEventName, type CtaAnalyticsProperties } from "@/lib/analytics";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  eventNames: AnalyticsEventName[];
  tracking: CtaAnalyticsProperties;
};

export function TrackedLink({ children, className, eventNames, tracking, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const destination = typeof props.href === "string" ? props.href : props.href.pathname ?? undefined;

    onClick?.(event);
    trackCtaEvents(eventNames, {
      ...tracking,
      destination,
    });
  }

  return (
    <Link {...props} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
