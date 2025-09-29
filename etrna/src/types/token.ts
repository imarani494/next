
export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  volume24h: number;
  marketCap: number;
  liquidity: number;
  age: number;
  holders: number;
  isNew: boolean;
  isFinalStretch: boolean;
  isMigrated: boolean;
  tags: string[];
  lastUpdated: string; // Change from Date to string
}

export type SortField = keyof Token | "default";
export type SortDirection = "asc" | "desc";

export interface TokensState {
  tokens: Token[];
  filteredTokens: Token[];
  loading: boolean;
  error: string | null;
  sortField: SortField;
  sortDirection: SortDirection;
  searchQuery: string;
}
