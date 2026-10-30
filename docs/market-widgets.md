# Market widgets

Maintain symbols in `lib/market-symbols.ts` (`MARKET_SYMBOL_GROUPS`). Keep the existing exchange prefix, or bare ticker when that is the working TradingView identifier. Overview, Market Data, the searchable directory, and stock shortcuts derive from this catalogue. Symbols shared across groups are deduplicated in `MARKET_SYMBOLS` and `STOCK_SYMBOLS`.

- `/`: Market Overview, S&P 500 Heatmap, Economic Calendar, and Market News.
- `/markets`: Market Data and a searchable directory of all configured symbols.
- `/stocks/[symbol]`: Symbol Info, Advanced Chart, Related News, plus Company Profile and Fundamental Data for configured stocks. Full tickers are URL-encoded; bare stock tickers resolve through the catalogue.

`STOCK_SYMBOLS` currently derives from Financial, Mag 7, and Semicon. If adding another stock category or renaming one of these, update the category selection in the same file. ETFs, yields, currencies, crypto, and indices do not receive company financial widgets.

`TradingViewWebWidget` loads Web Components and handles `tv-link-open` to route symbol links to the detail page. `TradingViewWidget` and `useTradingViewWidget` remain available for iframe embeds (currently Symbol Info, Company Profile, Fundamental Data, and Economic Calendar).

Heatmap uses TradingView's S&P 500 dataset rather than an arbitrary watchlist. Calendar uses country and importance filters in `ECONOMIC_CALENDAR_WIDGET_CONFIG`. News Feed uses the general feed on the dashboard and a symbol filter on detail pages. These widgets do not accept the same grouped symbol list as Overview and Market Data.

TradingView controls data coverage and availability. Successful script loading does not guarantee every instrument or fundamental dataset is available. No market data is fabricated or cached by this application.
