"use client";

import TradingViewWebWidget from "@/components/TradingViewWebWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

export default function TradingViewMarketOverview() {
  return (
    <TradingViewWebWidget widget="market-overview" title="Market Overview" attributes={{
        "symbol-sectors": JSON.stringify(
          MARKET_OVERVIEW_WIDGET_CONFIG.symbolSectors,
        ),
        transparent: "",
      }} />
  );
}
