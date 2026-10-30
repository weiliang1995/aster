"use client";
import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  script: string,
  config: Record<string, unknown>,
  height = 600,
) => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-${script}`;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const serializedConfig = JSON.stringify(config);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Each effect owns its subtree. Keep the script attached to this wrapper
    // even after cleanup: removing an async script does not cancel execution.
    const wrapper = document.createElement("div");
    wrapper.className = "tradingview-widget-container";
    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.width = "100%";
    widget.style.height = `${height}px`;
    wrapper.appendChild(widget);

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.textContent = serializedConfig;

    // Cancel Strict Mode's first setup before it starts a network request.
    const timeout = window.setTimeout(() => {
      if (!container.isConnected) return;
      container.replaceChildren(wrapper);
      wrapper.appendChild(script);
    }, 0);

    return () => {
      window.clearTimeout(timeout);
      wrapper.remove();
    };
  }, [scriptUrl, serializedConfig, height]);

  return containerRef;
};
export default useTradingViewWidget;
