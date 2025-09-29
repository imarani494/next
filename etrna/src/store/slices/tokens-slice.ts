
"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, TokensState, SortField } from "@/types/token";

const initialState: TokensState = {
  tokens: [],
  filteredTokens: [],
  loading: false,
  error: null,
  sortField: "default",
  sortDirection: "desc",
  searchQuery: ""
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
      state.filteredTokens = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSortField: (state, action: PayloadAction<SortField>) => {
      if (state.sortField === action.payload) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortField = action.payload;
        state.sortDirection = "desc";
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredTokens = state.tokens.filter(
        (token) =>
          token.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          token.symbol.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    updateTokenPrice: (
      state,
      action: PayloadAction<{
        id: string;
        price: number;
        priceChange24h: number;
      }>
    ) => {
      const { id, price, priceChange24h } = action.payload;
      const tokenIndex = state.tokens.findIndex((token) => token.id === id);
      if (tokenIndex !== -1) {
        state.tokens[tokenIndex].price = price;
        state.tokens[tokenIndex].priceChange24h = priceChange24h;
        state.tokens[tokenIndex].priceChangePercentage24h =
          (priceChange24h / (price - priceChange24h)) * 100;
      }
    }
  }
});

export const {
  setTokens,
  setLoading,
  setError,
  setSortField,
  setSearchQuery,
  updateTokenPrice
} = tokensSlice.actions;

export default tokensSlice.reducer;
