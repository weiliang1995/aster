import TradingViewMarketData from "@/components/TradingViewMarketData";
import SymbolDirectory from "@/components/SymbolDirectory";

export default function MarketsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-gray-100">Markets</h1>
        <p className="mt-2">Compare your markets and select a symbol to explore its chart.</p>
      </div>
      <TradingViewMarketData />
      <SymbolDirectory />
    </div>
  );
}
