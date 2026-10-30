"use client";

import TradingViewWebWidget from "@/components/TradingViewWebWidget";
import { MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants";

export default function TradingViewMarketData() {
  return (
    <TradingViewWebWidget widget="market-data" title="Market Data" height={720} attributes={{
        "symbol-sectors": JSON.stringify(MARKET_DATA_WIDGET_CONFIG.symbolSectors),
      }} />
  );
}
