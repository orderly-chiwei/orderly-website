/**
 * Orderly – single source of truth for shared constants & utilities.
 * Both the desktop (Frame1618872018) and the mobile (MobileHomePage)
 * import from here so data is never duplicated.
 */

// ── Public URLs ──────────────────────────────────────────────────────────────
export const AI_URL        = "https://orderly.network/skill.md";
export const NPX_CMD       = "npx @orderly.network/mcp-server init";
export const ORDER_BUY_URL = "https://app.orderly.network/staking";

// ── DEX card links (mobile carousel) ────────────────────────────────────────
export const DEX_URLS: Record<string, string> = {
  Aden:            "https://aden.finance/",
  "WOOFi Pro":     "https://woofi.com/about/",
  Raydium:         "https://raydium.io/swap",
  Quickswap:       "https://quickswap.exchange/",
  "What.Exchange": "https://www.what.exchange/",
  VOOI:            "https://vooi.io/",
  Kodiak:          "https://perps.kodiak.finance/",
  Perptools:       "https://app.perptools.ai/",
  Zetarium:        "https://www.zdex.world/",
};

// ── Social links (ordered to match the icon row in both frames) ──────────────
export const SOCIAL_LINKS: string[] = [
  "https://discord.com/invite/OrderlyNetwork",
  "https://t.me/Orderly_Discussions",
  "https://github.com/OrderlyNetwork",
  "https://www.youtube.com/@Orderly.Network",
  "https://www.linkedin.com/company/orderly-network",
  "https://t.me/Orderly_Discussions",
  "https://x.com/OrderlyNetwork",
];

// ── Nav links (hamburger drawer on mobile, used in desktop nav dropdown) ─────
export const NAV_LINKS: { label: string; href: string; external: boolean }[] = [
  { label: "Orderly One",   href: "https://dex.orderly.network/",      external: true  },
  { label: "My DEX",        href: "https://dex.orderly.network/dex",   external: true  },
  { label: "Documentation", href: "https://orderly.network/docs/introduction/getting-started/what-is-orderly", external: true  },
  { label: "GitHub",        href: "https://github.com/OrderlyNetwork",  external: true  },
  { label: "FAQ",           href: "/faq",                               external: false },
];

// ── Footer nav sections (mobile accordion + desktop footer columns) ───────────
export const FOOTER_NAV: Record<string, { label: string; href: string; external: boolean }[]> = {
  Builders: [
    { label: "Orderly One",   href: "https://dex.orderly.network/",              external: true  },
    { label: "My DEX",        href: "https://dex.orderly.network/dex",           external: true  },
    { label: "Documentation", href: "https://orderly.network/docs/introduction/getting-started/what-is-orderly",         external: true  },
    { label: "GitHub",        href: "https://github.com/OrderlyNetwork",          external: true  },
    { label: "FAQ",           href: "/faq",                                       external: false },
  ],
  Ecosystem: [
    { label: "Partners",     href: "https://orderly.network/partners/",                                         external: true  },
    { label: "Listings",     href: "https://orderly.network/listing/",                                          external: true  },
    { label: "Case Studies", href: "https://dex.orderly.network/case-studies",                                  external: true  },
    { label: "Governance",   href: "https://snapshot.box/#/s:orderlygov.eth",                                   external: true  },
    { label: "Staking",      href: ORDER_BUY_URL,                                                               external: true  },
    { label: "Blog",         href: "https://orderly.network/blog/",                                             external: true  },
    { label: "Team",         href: "https://orderly.network/team/",                                             external: true  },
    { label: "FAQ",          href: "/faq",                                                                       external: false },
  ],
  Traders: [
    { label: "Live DEXs", href: "https://dex.orderly.network/board/",                                           external: true },
    { label: "Dashboard", href: "https://orderly-dashboard.orderly.network/",                                   external: true },
    { label: "Explorer",  href: "https://explorer.orderly.network/",                                            external: true },
    { label: "Campaigns", href: "https://app.orderly.network/campaigns",                                        external: true },
    { label: "Vaults",    href: "http://app.orderly.network/vaults",                                            external: true },
    { label: "API",       href: "https://orderly.network/docs/build-on-omnichain/evm-api/introduction",         external: true },
  ],
  About: [
    { label: "Blog", href: "https://orderly.network/blog/", external: true  },
    { label: "Team", href: "https://orderly.network/team/", external: true  },
    { label: "FAQ",  href: "/faq",                          external: false },
  ],
};

// ── Utilities ────────────────────────────────────────────────────────────────

/** Copy to clipboard with execCommand fallback (works in restricted iframes) */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { /* fall through */ }
  }
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

export function openUrl(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}