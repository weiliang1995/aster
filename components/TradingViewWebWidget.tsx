"use client";

import { createElement, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { symbolHref } from "@/lib/market-symbols";

type Widget = "market-overview" | "market-data" | "heatmap" | "news-feed" | "advanced-chart";

export default function TradingViewWebWidget({
  widget, title, height = 600, attributes = {},
}: {
  widget: Widget;
  title?: string;
  height?: number;
  attributes?: Record<string, string>;
}) {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const navigate = (event: Event) => {
      const symbol = (event as CustomEvent).detail?.context?.symbol;
      if (typeof symbol !== "string" || !symbol) return;
      event.preventDefault();
      router.push(symbolHref(symbol));
    };
    node.addEventListener("tv-link-open", navigate);
    return () => node.removeEventListener("tv-link-open", navigate);
  }, [router]);

  return (
    <div ref={container} className="w-full min-w-0">
      {title && <h3 className="mb-5 text-2xl font-semibold text-gray-100">{title}</h3>}
      <Script
        src={`https://widgets.tradingview-widget.com/w/en/tv-${widget}.js`}
        type="module"
        strategy="afterInteractive"
        onError={() => setFailed(true)}
      />
      {failed ? <p role="alert" className="p-6 text-gray-400">Unable to load this widget. Please refresh to try again.</p> : createElement(`tv-${widget}`, {
        ...attributes,
        theme: "dark",
        style: { display: "block", width: "100%", height },
      })}
    </div>
  );
}
