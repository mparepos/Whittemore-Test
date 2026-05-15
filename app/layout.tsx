import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "Whittemore Company, Inc. — U.S. Perlite & Vermiculite Manufacturer",
  description:
    "U.S. manufacturer of expanded perlite and vermiculite for horticulture, construction, industrial, environmental, and pool applications since 1919.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MobileBottomBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
