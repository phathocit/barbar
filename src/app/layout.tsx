import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XTECHBAR — The Art of a Beautiful Evening",
  description:
    "Discover the XTECHBAR sanctuary: bespoke cocktail alchemy, an intimate velvet lounge, and unforgettable nocturnal elegance.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#100e0c" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
