
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { RootState } from "@reduxjs/toolkit/query";
import { SortField } from "../types/token";
import { setSearchQuery, setSortField } from "../store/slices/tokens-slice";

export const useTokens = () => {
  const dispatch = useDispatch();
  const tokensState = useSelector((state:RootState) => state.tokens);

  const handleSort = useCallback(
    (field: SortField) => {
      dispatch(setSortField(field));
    },
    [dispatch]
  );

  const handleSearch = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );

  return {
    ...tokensState,
    handleSort,
    handleSearch
  };
};
