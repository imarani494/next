
"use client";

import { Provider } from "react-redux";
import { store } from "@/src/store";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <TooltipProvider>{children}</TooltipProvider>
    </Provider>
  );
}
