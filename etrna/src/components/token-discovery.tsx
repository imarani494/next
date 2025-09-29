
'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';






import { TokenTable } from './tokens/token-table';
import { SearchBar } from './tokens/search-bar';
import { useTokens } from '../hooks/use-tokens';
import { useWebSocket } from '../hooks/use-websocket';
import { mockTokens } from '../lib/constants';
import { setLoading, setTokens } from '../store/slices/tokens-slice';

export default function TokenDiscovery() {
  const dispatch = useDispatch();
  const { loading } = useTokens();

  // Initialize WebSocket connection
  useWebSocket();

  // Load mock data
  useEffect(() => {
    const loadTokens = async () => {
      dispatch(setLoading(true));
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(setTokens(mockTokens));
      } catch (error) {
        console.error('Failed to load tokens:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadTokens();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Token Discovery
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover new tokens, track performance, and find trading opportunities
          </p>
        </div>

        <div className="mb-6">
          <SearchBar />
        </div>

        <TokenTable/>
      </div>
    </div>
  );
}