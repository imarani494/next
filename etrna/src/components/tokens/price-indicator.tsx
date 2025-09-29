
'use client';

import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

interface PriceIndicatorProps {
  price: number;
  previousPrice: number;
  className?: string;
}

export function PriceIndicator({ price, previousPrice, className }: PriceIndicatorProps) {
  const [colorClass, setColorClass] = useState('text-gray-600');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (price > previousPrice) {
      setColorClass('text-green-500');
    } else if (price < previousPrice) {
      setColorClass('text-red-500');
    } else {
      setColorClass('text-gray-600');
    }

    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 1000);
    return () => clearTimeout(timer);
  }, [price, previousPrice]);

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-in-out',
        isUpdating && 'scale-105',
        colorClass,
        className
      )}
    >
      ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
    </div>
  );
}