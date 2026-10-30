// Maintain tickers and category membership here. Widgets and navigation derive from this list.
export const MARKET_SYMBOL_GROUPS = [
    {
      sectionName: "ETF",
      symbols: [
        "AMEX:SPY",
        "AMEX:VOO",
        "NASDAQ:QQQ",
        "AMEX:IWM",
        "AMEX:VTI",
        "NASDAQ:SMH",
      ],
    },
    {
      sectionName: "Indices",
      symbols: [
        "FOREXCOM:SPXUSD",
        "FOREXCOM:NSXUSD",
        "FOREXCOM:DJI",
        "VIX",
      ],
    },
    {
      sectionName: "Bonds",
      symbols: [
        "US02Y",
        "US10Y",
        "US30Y",
        "NYSE:SGOV",
        "NASDAQ:SHY",
        "NASDAQ:TLT",
        "NASDAQ:IEF",
        "AMEX:HYG",
      ],
    },
    {
      sectionName: "Commodities",
      symbols: [
        "OANDA:XAUUSD",
        "OANDA:XAGUSD",
        "TVC:USOIL",
        "TVC:UKOIL",
      ],
    },
    {
      sectionName: "Financial",
      symbols: [
        "NYSE:JPM",
        "NYSE:BAC",
        "NYSE:GS",
        "NYSE:MS",
        "NYSE:BRK.B",
        "NYSE:V",
        "NYSE:MA",
      ],
    },
    {
      sectionName: "Mag 7",
      symbols: [
        "NASDAQ:AAPL",
        "NASDAQ:MSFT",
        "NASDAQ:GOOGL",
        "NASDAQ:AMZN",
        "NASDAQ:NVDA",
        "NASDAQ:META",
        "NASDAQ:TSLA",
      ],
    },
    {
      sectionName: "Semicon",
      symbols: [
        "NASDAQ:NVDA",
        "NASDAQ:AMD",
        "NASDAQ:AVGO",
        "NYSE:TSM",
        "NASDAQ:ASML",
        "NASDAQ:MU",
        "NASDAQ:SNDK",
        "NASDAQ:AMAT",
        "NASDAQ:LRCX",
      ],
    },
    {
      sectionName: "Crypto",
      symbols: [
        "COINBASE:BTCUSD",
        "COINBASE:ETHUSD",
        "COINBASE:SOLUSD",
        "COINBASE:XRPUSD",
        "COINBASE:ADAUSD",
        "COINBASE:DOGEUSD",
      ],
    },
    {
      sectionName: "Global",
      symbols: [
        "INDEX:NKY",
        "INDEX:DEU40",
        "FOREXCOM:UKXGBP",
        "HSI:HSI",
        "SSE:000300",
      ],
    },
    {
      sectionName: "Forex",
      symbols: [
        "FX:EURUSD",
        "FX:USDJPY",
        "FX:GBPUSD",
        "FX:AUDUSD",
        "FX:USDCNH",
        "FX_IDC:USDMYR",
      ],
    },
  ] satisfies { sectionName: string; symbols: string[] }[];

export const MARKET_SYMBOLS = [...new Set(MARKET_SYMBOL_GROUPS.flatMap(group => group.symbols))];

export const STOCK_SYMBOLS = [...new Set(MARKET_SYMBOL_GROUPS
  .filter(group => ["Financial", "Mag 7", "Semicon"].includes(group.sectionName))
  .flatMap(group => group.symbols))];

export function isStockSymbol(symbol: string) {
  return STOCK_SYMBOLS.includes(symbol);
}

export function normalizeSymbol(value: string): string | undefined {
  try {
    // Next normally decodes route params; tolerate an encoded ticker from a widget too.
    const normalized = decodeURIComponent(value).trim().toUpperCase();
    return /^(?:[A-Z0-9_]+:)?[A-Z0-9_.!-]{1,32}$/.test(normalized)
      ? normalized : undefined;
  } catch {
    return undefined;
  }
}

export function resolveSymbol(value: string) {
  const normalized = normalizeSymbol(value);
  if (!normalized) return undefined;
  return MARKET_SYMBOLS.find(symbol => symbol === normalized)
    ?? MARKET_SYMBOLS.find(symbol => symbol.split(":").pop() === normalized);
}

export function symbolHref(symbol: string) {
  return `/stocks/${encodeURIComponent(symbol)}`;
}
