import Link from "next/link";
import TradingViewMarketOverview from "@/components/TradingViewMarketOverview";
import TradingViewWebWidget from "@/components/TradingViewWebWidget";
import TradingViewWidget from "@/components/TradingViewWidget";
import { ECONOMIC_CALENDAR_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm text-yellow-500">YOUR MARKET PULSE</p>
          <h1 className="text-3xl font-semibold text-gray-100">Dashboard</h1>
          <p className="mt-2">Follow your markets, sector breadth, and the events behind the moves.</p>
        </div>
        <Link href="/markets" className="text-yellow-500 hover:underline">Explore markets →</Link>
      </div>
      <section className="grid min-w-0 gap-8 xl:grid-cols-2" aria-label="Market performance">
        <TradingViewMarketOverview />
        <TradingViewWebWidget widget="heatmap" title="S&P 500 Heatmap" attributes={{
          "heatmap-type": "stock", "data-source": "SPX500", grouping: "sector",
          "block-size": "market_cap_basic", "block-color": "change",
        }} />
      </section>
      <section className="grid min-w-0 gap-8 lg:grid-cols-2" aria-label="Events and news">
        <TradingViewWidget title="Economic Calendar" scriptUrl="events.js"
          config={ECONOMIC_CALENDAR_WIDGET_CONFIG} height={550} />
        <TradingViewWebWidget widget="news-feed" title="Market News" height={550} />
      </section>
    </div>
  );
}
