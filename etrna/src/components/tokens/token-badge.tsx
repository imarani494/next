
"use client";

import { cn } from "@/src/lib/utils";



interface TokenBadgeProps {
  type: "new" | "final-stretch" | "migrated";
  className?: string;
}

export function TokenBadge({ type, className }: TokenBadgeProps) {
  const config = {
    new: {
      label: "New",
      className:
        "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
    },
    "final-stretch": {
      label: "Final Stretch",
      className:
        "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-800"
    },
    migrated: {
      label: "Migrated",
      className:
        "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-800"
    }
  }[type];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
