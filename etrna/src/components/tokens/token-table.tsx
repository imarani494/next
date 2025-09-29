"use client";

import { memo, useCallback, useState } from "react";

import { Token } from "@/src/types/token";
import { TokenTableSkeleton } from "../ui/skeleton";
import { TokenRow } from "./token-row";
import { useTokens } from "@/src/hooks/use-tokens";
import { cn } from "@/src/lib/utils";

interface TokenTableProps {
  className?: string;
}

export const TokenTable = memo(function TokenTable({
  className
}: TokenTableProps) {
  const { filteredTokens, loading, handleSort } = useTokens();
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleTokenClick = useCallback((token: Token) => {
    setSelectedToken(token);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedToken(null);
  }, []);

  const columns = [
    { key: "name", label: "Token", sortable: true },
    { key: "price", label: "Price", sortable: true },
    { key: "priceChange24h", label: "24h %", sortable: true },
    { key: "volume24h", label: "24h Volume", sortable: true },
    { key: "marketCap", label: "Market Cap", sortable: true },
    { key: "liquidity", label: "Liquidity", sortable: true },
    { key: "age", label: "Age", sortable: true },
    { key: "holders", label: "Holders", sortable: true }
  ] as const;

  if (loading) {
    return <TokenTableSkeleton />;
  }

  return (
    <>
      <div
        className={cn(
          "w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800",
          className
        )}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800/50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column.label}</span>
                      {column.sortable && (
                        <span className="text-gray-400">↕️</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredTokens.map((token) => (
                <TokenRow
                  key={token.id}
                  token={token}
                  onTokenClick={handleTokenClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal would go here - simplified for now */}
    </>
  );
});
