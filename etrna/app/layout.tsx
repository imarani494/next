import { Inter } from "next/font/google";

import "./globals.css";
import { ReduxProvider } from "@/src/components/providers/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axiom Trade - Token Discovery",
  description: "Discover and trade tokens with real-time data"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
