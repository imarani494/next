
"use client";

import { memo } from "react";

import { TokenBadge } from "./token-badge";
import { PriceIndicator } from "./price-indicator";

import { Token } from "@/src/types/token";
import { cn } from "@/src/lib/utils";

interface TokenRowProps {
  token: Token;
  onTokenClick: (token: Token) => void;
}

export const TokenRow = memo(function TokenRow({
  token,
  onTokenClick
}: TokenRowProps) {
  const handleClick = () => {
    onTokenClick(token);
  };

  return (
    <tr
      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group"
      onClick={handleClick}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {token.symbol.slice(0, 3)}
          </div>
          <div className="ml-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {token.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {token.symbol}
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              {token.isNew && <TokenBadge type="new" />}
              {token.isFinalStretch && <TokenBadge type="final-stretch" />}
              {token.isMigrated && <TokenBadge type="migrated" />}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <PriceIndicator
          price={token.price}
          previousPrice={token.price - token.priceChange24h}
          className="text-sm font-mono"
        />
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className={cn(
            "text-sm font-mono",
            token.priceChange24h > 0
              ? "text-green-500"
              : token.priceChange24h < 0
              ? "text-red-500"
              : "text-gray-500"
          )}
        >
          {token.priceChange24h > 0 ? "+" : ""}
          {token.priceChangePercentage24h.toFixed(2)}%
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white font-mono">
          ${token.volume24h.toLocaleString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white font-mono">
          ${token.marketCap.toLocaleString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white font-mono">
          ${token.liquidity.toLocaleString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white">
          {token.age}d
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white font-mono">
          {token.holders.toLocaleString()}
        </div>
      </td>
    </tr>
  );
});
