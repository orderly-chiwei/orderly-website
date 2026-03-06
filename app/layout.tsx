import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Orderly | Own The Exchange",
  description: "Omnichain orderbook infrastructure for DeFi",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/macbook-poster.webp" as="image" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" href="/images/macbook-static-mobile.webp" as="image" type="image/webp" media="(max-width: 767px)" />
      </head>
      <body className="bg-black">
        <div style={{ width: "100vw", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
