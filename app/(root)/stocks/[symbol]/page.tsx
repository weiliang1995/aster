import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import TradingViewWebWidget from "@/components/TradingViewWebWidget";
import TradingViewWidget from "@/components/TradingViewWidget";
import { COMPANY_FINANCIALS_WIDGET_CONFIG, COMPANY_PROFILE_WIDGET_CONFIG, SYMBOL_INFO_WIDGET_CONFIG } from "@/lib/constants";
import { isStockSymbol, normalizeSymbol, resolveSymbol } from "@/lib/market-symbols";

async function SymbolDetails({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol: requested } = await params;
  const symbol = resolveSymbol(requested);
  // Heatmap links may include constituents outside the maintained catalogue.
  const chartSymbol = symbol ?? normalizeSymbol(requested);
  if (!chartSymbol) notFound();
  const stock = isStockSymbol(chartSymbol);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold text-gray-100">{chartSymbol}</h1>
        <Link href="/markets" className="text-yellow-500 hover:underline">← All markets</Link>
      </div>
      <TradingViewWidget key={`${chartSymbol}-info`} scriptUrl="symbol-info.js"
        config={SYMBOL_INFO_WIDGET_CONFIG(chartSymbol)} height={170} />
      <TradingViewWebWidget key={`${chartSymbol}-chart`} widget="advanced-chart" title="Price Chart"
        height={650} attributes={{ symbol: chartSymbol }} />
      {stock && <section className="grid gap-8 xl:grid-cols-2" aria-label="Company research">
        <TradingViewWidget key={`${chartSymbol}-profile`} title="Company Profile" scriptUrl="symbol-profile.js"
          config={COMPANY_PROFILE_WIDGET_CONFIG(chartSymbol)} height={440} />
        <TradingViewWidget key={`${chartSymbol}-fundamentals`} title="Fundamental Data" scriptUrl="financials.js"
          config={COMPANY_FINANCIALS_WIDGET_CONFIG(chartSymbol)} height={464} />
      </section>}
      <TradingViewWebWidget key={`${chartSymbol}-news`} widget="news-feed" title="Related News" height={500}
        attributes={{ symbol: chartSymbol }} />
    </div>
  );
}

export default function SymbolPage(props: { params: Promise<{ symbol: string }> }) {
  return <Suspense fallback={<p role="status">Loading symbol…</p>}><SymbolDetails {...props} /></Suspense>;
}
