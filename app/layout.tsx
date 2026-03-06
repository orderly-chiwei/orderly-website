import type { Metadata } from "next";
import "@/styles/index.css";

const SITE_URL = "https://orderly.network";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Orderly | Own The Exchange",
    template: "%s | Orderly Network",
  },
  description:
    "Omnichain orderbook infrastructure for DeFi. Launch your own perp DEX with shared liquidity across 17+ chains.",
  keywords: [
    "Orderly Network",
    "DeFi",
    "orderbook",
    "perpetual futures",
    "omnichain",
    "DEX",
    "liquidity",
    "ORDER token",
  ],
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon-fallback.png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Orderly Network",
    title: "Orderly | Own The Exchange",
    description:
      "Omnichain orderbook infrastructure for DeFi. Launch your own perp DEX with shared liquidity across 17+ chains.",
    url: SITE_URL,
    images: [
      {
        url: "/images/OG.jpg",
        width: 1200,
        height: 630,
        alt: "Orderly Network - Own The Exchange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OrderlyNetwork",
    title: "Orderly | Own The Exchange",
    description:
      "Omnichain orderbook infrastructure for DeFi. Launch your own perp DEX with shared liquidity across 17+ chains.",
    images: ["/images/OG.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
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
        <link rel="help" href="https://orderly.network/skill.md" type="text/markdown" title="Orderly Network Agent Skill" />
        <link rel="preload" href="/images/macbook-poster.webp" as="image" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" href="/images/macbook-static-mobile.webp" as="image" type="image/webp" media="(max-width: 767px)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Orderly Network",
                  url: "https://orderly.network",
                  logo: "https://orderly.network/images/favicon.svg",
                  sameAs: [
                    "https://x.com/OrderlyNetwork",
                    "https://discord.com/invite/OrderlyNetwork",
                    "https://github.com/OrderlyNetwork",
                    "https://www.youtube.com/@Orderly.Network",
                    "https://www.linkedin.com/company/orderly-network",
                    "https://t.me/Orderly_Discussions",
                  ],
                  description:
                    "Omnichain orderbook infrastructure for DeFi. Launch your own perp DEX with shared liquidity across 17+ chains.",
                },
                {
                  "@type": "WebSite",
                  name: "Orderly Network",
                  url: "https://orderly.network",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black">
        <div style={{ width: "100vw", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
