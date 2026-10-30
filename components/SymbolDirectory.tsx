"use client";

import { useState } from "react";
import Link from "next/link";
import { MARKET_SYMBOL_GROUPS, symbolHref } from "@/lib/market-symbols";

export default function SymbolDirectory() {
  const [query, setQuery] = useState("");
  const groups = MARKET_SYMBOL_GROUPS.map(group => ({
    ...group,
    symbols: group.symbols.filter(symbol =>
      `${group.sectionName} ${symbol}`.toLowerCase().includes(query.trim().toLowerCase())),
  })).filter(group => group.symbols.length);

  return (
    <section className="space-y-6" aria-labelledby="symbols-heading">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id="symbols-heading" className="text-2xl font-semibold text-gray-100">Your symbols</h2>
        <label className="flex items-center gap-3 text-sm">
          Find a symbol
          <input type="search" value={query} onChange={event => setQuery(event.target.value)}
            placeholder="Ticker or category" className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(group => (
          <div key={group.sectionName} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
            <h3 className="mb-4 font-semibold text-gray-100">{group.sectionName}</h3>
            <div className="flex flex-wrap gap-2">
              {group.symbols.map(symbol => <Link key={symbol} href={symbolHref(symbol)}
                className="rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-gray-700 hover:text-yellow-500">
                {symbol.split(":").pop()}
              </Link>)}
            </div>
          </div>
        ))}
      </div>
      {!groups.length && <p role="status">No matching symbols.</p>}
    </section>
  );
}
