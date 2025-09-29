
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTokenPrice } from '../store/slices/tokens-slice';


interface PriceUpdate {
  id: string;
  price: number;
  priceChange24h: number;
  timestamp: number;
}

export const useWebSocket = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    const interval = setInterval(() => {
    
      const mockUpdates = [
        {
          id: '1',
          price: 3250.42 + (Math.random() - 0.5) * 50,
          priceChange24h: 125.32 + (Math.random() - 0.5) * 10,
          timestamp: Date.now(),
        },
        {
          id: '2',
          price: 2.45 + (Math.random() - 0.5) * 0.1,
          priceChange24h: -0.12 + (Math.random() - 0.5) * 0.05,
          timestamp: Date.now(),
        },
        {
          id: '3',
          price: 42850.75 + (Math.random() - 0.5) * 200,
          priceChange24h: 850.25 + (Math.random() - 0.5) * 50,
          timestamp: Date.now(),
        },
        {
          id: '4',
          price: 102.45 + (Math.random() - 0.5) * 5,
          priceChange24h: 5.25 + (Math.random() - 0.5) * 2,
          timestamp: Date.now(),
        },
        {
          id: '5',
          price: 1.85 + (Math.random() - 0.5) * 0.1,
          priceChange24h: -0.08 + (Math.random() - 0.5) * 0.05,
          timestamp: Date.now(),
        },
      ];

      mockUpdates.forEach(update => {
        dispatch(updateTokenPrice(update));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);
};