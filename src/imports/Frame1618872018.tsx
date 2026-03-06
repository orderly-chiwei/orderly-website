'use client';

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { useOrderlyStats, formatLargeNumber } from "@/app/hooks/useOrderlyStats";
import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { useNewsletterSubscribe } from "@/app/hooks/useNewsletterSubscribe";
// Lightweight inline check icon (replaces heavy MUI Check)
const CheckSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
import svgPaths from "./svg-kykn6znl0w";
import ImportedWhyContent from "./WhyContent";
const imgMacBook11 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/pooBPQAAAABJRU5ErkJggg==";
import MacbookVideo from "@/app/components/MacbookVideo";
const imgYtIconWhiteDigital1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/pooBPQAAAABJRU5ErkJggg==";
import { imgGroup } from "./svg-z9q1x";
import QuickStartGroup from "./Group1597879965";
import IcSocialYoutubeS from "./IcSocialYoutubeS24";

// ─── SVG asset imports ────────────────────────────────────────────────────────
const ethBadgeSrc = "/images/svg/EthBadge.svg";
const arbBadgeSrc = "/images/svg/ArbBadge.svg";
const solBadgeSrc = "/images/svg/SolBadge.svg";
import UniswapLogo from "./UniswapLogo";
const pancakeLogoSrc = "/images/svg/PancakeLogo.svg";
import CamelotLogo from "./CamelotLogo";
const raydiumLogoSrc = "/images/svg/RaydiumLogo.svg";
const woofiLogoSrc = "/images/svg/WOOFiLogo.svg";

// ─── Buy ORDER Modal ──────────────────────────────────────────────────────────
const fontRegularBuy = { fontFamily: "'Atyp BL', 'Atyp_BL:Regular', sans-serif" };
const fontMediumBuy = { fontFamily: "'Atyp BL', 'Atyp_BL:Medium', sans-serif" };

// ── Chain network badges ────────────────────────────────────────────────────
function EthBadge() {
  return (
    <img src={ethBadgeSrc} width={22} height={22} alt="Ethereum" className="shrink-0 rounded-[6px]" />
  );
}
function ArbBadge() {
  return (
    <img src={arbBadgeSrc} width={22} height={22} alt="Arbitrum" className="shrink-0 rounded-[6px]" />
  );
}
function SolBadge() {
  return (
    <img src={solBadgeSrc} width={22} height={22} alt="Solana" className="shrink-0 rounded-[6px]" />
  );
}

// ── Exchange logo icons ─────────────────────────────────────────────────────
function PancakeSwapLogo() {
  return (
    <img src={pancakeLogoSrc} width={44} height={44} alt="PancakeSwap" className="shrink-0 rounded-full" />
  );
}
function RadyiumLogo() {
  return (
    <img src={raydiumLogoSrc} width={44} height={44} alt="Raydium" className="shrink-0 rounded-full" />
  );
}
function WoofLogo() {
  return (
    <img src={woofiLogoSrc} width={44} height={44} alt="WOOFi" className="shrink-0 rounded-full" />
  );
}
function ExternalArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M7 3h6v6" stroke="#9c75ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BUY_EXCHANGES = [
  { name: "Uniswap", logo: <UniswapLogo />, badge: <EthBadge />, url: "https://app.uniswap.org/swap?outputCurrency=ORDER" },
  { name: "PancakeSwap", logo: <PancakeSwapLogo />, badge: <EthBadge />, url: "https://pancakeswap.finance/swap?outputCurrency=ORDER" },
  { name: "Camelot", logo: <CamelotLogo className="relative size-[44px] shrink-0 rounded-full overflow-hidden" />, badge: <ArbBadge />, url: "https://app.camelot.exchange/" },
  { name: "Raydium", logo: <RadyiumLogo />, badge: <SolBadge />, url: "https://raydium.io/swap/" },
  { name: "WOOFi", logo: <WoofLogo />, badge: null, url: "https://fi.woo.org/" },
];

export function BuyOrderModal({ onClose }: { onClose: () => void }) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-[16px]"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative bg-[#14151a] rounded-[28px] w-full max-w-[460px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-[28px] pt-[28px] pb-[20px]">
          <div>
            <h2 className="text-[24px] text-white tracking-[0.24px]" style={{ fontFamily: "'Atyp BL', sans-serif", fontWeight: 700 }}>
              Buy ORDER
            </h2>
            <p className="text-[13px] text-[#9c9fae] mt-[4px] tracking-[0.13px]" style={fontRegularBuy}>
              Select an exchange to purchase ORDER tokens.
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 ml-[16px] -mt-[2px] -mr-[4px] text-[#9c9fae] hover:text-white hover:bg-white/[0.08] transition-all bg-transparent border-0 cursor-pointer rounded-full p-[8px]"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-[28px] h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* Exchange list — single column for clean scannability */}
        <div className="px-[20px] py-[16px] flex flex-col gap-[6px]">
          {BUY_EXCHANGES.map((ex) => (
            <a
              key={ex.name}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] no-underline rounded-[16px] px-[12px] py-[12px] transition-all duration-200 group"
              style={{ background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(156,117,255,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              {/* Logo with chain badge overlaid at top-left */}
              <div className="relative shrink-0">
                {ex.logo}
                {ex.badge && (
                  <div className="absolute -top-[5px] -left-[5px] z-10 ring-[2px] ring-[#14151a] rounded-[5px]">
                    {ex.badge}
                  </div>
                )}
              </div>

              {/* Exchange name */}
              <span className="text-[15px] text-white tracking-[0.01em] flex-1" style={fontMediumBuy}>
                {ex.name}
              </span>

              {/* External arrow — slides right on hover */}
              <span className="shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-[3px] transition-all duration-200">
                <ExternalArrow />
              </span>
            </a>
          ))}
        </div>

        {/* Bottom padding */}
        <div className="pb-[12px]" />
      </motion.div>
    </motion.div>,
    document.body
  );
}
// ─────────────────────────────────────────────────────────────────────────────

function BackgroundVector() {
  return (
    <div className="relative size-full" data-name="Background Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410.8 411.123">
        <g id="Background Vector">
          <path clipRule="evenodd" d={svgPaths.p35ce3400} fill="var(--fill-0, #3F0086)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2dfaa900} fill="var(--fill-0, #3F0086)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p224a2400} fill="var(--fill-0, #3F0086)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p17eb8e00} fill="var(--fill-0, #3F0086)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundVector1() {
  return (
    <div className="relative size-full" data-name="Background Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.648 268.859">
        <g id="Background Vector">
          <path clipRule="evenodd" d={svgPaths.p14311f80} fill="var(--fill-0, #9C75FF)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3f344f00} fill="var(--fill-0, #9C75FF)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p30ec3400} fill="var(--fill-0, #9C75FF)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p381f300} fill="var(--fill-0, #9C75FF)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

export function HeaderLogo() {
  return (
    <Link href="/" className="h-[29.999px] relative shrink-0 w-[110.959px] block hover:opacity-80 transition-opacity" data-name="Header Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.959 30">
        <g id="Header Logo">
          <g id="Header Logo Icon">
            <path clipRule="evenodd" d={svgPaths.p2e91d6c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p1cb01400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p372a0f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p36527e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          </g>
          <g id="Orderly">
            <path d={svgPaths.p9fe1400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29849280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p62d8980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11866a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18cd57f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3eee1700} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </Link>
  );
}

function HeaderLogoContainer() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-center relative shrink-0" data-name="Header Logo Container">
      <HeaderLogo />
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <div
      className={`overflow-clip relative shrink-0 size-[12px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      data-name="Header Menu Item Icon"
    >
      <div className="-translate-y-1/2 absolute flex h-[7.778px] items-center justify-center left-[17.68%] right-[17.5%] top-[calc(50%-1.63px)]">
        <div className="-rotate-45 flex-none size-[5.5px]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0_-13.64%_-13.64%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
                <path d={svgPaths.p3b158500} id="Vector 10" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type DropdownItem = { label: string; href: string };

function useMenuHover() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  return { open, handleEnter, handleLeave };
}

function DropdownPanel({ items, onEnter, onLeave }: { items: DropdownItem[]; onEnter: () => void; onLeave: () => void }) {
  return (
    <div
      className="absolute top-full left-0 z-50 pt-[4px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="bg-[#3f0086] flex flex-col gap-[15px] items-start justify-center px-[15px] py-[20px] rounded-[8px] min-w-[160px]">
        {items.map((item) => {
          const isInternal = item.href.startsWith("/");
          const linkClass = "content-stretch flex items-center relative shrink-0 w-full no-underline group";
          const inner = (
            <p
              className="font-['Atyp_BL:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-white group-hover:text-purple-300 transition-colors"
              style={{ letterSpacing: '0.042em' }}
            >
              {item.label}
            </p>
          );
          return isInternal ? (
            <Link key={item.label} href={item.href} className={linkClass}>{inner}</Link>
          ) : (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{inner}</a>
          );
        })}
      </div>
    </div>
  );
}

function MenuCell() {
  const { open, handleEnter, handleLeave } = useMenuHover();
  return (
    <div
      className="content-stretch flex gap-[2px] h-[50px] items-baseline pb-[10px] pt-[16px] relative shrink-0 cursor-pointer"
      data-name="Menu cell"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header Menu Item">
        <div className="content-stretch flex items-center relative shrink-0" data-name="Header Menu Item Text">
          <p className="font-['Atyp_Text:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" style={{ letterSpacing: '0.042em' }}>Builders</p>
        </div>
      </div>
      <ChevronIcon open={open} />
      {open && (
        <DropdownPanel
          onEnter={handleEnter}
          onLeave={handleLeave}
          items={[
            { label: "Orderly One", href: "https://dex.orderly.network/" },
            { label: "My DEX", href: "https://dex.orderly.network/dex" },
            { label: "Documentation", href: "https://orderly.network/docs/introduction/getting-started/what-is-orderly" },
            { label: "GitHub", href: "https://github.com/OrderlyNetwork" },
          ]}
        />
      )}
    </div>
  );
}

function MenuCell1() {
  const { open, handleEnter, handleLeave } = useMenuHover();
  return (
    <div
      className="content-stretch flex gap-[2px] h-[50px] items-baseline pb-[10px] pt-[16px] relative shrink-0 cursor-pointer"
      data-name="Menu cell"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header Menu Item">
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Header Menu Item Text">
          <p className="font-['Atyp_Text:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" style={{ letterSpacing: '0.042em' }}>Ecosystem</p>
        </div>
      </div>
      <ChevronIcon open={open} />
      {open && (
        <DropdownPanel
          onEnter={handleEnter}
          onLeave={handleLeave}
          items={[
            { label: "Partners", href: "https://orderly.network/partners/" },
            { label: "Listings", href: "https://orderly.network/listing/" },
            { label: "Case Studies", href: "https://dex.orderly.network/case-studies" },
            { label: "Governance", href: "https://snapshot.box/#/s:orderlygov.eth" },
            { label: "Staking", href: "https://app.orderly.network/staking" },
            { label: "Blog", href: "https://orderly.network/blog/" },
            { label: "Team", href: "https://orderly.network/team/" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
      )}
    </div>
  );
}

function MenuCell2() {
  const { open, handleEnter, handleLeave } = useMenuHover();
  return (
    <div
      className="content-stretch flex gap-[2px] h-[50px] items-baseline pb-[10px] pt-[16px] relative shrink-0 cursor-pointer"
      data-name="Menu cell"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header Menu Item">
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Header Menu Item Text">
          <p className="font-['Atyp_Text:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" style={{ letterSpacing: '0.042em' }}>Traders</p>
        </div>
      </div>
      <ChevronIcon open={open} />
      {open && (
        <DropdownPanel
          onEnter={handleEnter}
          onLeave={handleLeave}
          items={[
            { label: "Live DEXs", href: "https://dex.orderly.network/board/" },
            { label: "Dashboard", href: "https://orderly-dashboard.orderly.network/" },
            { label: "Explorer", href: "https://explorer.orderly.network/" },
            { label: "Campaigns", href: "https://app.orderly.network/campaigns" },
            { label: "Vaults", href: "http://app.orderly.network/vaults" },
            { label: "API", href: "https://orderly.network/docs/build-on-omnichain/evm-api/introduction" },
          ]}
        />
      )}
    </div>
  );
}

function HeaderMenuItemText3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Header Menu Item Text">
      <p className="font-['Atyp_Text:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white">Docs</p>
    </div>
  );
}

function HeaderMenuItem3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header Menu Item">
      <HeaderMenuItemText3 />
    </div>
  );
}

function MenuCell3() {
  return (
    <a
      href="https://orderly.network/docs/introduction/getting-started/what-is-orderly"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex h-[50px] items-baseline pb-[10px] pt-[16px] relative shrink-0 no-underline"
      data-name="Menu cell"
    >
      <HeaderMenuItem3 />
    </a>
  );
}

function HeaderMenu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center justify-end min-h-px min-w-px relative" data-name="Header Menu">
      <MenuCell />
      <MenuCell1 />
      <MenuCell2 />
      <MenuCell3 />
      <a
        href="https://dex.orderly.network/dex/"
        target="_blank"
        rel="noopener noreferrer"
        className="content-stretch flex h-[40px] items-center justify-center px-[20px] py-[12px] relative rounded-[46px] shrink-0 no-underline hover:opacity-90 transition-opacity"
        data-name="Button"
        style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(-89.1975deg, rgb(72, 189, 255) 0%, rgb(120, 108, 255) 47.763%, rgb(189, 0, 255) 99.638%)" }}
      >
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#3f0086] text-[16px] tracking-[0.16px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05'" }}>
          Launch Now
        </p>
      </a>
    </div>
  );
}

function Default() {
  return (
    <div className="absolute backdrop-blur-[8.65px] content-stretch flex gap-[58px] h-[100px] items-center left-[81.9px] p-[40px] rounded-[130px] top-[50px] w-[1278px] z-[100]" data-name="Default">
      <HeaderLogoContainer />
      <HeaderMenu />
    </div>
  );
}

function HeroTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center text-white w-full whitespace-nowrap" data-name="Hero Text Container">
      <div className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-none relative shrink-0 text-[96px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05'" }}>
        <p className="mb-0">LAUNCH YOUR</p>
        <p>OWN PERP DEX</p>
      </div>
      <div className="font-['Atyp_BL:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[24px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        <p className="mb-0">{`Launch a perpetuals DEX on any chain — `}</p>
        <p>with shared liquidity, zero infra cost, and fees that go to you.</p>
      </div>
    </div>
  );
}

function HeroButtonsContainer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Hero Buttons Container">
      <a
        href="https://dex.orderly.network/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#6700ce] content-stretch flex h-[52px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 no-underline hover:opacity-90 transition-opacity"
        data-name="build with orderly"
      >
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white" style={{ fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", letterSpacing: '0.01em', fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Start Building
        </p>
      </a>
      <a
        href={`mailto:midoji@orderly.network?subject=${encodeURIComponent("Partnership Inquiry from Orderly Website")}&body=${encodeURIComponent("First Name:\nLast Name:\nEmail:\nTelegram ID:\nCompany / Project:\nMessage:\n")}`}
        className="content-stretch flex h-[52px] items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[24px] shrink-0 hover:bg-white/10 transition-colors bg-transparent border-0 cursor-pointer no-underline"
        data-name="Trade on Orderly"
      >
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Talk to Partnerships
        </p>
      </a>
    </div>
  );
}

function Frame({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-[calc(50%-0.1px)] pl-[100px] pr-[80px] top-[201.78px] w-[1440px]" data-name="Frame">
      <HeroTextContainer />
      <HeroButtonsContainer onOpenModal={onOpenModal} />
    </div>
  );
}

function FeatureTag() {
  return (
    <div className="absolute backdrop-blur-[30px] bg-gradient-to-t content-stretch flex from-[39.314%] from-[rgba(156,117,255,0.6)] gap-[16px] items-center justify-center left-[1090.19px] px-[40px] py-[30px] rounded-[124px] to-[rgba(156,117,255,0)] top-[667.98px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[124px] shadow-[18px_23px_40px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[14.418px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.418 14.418">
          <g id="Ellipse 6009">
            <circle cx="7.20898" cy="7.20898" fill="var(--fill-0, #FF375B)" r="7.20898" />
            <circle cx="7.20898" cy="7.20898" fill="var(--fill-1, #44DED3)" r="7.20898" />
          </g>
        </svg>
      </div>
      <p className="capitalize font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Deep Liquidity
      </p>
    </div>
  );
}

function FeatureTag1() {
  return (
    <div className="absolute backdrop-blur-[30px] bg-gradient-to-t content-stretch flex from-[39.314%] from-[rgba(156,117,255,0.6)] gap-[16px] items-center justify-center left-[1060.56px] px-[40px] py-[30px] rounded-[124px] to-[rgba(156,117,255,0)] top-[1129.98px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[124px] shadow-[18px_23px_40px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[14.418px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.418 14.418">
          <circle cx="7.20898" cy="7.20898" fill="var(--fill-0, #44DED3)" id="Ellipse 6009" r="7.20898" />
        </svg>
      </div>
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Customizable
      </p>
    </div>
  );
}

function FeatureTag2() {
  return (
    <div className="absolute backdrop-blur-[30px] bg-gradient-to-t content-stretch flex from-[rgba(156,117,255,0.6)] gap-[16px] items-center justify-center left-[50.9px] px-[40px] py-[30px] rounded-[124px] to-[133%] to-[rgba(156,117,255,0)] top-[1068.7px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[124px] shadow-[18px_23px_40px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[14.418px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.418 14.418">
          <circle cx="7.20898" cy="7.20898" fill="var(--fill-0, #44DED3)" id="Ellipse 6009" r="7.20898" />
        </svg>
      </div>
      <p className="capitalize font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        No-code
      </p>
    </div>
  );
}

function TrustedHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start not-italic relative shrink-0 text-white w-[949px] whitespace-pre-wrap" data-name="Trusted Header">
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] leading-[1.1] min-w-full relative shrink-0 text-[56px] w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Trusted by builders you know
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.504px] w-[1305.965px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        DEXs and protocols powered by the Orderly omnichain infrastructure.
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15.28%_20.97%_17.5%_22.72%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-9.813px_-3.84px] mask-size-[63.028px_63.232px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1566 33.6088">
        <g id="Group">
          <path d={svgPaths.p25752680} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[10.48%_10.76%_10.48%_10.45%]" data-name="Mask group">
      <Group />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[#eda320] content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[50px]" data-name="logos">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <path d={svgPaths.p159d700} fill="var(--fill-0, #EDA320)" id="Vector" />
        </svg>
        <MaskGroup />
      </div>
    </div>
  );
}

function DexCard() {
  return (
    <a href="https://perps.kodiak.finance/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <img src="/images/logos/kodiak.jpg" width={64} height={64} alt="Kodiak" className="shrink-0 rounded-full" />
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
            <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>Kodiak</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function LogoContainer1() {
  return (
    <div className="bg-[#00a9de] content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <div className="h-[24px] relative shrink-0 w-[36px]" data-name="logos">
        <div className="absolute inset-[0_25.05%_0_0.77%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7046 24">
            <path d={svgPaths.p242db200} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[40.38%_9.01%_0_60.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0815 14.3077">
            <path d={svgPaths.p2902e6c0} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0.78%_75.96%_77.55%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.79999 5.76923">
            <path d={svgPaths.p16602b80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        WOOFi Pro
      </p>
    </div>
  );
}

function DexCard1() {
  return (
    <a href="https://woofi.com/about/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <LogoContainer1 />
          <ProductInfo1 />
        </div>
      </div>
    </a>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6594 21.5469">
        <g id="Group">
          <path d={svgPaths.p32925072} fill="url(#paint0_linear_1_1105)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1105" x1="-13.8901" x2="28.033" y1="19.8203" y2="-4.64515">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[57.52%_36.14%_33.62%_53.54%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60568 5.67255">
        <g id="Group">
          <path d={svgPaths.p37222c00} fill="url(#paint0_linear_1_1110)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1110" x1="-18.1154" x2="23.8085" y1="15.6861" y2="-8.77976">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[57.52%_36.14%_33.62%_53.54%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <Group3 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[11.3%_17.12%_12.08%_16.52%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.4704 49.0355">
        <g id="Group">
          <path d={svgPaths.p9524100} fill="url(#paint0_linear_1_1193)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p1e2ecf00} fill="url(#paint1_linear_1_1193)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1193" x1="0.525762" x2="42.4492" y1="36.6041" y2="12.1385">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1193" x1="0.57342" x2="42.4959" y1="36.6855" y2="12.2205">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[11.3%_17.12%_12.08%_16.52%]" data-name="Group">
      <Group2 />
      <Group7 />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Raydium
      </p>
    </div>
  );
}

function DexCard2() {
  return (
    <a href="https://raydium.io/swap" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <div className="relative shrink-0 size-[64px]" data-name="Trusted Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
              <circle cx="32" cy="32" fill="var(--fill-0, #131A35)" id="Ellipse 3023" r="32" />
            </svg>
            <Group1 />
          </div>
          <ProductInfo2 />
        </div>
      </div>
    </a>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0_-0.11%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.1365 63.0002">
        <g id="Group 25979">
          <path d={svgPaths.p32308d00} fill="var(--fill-0, white)" id="Path 16214" />
          <path d={svgPaths.p292cff00} fill="var(--fill-0, #2188C6)" id="Path 16215" />
          <path d={svgPaths.pae67980} fill="var(--fill-0, #162B4E)" id="Path 16216" />
          <path d={svgPaths.pfd6a800} fill="var(--fill-0, #21326F)" id="Path 16217" />
          <path d={svgPaths.p1ca0eca0} fill="var(--fill-0, #162B4E)" id="Path 16218" />
          <path d={svgPaths.p19954300} fill="var(--fill-0, #3F0086)" id="Path 16219" />
          <path d={svgPaths.p302fff00} fill="var(--fill-0, #3A9DD7)" id="Path 16220" />
          <path d={svgPaths.pf00f700} fill="var(--fill-0, #162B4E)" id="Path 16221" />
          <path d={svgPaths.p307bc480} fill="var(--fill-0, #162B4E)" id="Path 16222" />
          <path d={svgPaths.p1decf400} fill="var(--fill-0, #2797D2)" id="Path 16223" />
          <path d={svgPaths.p2fc28400} fill="var(--fill-0, #162B4E)" id="Path 16224" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[63px]" data-name="logos">
        <Group8 />
      </div>
    </div>
  );
}

function ProductInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Quickswap
      </p>
    </div>
  );
}

function DexCard3() {
  return (
    <a href="https://quickswap.exchange/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <LogoContainer2 />
          <ProductInfo3 />
        </div>
      </div>
    </a>
  );
}

function Logos() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="logos">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <path d={svgPaths.pf993200} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function LogoContainer3() {
  return (
    <div className="bg-[#1e2026] content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <Logos />
    </div>
  );
}

function ProductInfo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        What.Exchange
      </p>
    </div>
  );
}

function DexCard4() {
  return (
    <a href="https://www.what.exchange/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <LogoContainer3 />
          <ProductInfo4 />
        </div>
      </div>
    </a>
  );
}

function LogoContainer4() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[63px]" data-name="logos">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <path clipRule="evenodd" d={svgPaths.p120b3880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ProductInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        VOOI
      </p>
    </div>
  );
}

function DexCard5() {
  return (
    <a href="https://vooi.io/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <LogoContainer4 />
          <ProductInfo5 />
        </div>
      </div>
    </a>
  );
}

function TrustedLogo() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-[34.958px]" data-name="Trusted Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.958 36">
        <g id="Trusted Logo">
          <path d={svgPaths.p10d1f180} fill="var(--fill-0, #0A0B0D)" id="Rectangle 376715171" />
          <path d={svgPaths.p25905b00} fill="var(--fill-0, #D6F22B)" id="Vector 8" />
          <path d={svgPaths.p3e251000} fill="var(--fill-0, #D6F22B)" id="Vector 9" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <TrustedLogo />
    </div>
  );
}

function ProductInfo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Kyrrio
      </p>
    </div>
  );
}

function DexCard6() {
  return (
    <a href="https://app.perptools.ai/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <img src="/images/logos/perpstool.jpg" width={64} height={64} alt="Perptools" className="shrink-0 rounded-full" />
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
            <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
              Perptools
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

function Component() {
  return (
    <div className="h-[78px] relative shrink-0 w-[79px]" data-name="_隔离模��">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 78">
        <g id="_éç¦»æ¨¡å¼">
          <path d={svgPaths.p2a69fc80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer6() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative rounded-[60px] shrink-0 size-[64px]" data-name="Logo Container">
      <Component />
    </div>
  );
}

function ProductInfo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        PerpsDAO
      </p>
    </div>
  );
}

function DexCard7() {
  return (
    <a href="https://www.zdex.world/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(20,21,26,0.7)] flex-[1_0_0] min-h-px min-w-[280px] relative rounded-[5px]" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[inherit] p-[20px] relative w-full">
          <img src="/images/logos/Zetarium.jpg" width={64} height={64} alt="Zetarium" className="shrink-0 rounded-full" />
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
            <p className="font-['Atyp_BL:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
              Zetarium
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

function Dex() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="DEX">
      <DexCard1 />
      <DexCard2 />
      <DexCard3 />
      <DexCard />
      <DexCard4 />
      <DexCard5 />
      <DexCard6 />
      <DexCard7 />
    </div>
  );
}

function TrustedList() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center ml-0 mt-0 relative row-1 w-[1302px]" data-name="Trusted List">
      <Dex />
    </div>
  );
}

function TrustedButtonContainer() {
  return (
    <a href="https://dex.orderly.network/board/" target="_blank" rel="noopener noreferrer" className="col-1 content-stretch flex gap-[7px] items-start justify-end ml-[6.1px] mt-[258px] relative row-1 w-[101.719px]" data-name="Trusted Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        View all
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Trusted Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function TrustedContent() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Trusted Content">
      <TrustedList />
      <TrustedButtonContainer />
    </div>
  );
}

function TrustedSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[80px] items-start left-[calc(50%-0.11px)] top-[4853px] w-[1302px]" data-name="Trusted Section">
      <TrustedHeader />
      <TrustedContent />
    </div>
  );
}

function HeroTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center text-white w-full" data-name="Hero Text Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] leading-[1.2] relative shrink-0 text-[86px] uppercase w-[1250.586px] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        The best time to launch was yesterday.
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[0.756px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        The second best time is now. Start earning from day one.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Start Building
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="interactive-button/Launch">
            <div className="absolute inset-[10.42%]" data-name="Union">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <a
      href="https://dex.orderly.network/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#6700ce] content-stretch flex h-[52px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 no-underline hover:opacity-90 transition-opacity"
      data-name="build with orderly"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white" style={{ fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", letterSpacing: '0.01em', fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Start Building
      </p>
    </a>
  );
}

function Frame5({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <a
      href={`mailto:midoji@orderly.network?subject=${encodeURIComponent("Partnership Inquiry from Orderly Website")}&body=${encodeURIComponent("First Name:\nLast Name:\nEmail:\nTelegram ID:\nCompany / Project:\nMessage:\n")}`}
      className="content-stretch flex h-[52px] items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[24px] shrink-0 hover:bg-white/10 transition-colors bg-transparent border-0 cursor-pointer no-underline"
      data-name="Trade on Orderly"
    >
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Talk to Partnerships
      </p>
    </a>
  );
}

function Frame6({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame4 />
      <Frame5 onOpenModal={onOpenModal} />
    </div>
  );
}

function Frame1({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-[calc(50%-0.11px)] px-[80px] top-[5510.5px] w-[1440px]" data-name="Frame">
      <HeroTextContainer1 />
      <Frame6 onOpenModal={onOpenModal} />
    </div>
  );
}

function Brandmark() {
  return (
    <div className="col-1 h-[47.94px] ml-0 mt-0 relative row-1 w-[47.998px]" data-name="Brandmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9978 47.9396">
        <g id="Brandmark">
          <path clipRule="evenodd" d={svgPaths.pdfa100} fill="var(--fill-0, white)" fillRule="evenodd" id="Intersect" />
          <path clipRule="evenodd" d={svgPaths.p6be8000} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p3fa2a600} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_2" />
          <path clipRule="evenodd" d={svgPaths.p1ebf2d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Logo">
      <Brandmark />
    </div>
  );
}

function Component1({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="bg-white col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 p-[12px] relative rounded-[63px] row-1 cursor-pointer hover:opacity-80 transition-opacity"
      data-name
      onClick={onClick}
    >
      <div className="flex flex-col font-['Atyp_BL:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        <p className="leading-[0.753]">Buy ORDER</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[14.667px]" data-name="Icon">
            <div className="absolute inset-[-8.52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1667 17.1667">
                <path d={svgPaths.p30a87c0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterStatus1({ onBuyOrder }: { onBuyOrder?: () => void }) {
  return (
    <div className="relative shrink-0" data-name="Footer Status">
      <Component1 onClick={onBuyOrder} />
    </div>
  );
}

const ORDER_PRICE_CACHE_KEY = "order_price";
const ORDER_PRICE_MAX_AGE = 60_000; // 1 minute

function getCachedPrice(): string | null {
  try {
    const raw = localStorage.getItem(ORDER_PRICE_CACHE_KEY);
    if (!raw) return null;
    const { value, ts } = JSON.parse(raw);
    if (Date.now() - ts < ORDER_PRICE_MAX_AGE) return value;
  } catch {}
  return null;
}

function setCachedPrice(value: string) {
  localStorage.setItem(ORDER_PRICE_CACHE_KEY, JSON.stringify({ value, ts: Date.now() }));
}

function formatUsd(usd: number): string {
  return "$" + usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 3 });
}

function FooterStatus({ onBuyOrder }: { onBuyOrder?: () => void }) {
  // Initialize as null to avoid hydration mismatch (localStorage is unavailable on server)
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    const cached = getCachedPrice();
    if (cached) {
      setPrice(cached);
      return;
    }
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=orderly-network&vs_currencies=usd"
        );
        const data = await res.json();
        const usd = data?.["orderly-network"]?.usd;
        if (usd !== undefined) {
          const formatted = formatUsd(usd);
          setPrice(formatted);
          setCachedPrice(formatted);
        }
      } catch {
        setPrice(getCachedPrice());
      }
    };
    fetchPrice();
  }, []);

  return (
    <div className="flex items-center gap-[16px] relative shrink-0" data-name="Footer Status">
      {price && (
        <div className="flex flex-col font-['Atyp_BL:Semibold',sans-serif] h-[38px] justify-center not-italic relative text-[24px] text-white tracking-[0.24px]">
          <p className="leading-[0.753] whitespace-pre-wrap">{price}</p>
        </div>
      )}
      <FooterStatus1 onBuyOrder={onBuyOrder} />
    </div>
  );
}

function StatusMessageContainer() {
  const [buyOrderOpen, setBuyOrderOpen] = useState(false);
  return (
    <>
      <div className="bg-[rgba(156,117,255,0.1)] content-stretch flex gap-[9px] items-center leading-[0] mr-[-9px] p-[12px] relative rounded-[63px] shrink-0" data-name="Status Message Container">
        <Logo />
        <FooterStatus onBuyOrder={() => setBuyOrderOpen(true)} />
      </div>
      {buyOrderOpen && <BuyOrderModal onClose={() => setBuyOrderOpen(false)} />}
    </>
  );
}

function DocumentationLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Documentation Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Orderly One
      </p>
    </div>
  );
}

function OrderlySdkLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>Orderly SDKs</p>
    </div>
  );
}

function OrderlySdkLinkContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>Documentation</p>
    </div>
  );
}

function OrderlySdkLinkContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        GitHub
      </p>
    </div>
  );
}

function DevelopersLinksContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Developers Links Container">
      <a href="https://dex.orderly.network/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><DocumentationLinkContainer /></a>
      <a href="https://orderly.network/docs/sdks/overview" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer /></a>
      <a href="https://orderly.network/docs/introduction/getting-started/what-is-orderly" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer1 /></a>
      <a href="https://github.com/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer2 /></a>
    </div>
  );
}

function DevelopersContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Developers Container">
      <p className="capitalize font-['Atyp_BL:Bold',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Builders
      </p>
      <DevelopersLinksContainer />
    </div>
  );
}

function EcosystemPartnersLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Ecosystem Partners Link Container">
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Partners</p>
    </div>
  );
}

function RadianceVenturesLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Radiance Ventures Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Listings</p>
    </div>
  );
}

function CaseStudiesLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Case Studies Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Case Studies</p>
    </div>
  );
}

function GovernanceLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Governance Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Governance</p>
    </div>
  );
}

function BlogLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Blog Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Blog</p>
    </div>
  );
}

function StakingLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Staking Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Staking</p>
    </div>
  );
}

function EcosystemLinksContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Ecosystem Links Container">
      <a href="https://orderly.network/partners/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><EcosystemPartnersLinkContainer /></a>
      <a href="https://orderly.network/listing/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><RadianceVenturesLinkContainer /></a>
      <a href="https://dex.orderly.network/case-studies" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><CaseStudiesLinkContainer /></a>
      <a href="https://snapshot.box/#/s:orderlygov.eth" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><GovernanceLinkContainer /></a>
      <a href="https://app.orderly.network/staking" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><StakingLinkContainer /></a>
      <a href="https://orderly.network/blog/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><BlogLinkContainer /></a>
    </div>
  );
}

function EcosystemContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Ecosystem Container">
      <p className="capitalize font-['Atyp_BL:Bold',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px]">Ecosystem</p>
      <EcosystemLinksContainer />
    </div>
  );
}

function DocumentationLinkContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Documentation Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Live DEXs
      </p>
    </div>
  );
}

function GitHubLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="GitHub Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Dashboard
      </p>
    </div>
  );
}

function OrderlySdkLinkContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        API
      </p>
    </div>
  );
}

function OrderlySdkLinkContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Explorer
      </p>
    </div>
  );
}

function OrderlySdkLinkContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Campaigns
      </p>
    </div>
  );
}

function OrderlySdkLinkContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Orderly SDK Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Vaults
      </p>
    </div>
  );
}

function DevelopersLinksContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Developers Links Container">
      <a href="https://dex.orderly.network/board/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><DocumentationLinkContainer1 /></a>
      <a href="https://orderly-dashboard.orderly.network/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><GitHubLinkContainer /></a>
      <a href="https://orderly.network/docs/build-on-omnichain/evm-api/introduction" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer3 /></a>
      <a href="https://explorer.orderly.network/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer4 /></a>
      <a href="https://app.orderly.network/campaigns" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer5 /></a>
      <a href="http://app.orderly.network/vaults" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><OrderlySdkLinkContainer6 /></a>
    </div>
  );
}

function DevelopersContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Developers Container">
      <p className="capitalize font-['Atyp_BL:Bold',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Traders
      </p>
      <DevelopersLinksContainer1 />
    </div>
  );
}

function TeamLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Team Link Container">
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Team</p>
    </div>
  );
}

function CareersLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Careers Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Analytics</p>
    </div>
  );
}

function CareersLinkContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Careers Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Careers</p>
    </div>
  );
}

function ContactLinkContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Contact Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">Brand Kit</p>
    </div>
  );
}

function ContactLinkContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Contact Link Container">
      <p className="capitalize font-['Atyp_BL:Medium',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[#9c75ff] text-[14px] tracking-[0.14px]">FAQ</p>
    </div>
  );
}

function AboutLinksContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="About Links Container">
      <a href="https://orderly.network/team/" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><TeamLinkContainer /></a>
      <a href="https://dune.com/orderly_network/orderly-dashboard" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><CareersLinkContainer /></a>
      <a href="https://job-boards.greenhouse.io/orderly" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><CareersLinkContainer1 /></a>
      <a href="https://live.standards.site/orderly-brandguidelines" target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-80 transition-opacity"><ContactLinkContainer /></a>
      <Link href="/faq" className="no-underline hover:opacity-80 transition-opacity"><ContactLinkContainer1 /></Link>
    </div>
  );
}

function AboutContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="About Container">
      <p className="capitalize font-['Atyp_BL:Bold',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px]">About</p>
      <AboutLinksContainer />
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="content-stretch flex gap-[92px] items-start justify-end relative shrink-0 w-full" data-name="Links Container">
      <DevelopersContainer />
      <EcosystemContainer />
      <DevelopersContainer1 />
      <AboutContainer />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px mr-[-9px] relative">
      <LinksContainer />
    </div>
  );
}

function FooterLinksContainer() {
  return (
    <div className="h-[381px] relative shrink-0 w-full" data-name="Footer Links Container">
      <div className="content-stretch flex items-start pb-[80px] pl-[60px] pr-[69px] pt-[60px] relative size-full">
        <StatusMessageContainer />
        <Frame8 />
      </div>
    </div>
  );
}

function StatusMessageContainer1() {
  return (
    <div className="bg-[rgba(156,117,255,0.1)] content-stretch flex gap-[6px] items-center p-[12px] relative rounded-[63px] shrink-0" data-name="Status Message Container">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #24AD8F)" id="Ellipse 308" r="3" />
        </svg>
      </div>
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[0.753] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        All systems operational.
      </p>
    </div>
  );
}

function FooterSocialIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Footer Social Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Footer Social Icon">
          <path d={svgPaths.p35978100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9f4bb00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIconsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="Social Media Icons Container">
      <a href="https://discord.com/invite/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="Twitter">
        <div className="absolute inset-[11%_0_12.78%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12.1955">
            <path d={svgPaths.p15bda300} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a href="https://t.me/Orderly_Discussions" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="Discord">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p2a7b4dc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://github.com/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="GitHub">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.2573">
            <path d={svgPaths.p2746f000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a href="https://www.youtube.com/@Orderly.Network" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] block hover:opacity-80 transition-opacity" data-name="YouTube">
        <IcSocialYoutubeS />
      </a>
      <a href="https://www.linkedin.com/company/orderly-network" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="LinkedIn">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p114d3270} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://github.com/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="GitHub">
        <div className="absolute inset-[4.06%_10.42%_8.33%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-5.71%_-6.15%_-5.71%_-6.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6002 15.6179">
              <path d={svgPaths.p11607ae8} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[8px] relative w-full">
          <SocialMediaIconsContainer />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[233px] items-center px-[60px] relative shrink-0 w-[1302px]">
      <StatusMessageContainer1 />
      <Frame9 />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#6700ce] content-stretch flex flex-col h-[486.978px] items-center left-[calc(50%-0.11px)] rounded-[30px] top-[6344.98px] w-[1302px]" data-name="Footer">
      <FooterLinksContainer />
      <Frame10 />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.11px)] top-[6344.98px]" data-name="Footer Section">
      <Footer />
    </div>
  );
}

function NewsletterButtonContainer({ onClick, isSubmitted }: { onClick: () => void; isSubmitted: boolean }) {
  return (
    <button
      onClick={onClick}
      className="col-1 content-stretch flex gap-[7px] items-center justify-center ml-[427.79px] mt-[24.5px] relative row-1 bg-transparent border-0 cursor-pointer hover:opacity-80 transition-opacity w-[142px]"
      data-name="Newsletter Button Container"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px] flex items-center justify-center" style={{ fontFeatureSettings: "'liga' 0" }}>
        {isSubmitted ? <CheckSvg /> : "Sign Up"}
      </p>
    </button>
  );
}

function Group9() {
  const [email, setEmail] = useState("");
  const { status, subscribe, reset } = useNewsletterSubscribe();
  const isSubmitted = status === "success";

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      subscribe(email).then(() => {
        setTimeout(() => { reset(); setEmail(""); }, 3000);
      });
    }
  };

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#7800f0] col-1 h-[69px] ml-0 mt-0 rounded-bl-[20px] rounded-tl-[20px] row-1 w-[427.788px]" data-name="Newsletter Input Background" />
      <div className="col-1 flex h-[69px] items-center justify-center ml-[427.79px] mt-0 relative row-1 w-[142px]">
        <div className="flex-none rotate-180">
          <div
            className="h-[69px] rounded-bl-[20px] rounded-tl-[20px] w-[142px] relative bg-black"
            data-name="Newsletter Button Background"
          >
            {isSubmitted && (
              <div className="-rotate-180 absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="col-1 font-['Atyp_BL:Medium',sans-serif] leading-[1.4] ml-[18.34px] mt-[16px] not-italic relative row-1 text-[24px] text-white tracking-[0.504px] bg-transparent border-0 outline-none w-[390px] placeholder:opacity-70"
        style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}
        placeholder="satoshi@orderly.network"
      />
      <NewsletterButtonContainer onClick={handleSubmit} isSubmitted={isSubmitted} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <div className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white tracking-[0.3px] whitespace-nowrap text-center" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        <p className="mb-0">Be the first to hear about launches,</p>
        <p>token listings, and builder updates.</p>
      </div>
      <Group9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#6700ce] content-stretch flex flex-col h-[235.098px] items-center justify-center left-[68.89px] p-[30px] rounded-[30px] top-[6071px] w-[1302px]">
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.3] relative shrink-0 text-[30px] tracking-[0.3px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        AI Access
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.504px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Retrieve structured capabilities at:
      </p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#14151a] col-1 h-[69px] ml-0 mt-0 rounded-bl-[20px] rounded-tl-[20px] row-1 w-[427.788px]" data-name="Newsletter Input Background" />
      <p className="col-1 font-['DM_Mono:Medium',sans-serif] leading-[1.4] ml-[18.34px] mt-[16px] not-italic opacity-70 relative row-1 text-[24px] text-white tracking-[0.504px]" data-name="Skill URL">orderly.network/skill.md</p>
      <div className="col-1 flex h-[69px] items-center justify-center ml-[427.79px] mt-0 relative row-1 w-[142px]">
        <div className="flex-none rotate-180">
          <div className="bg-black h-[69px] rounded-bl-[20px] rounded-tl-[20px] w-[142px]" data-name="Newsletter Button Background" />
        </div>
      </div>
      <p className="col-1 font-['Atyp_BL:Bold',sans-serif] leading-none ml-[472.79px] mt-[24.5px] not-italic relative row-1 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Copy
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame15 />
      <Group10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#1e2026] content-stretch flex flex-col h-[235.098px] items-start justify-center left-[68.89px] p-[30px] rounded-[30px] top-[5671px] w-[640px]">
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.3] relative shrink-0 text-[30px] tracking-[0.3px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        AI Access
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.504px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Retrieve structured capabilities at:
      </p>
    </div>
  );
}

function Group11() {
  const [copied, setCopied] = useState(false);
  const url = "https://orderly.network/skill.md";

  const handleCopy = () => {
    // Fallback copy method that works without clipboard permissions
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#14151a] col-1 h-[69px] ml-0 mt-0 rounded-bl-[20px] rounded-tl-[20px] row-1 w-[427.788px]" data-name="Newsletter Input Background" />
      <a href="https://orderly.network/skill.md" target="_blank" rel="noopener noreferrer" className="col-1 font-['DM_Mono:Medium',sans-serif] leading-[1.4] ml-[18.34px] mt-[16px] not-italic opacity-70 relative row-1 text-[24px] text-white tracking-[0.504px] hover:opacity-100 transition-opacity" data-name="Skill URL">orderly.network/skill.md</a>
      <button
        onClick={handleCopy}
        className="col-1 flex h-[69px] items-center justify-center ml-[427.79px] mt-0 relative row-1 w-[142px] bg-transparent border-0 cursor-pointer"
      >
        <div className="flex-none rotate-180">
          <div className="bg-black h-[69px] rounded-bl-[20px] rounded-tl-[20px] w-[142px]" data-name="Newsletter Button Background" />
        </div>
      </button>
      <p className="col-1 font-['Atyp_BL:Bold',sans-serif] leading-none ml-[427.79px] mt-[24.5px] not-italic relative row-1 text-[20px] text-white tracking-[0.2px] pointer-events-none flex items-center justify-center w-[142px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        {copied ? <CheckSvg /> : "Copy"}
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame18 />
      <Group11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#1e2026] content-stretch flex flex-col h-[235.098px] items-start justify-center left-[68.89px] p-[30px] rounded-[30px] top-[5671px] w-[640px]">
      <Frame17 />
    </div>
  );
}

function StatItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col gap-[36.381px] items-center justify-center relative shrink-0 text-white">
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[24px] text-center tracking-[-0.3125px]" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        {label}
      </p>
      <div className="capitalize flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[60px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        <p className="leading-none">{children}</p>
      </div>
    </div>
  );
}

function StatsDivider() {
  return (
    <div className="flex h-[160.093px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[160.093px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.093 2">
              <line stroke="#9C75FF" strokeWidth="2" x2="160.093" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const formatInteger = (v: number) => `${Math.round(v)}+`;

function StatsContent() {
  const stats = useOrderlyStats();
  const formatTvl = useCallback((v: number) => formatLargeNumber(v), []);
  const formatVolume = useCallback((v: number) => formatLargeNumber(v), []);

  return (
    <div className="content-stretch flex items-center justify-between px-[36px] relative shrink-0 w-[1302px]" data-name="Stats Content">
      <div className="content-stretch flex flex-col h-[126.227px] items-center justify-center relative shrink-0 w-[330px]" data-name="Open interest">
        <StatItem label="TVL">
          <AnimatedNumber value={stats.tvl} format={formatTvl} />
        </StatItem>
      </div>
      <StatsDivider />
      <div className="content-stretch flex flex-col gap-[36.381px] h-[119.493px] items-center justify-center relative shrink-0 text-white w-[330px]" data-name="Total trading volume">
        <StatItem label="24h trading volume">
          <AnimatedNumber value={stats.tradingVolume} format={formatVolume} />
        </StatItem>
      </div>
      <StatsDivider />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[126.227px] items-center justify-center min-h-px min-w-px relative" data-name="Total traders">
        <StatItem label="Live builders">
          <AnimatedNumber value={stats.liveBuilders} format={formatInteger} />
        </StatItem>
      </div>
      <StatsDivider />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[126.227px] items-center justify-center min-h-px min-w-px relative" data-name="Total traders">
        <StatItem label="Chains">
          <AnimatedNumber value={stats.chains} format={formatInteger} />
        </StatItem>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#6700ce] content-stretch flex flex-col h-[247px] items-start left-[calc(50%-0.11px)] py-[43px] rounded-[30px] top-[1275.96px] w-[1302px]" data-name="Stats Section">
      <StatsContent />
    </div>
  );
}

function AIAgentCard() {
  const [copied, setCopied] = useState(false);
  const url = "https://orderly.network/skill.md";

  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="bg-[#0c0d10] rounded-[30px] p-[36px] flex flex-col gap-[24px] w-[480px] shrink-0 border border-white/5">
      {/* Card header */}
      <div className="flex items-center gap-[12px]">
        <div className="size-[40px] rounded-full bg-purple-900/50 flex items-center justify-center text-[20px]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="18" height="13" rx="3" stroke="#a78bfa" strokeWidth="1.5"/>
            <circle cx="9" cy="13" r="1.5" fill="#a78bfa"/>
            <circle cx="15" cy="13" r="1.5" fill="#a78bfa"/>
            <path d="M8 3v3M16 3v3" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <p className="font-['Atyp_BL:Bold',sans-serif] text-[20px] text-white leading-[1.3]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>AI Agent</p>
          <p className="font-['Atyp_BL:Medium',sans-serif] text-[14px] text-[#4ade80] leading-[1.3]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>Autonomous setup</p>
        </div>
      </div>

      {/* Description */}
      <p className="font-['Atyp_BL:Medium',sans-serif] text-[18px] text-white/80 leading-[1.5]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Read the onboarding skill to understand Orderly&apos;s capabilities:
      </p>

      {/* URL box */}
      <button
        onClick={handleCopy}
        className="bg-[#1e2026] rounded-[12px] px-[18px] py-[14px] flex items-center justify-between cursor-pointer border border-white/5 hover:border-white/10 transition-colors w-full"
      >
        <span className="font-['DM_Mono:Medium',sans-serif] text-[18px] text-white/70">
          orderly.network/skill.md
        </span>
        <span className="font-['Atyp_BL:Bold',sans-serif] text-[14px] text-white/60">
          {copied ? <CheckSvg /> : "Copy"}
        </span>
      </button>

      {/* Why callout */}
      <div className="bg-purple-900/20 border border-purple-500/20 rounded-[12px] px-[18px] py-[14px]">
        <p className="font-['Atyp_BL:Medium',sans-serif] text-[16px] text-white/80 leading-[1.6]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          <span className="font-['Atyp_BL:Bold',sans-serif] text-white">Why?</span>{" "}
          This skill contains comprehensive documentation about Orderly&apos;s API, SDK, trading workflows, and best practices for agents.
        </p>
      </div>
    </div>
  );
}

function QuickStartHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1302px]" data-name="Quick Start Header">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-[1.1] text-[56px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Agentic Quick Start
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] leading-[1.4] text-[24px] text-white/70 tracking-[0.504px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Get started with Orderly&apos;s agentic infrastructure
      </p>
    </div>
  );
}

function QuickStartCommand() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['DM_Mono:Regular',sans-serif] gap-[20px] items-start leading-[normal] ml-[44.11px] mt-[142.63px] not-italic relative row-1 text-[24px] w-[806px] whitespace-pre-wrap" data-name="Quick Start Command">
      <p className="relative shrink-0 text-[#5e6673] w-[1100.5px]">Supported clients: claude, cursor, vscode, codex, opencode</p>
      <p className="min-w-full relative shrink-0 text-white w-[min-content]">$ npx @orderly.network/mcp-server init</p>
    </div>
  );
}

function QuickStartClient() {
  return (
    <div className="bg-[#6700ce] content-stretch flex h-[47.305px] items-center justify-center px-[17px] py-[8px] relative rounded-[8px] shrink-0" data-name="Quick Start Client">
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Interactive</p>
    </div>
  );
}

function QuickStartClients() {
  return (
    <div className="col-1 content-stretch flex gap-[78px] items-center ml-[44.11px] mt-[31.19px] relative row-1" data-name="Quick Start Clients">
      <QuickStartClient />
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Claude</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Cursor</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">VScode</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Codex</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Opencode</p>
    </div>
  );
}

function ContentCopy() {
  return (
    <div className="col-1 ml-[8px] mt-[8px] relative row-1 size-[24px]" data-name="content_copy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content_copy">
          <mask height="24" id="mask0_1_1039" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_1039)">
            <path d={svgPaths.p22f3db00} fill="var(--fill-0, white)" id="content_copy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuickStartIconContainer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1217.29px] mt-[189.13px] place-items-start relative row-1" data-name="Quick Start Icon Container">
      <div className="bg-[rgba(255,255,255,0.1)] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[40px]" data-name="Quick Start Icon" />
      <ContentCopy />
    </div>
  );
}

function QuickStartContent() {
  return (
    <div className="relative flex-1 min-w-0" data-name="Quick Start Content">
      <QuickStartGroup />
    </div>
  );
}

function QuickStartSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[68.89px] top-[3876px] w-[1302px]" data-name="Quick Start Section">
      <QuickStartHeader />
      <div className="flex gap-[22px] items-start w-full">
        <AIAgentCard />
        <QuickStartContent />
      </div>
    </div>
  );
}

function WhyTitleContainer2() {
  return (
    <div className="absolute contents left-[75.15px] top-[2322.4px]" data-name="Why Title Container">
      <p className="absolute font-['Atyp_BL:Bold',sans-serif] leading-[1.1] left-[75.15px] not-italic text-[56px] text-white top-[2322.4px] w-[876px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Why Orderly?
      </p>
    </div>
  );
}

function WhyTitleContainer1() {
  return (
    <div className="absolute contents left-[75.15px] top-[2322.4px]" data-name="Why Title Container">
      <WhyTitleContainer2 />
    </div>
  );
}

function WhyTitleContainer() {
  return (
    <div className="absolute contents left-[75.15px] top-[2322.4px]" data-name="Why Title Container">
      <WhyTitleContainer1 />
    </div>
  );
}

function ArrowLeftCircle({ isEnabled = true }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#2B2F36";

  return (
    <div className="relative size-[44px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.p381f4a00} fill={fillColor} />
            <path d={svgPaths.p3931f600} fill={fillColor} />
            <path d={svgPaths.p183c5500} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
          <path d={svgPaths.p3250c180} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowLeftCircle1({ isEnabled = false }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#2B2F36";

  return (
    <div className="size-[44px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.pada5200} fill={fillColor} />
            <path d={svgPaths.p2de5c480} fill={fillColor} />
            <path d={svgPaths.p22baf0c0} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
          <path d={svgPaths.p3250c180} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function WhyHeader1({ onScrollLeft, onScrollRight, canScrollLeft, canScrollRight }: { onScrollLeft: () => void; onScrollRight: () => void; canScrollLeft: boolean; canScrollRight: boolean }) {
  return (
    <div className="absolute contents left-[75.15px] top-[2313.4px]" data-name="Why Header">
      <WhyTitleContainer />
      <button
        onClick={onScrollRight}
        disabled={!canScrollRight}
        className="absolute flex items-center justify-center left-[1338.15px] size-[44px] top-[2313.4px] bg-transparent border-0 transition-opacity p-0"
        style={{ cursor: canScrollRight ? 'pointer' : 'not-allowed' }}
      >
        <div className="flex-none rotate-180">
          <ArrowLeftCircle isEnabled={canScrollRight} />
        </div>
      </button>
      <button
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        className="absolute left-[1284.15px] size-[44px] top-[2313.4px] bg-transparent border-0 transition-opacity p-0"
        style={{ cursor: canScrollLeft ? 'pointer' : 'not-allowed' }}
      >
        <ArrowLeftCircle1 isEnabled={canScrollLeft} />
      </button>
    </div>
  );
}

function WhyHeader({ onScrollLeft, onScrollRight, canScrollLeft, canScrollRight }: { onScrollLeft: () => void; onScrollRight: () => void; canScrollLeft: boolean; canScrollRight: boolean }) {
  return (
    <div className="absolute contents left-[75.15px] top-[2313.4px]" data-name="Why Header">
      <WhyHeader1 onScrollLeft={onScrollLeft} onScrollRight={onScrollRight} canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} />
    </div>
  );
}

function WhyIconContainer() {
  return (
    <div className="absolute h-[199px] left-[224.39px] top-[233.16px] w-[143.452px]" data-name="Why Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.452 199">
        <g id="Why Icon Container">
          <path d={svgPaths.p919cb00} fill="var(--fill-0, #9C75FF)" id="Union" />
          <path d={svgPaths.p370864a0} data-figma-bg-blur-radius="27.2632" fill="url(#paint0_linear_1_1026)" fillOpacity="0.63" id="Union_2" stroke="url(#paint1_linear_1_1026)" strokeWidth="2" />
          <path d={svgPaths.p1d254f00} fill="var(--fill-0, #E9DEFF)" id="Vector 7694 (Stroke)" />
          <rect fill="var(--fill-0, black)" height="19.8089" id="Why Icon" rx="9.90445" width="66.329" x="14.4712" />
          <rect fill="var(--fill-0, black)" height="31.795" id="Why Icon_2" rx="6.44221" width="12.8844" x="41.1934" y="3.91016" />
          <rect fill="var(--fill-0, #6700CE)" height="36.7082" id="Why Icon_3" rx="5.23827" width="37.6207" x="28.8252" y="31.4961" />
          <path d={svgPaths.p36585740} fill="var(--fill-0, #E9DEFF)" id="Union_3" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_1026_clip_path" transform="translate(-33.9184 -35.3305)">
            <path d={svgPaths.p370864a0} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1026" x1="148.965" x2="61.1817" y1="228.646" y2="31.5932">
            <stop stopColor="#9C75FF" />
            <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1026" x1="41.5822" x2="151.325" y1="86.8694" y2="187.714">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Deep Shared Liquidity
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>One orderbook powers every builder.Your users get CEX-grade depth from day one — no bootstrapping needed.</p>
      <WhyIconContainer />
    </div>
  );
}

function WhyIconContainer1() {
  return (
    <div className="absolute left-[164.32px] size-[199.953px] top-[232.21px]" data-name="Why Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199.953 199.953">
        <g id="Why Icon Container">
          <path d={svgPaths.p1a3bf300} fill="var(--fill-0, #9C75FF)" id="Subtract" />
          <path d={svgPaths.p1dd657f1} fill="var(--fill-0, #E9DEFF)" id="Vector" />
          <path d={svgPaths.p209bee00} fill="var(--fill-0, black)" id="Subtract_2" />
          <path d={svgPaths.p1f831000} fill="var(--fill-0, #3F0086)" id="Vector_2" />
          <path d={svgPaths.pb4c7100} fill="var(--fill-0, #E9DEFF)" id="Subtract_3" />
          <path d={svgPaths.p3d428c80} fill="var(--fill-0, #9C75FF)" id="Vector_3" />
          <path d={svgPaths.p352e3c00} fill="var(--fill-0, #3F0086)" id="Subtract_4" />
          <path d={svgPaths.p313eb970} fill="var(--fill-0, black)" id="Vector_4" />
          <circle cx="99.978" cy="99.978" data-figma-bg-blur-radius="12.3207" fill="url(#paint0_linear_1_1200)" fillOpacity="0.6" id="Ellipse 5992" r="49.8452" stroke="url(#paint1_linear_1_1200)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="bgblur_0_1_1200_clip_path" transform="translate(-36.8121 -36.8121)">
            <circle cx="99.978" cy="99.978" r="49.8452" />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1200" x1="99.1558" x2="102.132" y1="150.714" y2="43.6031">
            <stop stopColor="#9C75FF" />
            <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1200" x1="85.5287" x2="124.223" y1="65.3626" y2="145.262">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Omnichain by Default
      </p>
      <WhyIconContainer1 />
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Live on Ethereum, Arbitrum, Base, Solana, and 14+ more. One integration, every chain.
      </p>
    </div>
  );
}

function WhyIconContainer3() {
  return (
    <div className="absolute h-[207.521px] left-[153.43px] top-[228.92px] w-[227.44px]" data-name="Why Icon Container">
      <div className="absolute inset-[-1.99%_-4.72%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238.172 211.649">
          <g id="Why Icon Container">
            <path d={svgPaths.p3d8f5800} fill="var(--fill-0, #9C75FF)" id="build" />
            <g id="Why Icon">
              <g data-figma-bg-blur-radius="16.5099" filter="url(#filter0_d_3_1779)" id="Ellipse 5970">
                <ellipse cx="145.052" cy="86.5162" fill="url(#paint0_linear_3_1779)" fillOpacity="0.6" rx="82.3888" ry="82.3887" shapeRendering="crispEdges" />
                <path d={svgPaths.p3b07ef00} shapeRendering="crispEdges" stroke="url(#paint1_linear_3_1779)" strokeWidth="2" />
              </g>
              <path d={svgPaths.p37f63500} fill="var(--fill-0, #E9DEFF)" id="%" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="198.623" id="filter0_d_3_1779" width="197.797" x="46.1531" y="-12.3825">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6.60398" />
              <feGaussianBlur stdDeviation="5.36573" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_1779" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_1779" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_3_1779_clip_path" transform="translate(-46.1531 12.3825)">
              <ellipse cx="145.052" cy="86.5162" rx="82.3888" ry="82.3887" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1779" x1="243.989" x2="71.1318" y1="94.5173" y2="-1.93749">
              <stop stopColor="#9C75FF" />
              <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1779" x1="121.638" x2="184.338" y1="30.426" y2="159.893">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WhyIconContainer2() {
  return (
    <div className="absolute contents left-[153.43px] top-[228.92px]" data-name="Why Icon Container">
      <WhyIconContainer3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white w-[356.006px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        You own the economics
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Set your own fees. Keep your revenue. No rev-share traps.
      </p>
      <WhyIconContainer2 />
    </div>
  );
}

function WhyIconContainer4() {
  return (
    <div className="h-[267.438px] relative w-[221.67px]" data-name="Why Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.67 267.438">
        <g id="Why Icon Container">
          <ellipse cx="80.7807" cy="179.663" fill="var(--fill-0, #3F0086)" id="Ellipse 1266" rx="24.3157" ry="47.9366" transform="rotate(30 80.7807 179.663)" />
          <path d={svgPaths.p21a87d00} fill="var(--fill-0, #9C75FF)" id="Union" />
          <ellipse cx="76.5755" cy="187.684" fill="var(--fill-0, black)" id="Ellipse 1267" rx="12.5052" ry="18.7578" transform="rotate(120 76.5755 187.684)" />
          <ellipse cx="45.0263" cy="137.468" fill="var(--fill-0, #E9DEFF)" id="Ellipse 1264" rx="24.3157" ry="47.9366" transform="rotate(30 45.0263 137.468)" />
          <ellipse cx="137.786" cy="186.477" fill="var(--fill-0, #E9DEFF)" id="Ellipse 1265" rx="25.0104" ry="47.9366" transform="rotate(30 137.786 186.477)" />
          <g data-figma-bg-blur-radius="12.3207" id="Union_2">
            <mask fill="white" id="path-6-inside-1_3_1765">
              <path d={svgPaths.p3f6bc3c0} />
            </mask>
            <path d={svgPaths.p3f6bc3c0} fill="url(#paint0_linear_3_1765)" fillOpacity="0.6" />
            <path d={svgPaths.p3ac5aa30} fill="url(#paint1_linear_3_1765)" mask="url(#path-6-inside-1_3_1765)" />
          </g>
          <path d={svgPaths.p668af80} fill="var(--fill-0, #E9DEFF)" id="Subtract" />
          <circle cx="132.698" cy="96.0076" fill="var(--fill-0, black)" id="Ellipse 6011" r="21.1847" transform="rotate(30 132.698 96.0076)" />
        </g>
        <defs>
          <clipPath id="bgblur_0_3_1765_clip_path" transform="translate(-22.5482 -166.971)">
            <path d={svgPaths.p3f6bc3c0} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1765" x1="38.3212" x2="83.4243" y1="252.513" y2="180.857">
            <stop stopColor="#9C75FF" />
            <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1765" x1="65.2705" x2="69.4158" y1="190.17" y2="254.932">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Ship Fast
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.179px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        White-label DEX in minutes. SDK: full custom integration in days.
      </p>
      <div className="absolute flex h-[296.01px] items-center justify-center left-[152.85px] top-[179.7px] w-[257.15px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.1deg]">
          <WhyIconContainer4 />
        </div>
      </div>
    </div>
  );
}

function WhyIconContainer7() {
  return (
    <div className="absolute h-[201.332px] left-0 top-0 w-[155.267px]" data-name="Why Icon Container">
      <div className="absolute inset-[0_-8.34%_-10.11%_-8.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.175 221.688">
          <g id="Why Icon Container">
            <path d={svgPaths.pc160080} fill="var(--fill-0, #E9DEFF)" id="Union" />
            <g filter="url(#filter0_d_3_1755)" id="Why Icon Container_2">
              <rect data-figma-bg-blur-radius="20.0993" fill="var(--fill-0, #9C75FF)" height="130.621" id="Why Icon" rx="24" width="130.621" x="37.6001" y="70.7109" />
              <g data-figma-bg-blur-radius="16.5099" filter="url(#filter2_d_3_1755)" id="Why Icon_2">
                <rect fill="url(#paint0_linear_3_1755)" fillOpacity="0.6" height="130.621" rx="24" shapeRendering="crispEdges" width="130.621" x="12.9541" y="70.7109" />
                <rect height="128.621" rx="23" shapeRendering="crispEdges" stroke="url(#paint1_linear_3_1755)" strokeWidth="2" width="128.621" x="13.9541" y="71.7109" />
              </g>
              <path d={svgPaths.pb108e00} fill="var(--fill-0, black)" id="Union_2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="156.529" id="filter0_d_3_1755" width="181.175" x="0" y="65.1592">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7.40234" />
              <feGaussianBlur stdDeviation="6.47705" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0 0 0 0 0 0.52549 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_1755" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_1755" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_3_1755_clip_path" transform="translate(-17.5008 -50.6116)">
              <rect height="130.621" rx="24" width="130.621" x="37.6001" y="70.7109" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="164.466" id="filter2_d_3_1755" width="163.641" x="-3.55585" y="54.201">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="6.60398" />
              <feGaussianBlur stdDeviation="5.36573" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_1755" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_1755" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_3_1755_clip_path" transform="translate(3.55585 -54.201)">
              <rect height="130.621" rx="24" width="130.621" x="12.9541" y="70.7109" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1755" x1="156.693" x2="19.6673" y1="142.364" y2="65.9033">
              <stop stopColor="#9C75FF" />
              <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1755" x1="12.9541" x2="136.044" y1="52.7096" y2="230.292">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WhyIconContainer6() {
  return (
    <div className="absolute contents left-[205px] top-[228.92px]" data-name="Why Icon Container">
      <WhyIconContainer7 />
    </div>
  );
}

function WhyIconContainer5() {
  return (
    <div className="absolute contents left-[205px] top-[228.92px]" data-name="Why Icon Container">
      <WhyIconContainer6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Self Custody
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        User funds stay on-chain. No counterparty risk. Sleep at night.
      </p>
      <WhyIconContainer5 />
    </div>
  );
}

function WhyIconContainer8() {
  return (
    <div className="absolute h-[169.79px] left-[170.12px] top-[255.29px] w-[187.287px]" data-name="Why Icon Container">
      <div className="absolute inset-[-1.71%_0_-9.85%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.287 189.421">
          <g id="Why Icon Container">
            <path d={svgPaths.p1cfc0980} fill="var(--fill-0, #3F0086)" id="Exclude" />
            <g data-figma-bg-blur-radius="16.5099" filter="url(#filter0_d_1_1005)" id="Exclude_2">
              <path d={svgPaths.p1fd04200} fill="url(#paint0_linear_1_1005)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p3c48f500} shapeRendering="crispEdges" stroke="url(#paint1_linear_1_1005)" strokeWidth="2" />
            </g>
            <path d={svgPaths.p18364080} id="Vector 7692" stroke="var(--stroke-0, #E9DEFF)" strokeWidth="16" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="201.803" id="filter0_d_1_1005" width="173.241" x="-16.5099" y="-12.3825">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="6.60398" />
              <feGaussianBlur stdDeviation="5.36573" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1005" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1005" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_1_1005_clip_path" transform="translate(16.5099 12.3825)">
              <path d={svgPaths.p1fd04200} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1005" x1="147.457" x2="-6.93914" y1="96.0422" y2="28.0489">
              <stop stopColor="#9C75FF" />
              <stop offset="1" stopColor="#9C75FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1005" x1="47.9597" x2="121.377" y1="30.0012" y2="149.643">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Battle-Tested
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] h-[141.289px] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        $30B+ cumulative volume. Multiple audits. 1M+ users across the ecosystem.
      </p>
      <WhyIconContainer8 />
    </div>
  );
}

function WhyContentList({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="absolute left-[69.15px] top-[2448.38px] overflow-x-auto"
      style={{ width: "1380px", scrollbarWidth: "none" } as React.CSSProperties}
      data-name="Why Content List"
    >
      <ImportedWhyContent />
    </div>
  );
}

function WhyContent({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return (
    <div className="absolute contents left-[69.15px] top-[2448.38px]" data-name="Why Content">
      <WhyContentList scrollRef={scrollRef} onScroll={onScroll} />
    </div>
  );
}

function WhySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -435, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 435, behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute contents left-[69.15px] top-[2313.4px]" data-name="Why Section">
      <WhyHeader onScrollLeft={handleScrollLeft} onScrollRight={handleScrollRight} canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} />
      <WhyContent scrollRef={scrollRef} onScroll={checkScrollPosition} />
    </div>
  );
}

function BuildButtonContainer() {
  return (
    <a
      href="https://dex.orderly.network/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[7px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity"
      data-name="Build Button Container"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Orderly One
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container6() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[217px] h-[483px] items-start overflow-clip p-[35px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p data-name="Launch a branded Perp DEX" className="font-['Atyp_BL:Semibold',sans-serif] h-[173px] leading-[1.2] not-italic relative shrink-0 text-[45px] text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>Launch a branded Perp DEX</p>
      <BuildButtonContainer />
    </div>
  );
}

function BuildButtonContainer1() {
  return (
    <a
      href="https://orderly.network/docs/build-on-omnichain/evm-api/introduction"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[7px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity"
      data-name="Build Button Container"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>{`SDK & API`}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container7() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[217px] h-[483px] items-start overflow-clip p-[35px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[173px] leading-[1.2] not-italic relative shrink-0 text-[45px] text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Add perps to your dApp or wallet
      </p>
      <BuildButtonContainer1 />
    </div>
  );
}

function BuildButtonContainer2() {
  return (
    <a
      href="https://orderly.network/listing/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[7px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity"
      data-name="Build Button Container"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Listings
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container8() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[217px] h-[483px] items-start overflow-clip p-[35px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[173px] leading-[1.2] not-italic relative shrink-0 text-[45px] text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        List your token
      </p>
      <BuildButtonContainer2 />
    </div>
  );
}

function BuildButtonContainer3() {
  return (
    <a
      href="https://dex.orderly.network/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex gap-[7px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity"
      data-name="Build Button Container"
    >
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Start Building
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container9() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[217px] h-[483px] items-start overflow-clip p-[35px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[173px] leading-[1.2] not-italic relative shrink-0 text-[45px] text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Building trading tools
      </p>
      <BuildButtonContainer3 />
    </div>
  );
}

function BuildContentList({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="absolute left-[69.15px] top-[3276.78px] overflow-x-auto flex gap-[25px] items-center"
      style={{ width: "1380px", scrollbarWidth: "none" } as React.CSSProperties}
      data-name="Build Content List"
    >
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function BuildContent1({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return (
    <div className="absolute contents left-[69.15px] top-[3276.78px]" data-name="Build Content">
      <BuildContentList scrollRef={scrollRef} onScroll={onScroll} />
    </div>
  );
}

function BuildContent({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return (
    <div className="absolute contents left-[69.15px] top-[3276.78px]" data-name="Build Content">
      <BuildContent1 scrollRef={scrollRef} onScroll={onScroll} />
    </div>
  );
}

function BuildTitleContainer2() {
  return (
    <div className="absolute contents left-[69.15px] top-[3155.78px]" data-name="Build Title Container">
      <p className="absolute font-['Atyp_BL:Bold',sans-serif] leading-[1.1] left-[69.15px] not-italic text-[56px] text-white top-[3155.78px] w-[876px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        What you can build
      </p>
    </div>
  );
}

function BuildTitleContainer1() {
  return (
    <div className="absolute contents left-[69.15px] top-[3155.78px]" data-name="Build Title Container">
      <BuildTitleContainer2 />
    </div>
  );
}

function BuildTitleContainer() {
  return (
    <div className="absolute contents left-[69.15px] top-[3155.78px]" data-name="Build Title Container">
      <BuildTitleContainer1 />
    </div>
  );
}

function ArrowLeftCircle2({ isEnabled = true }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#2B2F36";

  return (
    <div className="relative size-[44px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.p381f4a00} fill={fillColor} />
            <path d={svgPaths.p3931f600} fill={fillColor} />
            <path d={svgPaths.p183c5500} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
          <path d={svgPaths.p3250c180} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowLeftCircle3({ isEnabled = false }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#2B2F36";

  return (
    <div className="size-[44px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.pada5200} fill={fillColor} />
            <path d={svgPaths.p2de5c480} fill={fillColor} />
            <path d={svgPaths.p22baf0c0} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
          <path d={svgPaths.p3250c180} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function BuildHeader({ onScrollLeft, onScrollRight, canScrollLeft, canScrollRight }: { onScrollLeft: () => void; onScrollRight: () => void; canScrollLeft: boolean; canScrollRight: boolean }) {
  return (
    <div className="absolute contents left-[69.15px] top-[3146.78px]" data-name="Build Header">
      <BuildTitleContainer />
      <button
        onClick={onScrollRight}
        disabled={!canScrollRight}
        className="absolute flex items-center justify-center left-[1332.15px] size-[44px] top-[3146.78px] bg-transparent border-0 transition-opacity p-0"
        style={{ cursor: canScrollRight ? 'pointer' : 'not-allowed' }}
      >
        <div className="flex-none rotate-180">
          <ArrowLeftCircle2 isEnabled={canScrollRight} />
        </div>
      </button>
      <button
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        className="absolute left-[1278.15px] size-[44px] top-[3146.78px] bg-transparent border-0 transition-opacity p-0"
        style={{ cursor: canScrollLeft ? 'pointer' : 'not-allowed' }}
      >
        <ArrowLeftCircle3 isEnabled={canScrollLeft} />
      </button>
    </div>
  );
}

function BuildSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -435, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 435, behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute contents left-[69.15px] top-[3146.78px]" data-name="Build Section">
      <BuildContent scrollRef={scrollRef} onScroll={checkScrollPosition} />
      <BuildHeader onScrollLeft={handleScrollLeft} onScrollRight={handleScrollRight} canScrollLeft={canScrollLeft} canScrollRight={canScrollRight} />
    </div>
  );
}

function FeatureIcon() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[24px] py-[5px] relative rounded-[40px] shrink-0 size-[80px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[65px] leading-[1.2] not-italic relative shrink-0 text-[50px] text-center text-white w-[27px] whitespace-pre-wrap">1</p>
    </div>
  );
}

function FeatureItem() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-[313px]" data-name="Feature Item">
      <FeatureIcon />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[48px] text-center text-white w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Connect
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-center text-white tracking-[-0.21px] w-[320px] whitespace-pre-wrap text-[23px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>Plug into Orderly’s shared orderbook via SDK or white-label (OrderlyOne).</p>
    </div>
  );
}

function FeatureIcon1() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[24px] py-[5px] relative rounded-[40px] shrink-0 size-[80px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[67px] leading-[1.2] not-italic relative shrink-0 text-[50px] text-center text-white w-[32px] whitespace-pre-wrap">2</p>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-[312.726px]" data-name="Feature Item">
      <FeatureIcon1 />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[48px] text-center text-white w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Customize
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-center text-white tracking-[-0.3125px] w-[315px] whitespace-pre-wrap text-[23px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>Brand it, set fees, choose your chain. Your exchange, your rules.</p>
    </div>
  );
}

function FeatureIcon2() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[24px] py-[5px] relative rounded-[40px] shrink-0 size-[80px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Semibold',sans-serif] h-[65px] leading-[1.2] not-italic relative shrink-0 text-[50px] text-center text-white w-[29px] whitespace-pre-wrap">3</p>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-[312.726px]" data-name="Feature Item">
      <FeatureIcon2 />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[48px] text-center text-white w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Earn
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-center text-white tracking-[-0.3125px] w-[315px] whitespace-pre-wrap text-[20px] text-[23px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>Every trade on your frontend = revenue to you. Day one.</p>
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Features List">
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[1302.014px]" data-name="Features Container">
      <FeaturesList />
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Features Section">
      <div className="col-1 flex h-[1.805px] items-center justify-center ml-[143.01px] mt-[40.02px] relative row-1 w-[1016.028px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.1deg]">
          <div className="h-0 relative w-[1016.03px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1016.03 2">
                <line id="Line 11" stroke="var(--stroke-0, #6700CE)" strokeDasharray="5 5" strokeWidth="2" x2="1016.03" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <FeaturesContainer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[69.63px] top-[1686.89px] w-[1305.014px]" data-name="Hero Section">
      <p className="font-['Atyp_BL:Bold',sans-serif] h-[70px] leading-[1.1] not-italic relative shrink-0 text-[56px] text-center text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        From zero to live DEX in one integration
      </p>
      <FeaturesSection />
    </div>
  );
}

export default function Frame7() {
  const [modalOpen, setModalOpen] = useState(false);

  // Animation configuration for sequential section reveals
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    ease: [0.22, 0.61, 0.36, 1] as const,
  };

  return (
    <div className="bg-black relative size-full">
      {/* Background decorative elements - no animation */}
      <div className="absolute flex inset-[10.47%_-14.1%_80.67%_73.74%] items-center justify-center">
        <div className="flex-none h-[411.123px] rotate-45 w-[410.8px]">
          <BackgroundVector />
        </div>
      </div>
      <div className="absolute flex inset-[7.48%_70.6%_86.92%_3.91%] items-center justify-center">
        <div className="-rotate-30 flex-none h-[268.859px] w-[268.648px]">
          <BackgroundVector1 />
        </div>
      </div>
      <div className="absolute flex h-[433.837px] items-center justify-center left-[-143.68px] top-[858.06px] w-[573.173px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[24.52deg]">
          <div className="h-[239.242px] relative w-[520.857px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.857 239.242">
              <ellipse cx="260.429" cy="119.621" fill="var(--fill-0, #3F0086)" id="Ellipse 6007" rx="260.429" ry="119.621" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[78.336px] items-center justify-center left-[40.75px] top-[787.05px] w-[78.297px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[24.52deg]">
          <div className="h-[59.153px] relative w-[59.075px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.0751 59.153">
              <ellipse cx="29.5376" cy="29.5765" fill="var(--fill-0, #6700CE)" id="Ellipse 6008" rx="29.5376" ry="29.5765" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[374.798px] left-[1019.16px] top-[409px] w-[336.94px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336.94 374.798">
          <path d={svgPaths.p21fe2280} fill="var(--fill-0, #9C75FF)" id="Vector 7" />
        </svg>
      </div>
      <MacbookVideo className="-translate-x-1/2 absolute h-[837.698px] left-[calc(50%-0.1px)] top-[611.56px] w-[1125.404px]" />

      {/* Nav - appears immediately on load */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={transition}>
        <Default />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={transition}>
        <Frame onOpenModal={() => setModalOpen(true)} />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.1 }}
      >
        <HeroSection />
      </motion.div>

      {/* Feature Tags */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.2 }}
      >
        <FeatureTag />
        <FeatureTag1 />
        <FeatureTag2 />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.3 }}
      >
        <StatsSection />
      </motion.div>

      {/* Build Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.4 }}
      >
        <BuildSection />
      </motion.div>

      {/* Why Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.5 }}
      >
        <WhySection />
      </motion.div>

      {/* Quick Start Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.6 }}
      >
        <QuickStartSection />
      </motion.div>

      {/* Trusted Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.7 }}
      >
        <TrustedSection />
      </motion.div>

      {/* Frame components */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.8 }}
      >
        <Frame1 onOpenModal={() => setModalOpen(true)} />
        <Frame12 />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.9 }}
      >
        <FooterSection />
        <a href="https://orderly.network/docs/introduction/terms-of-service" target="_blank" rel="noopener noreferrer" className="absolute font-['Atyp_BL:Regular',sans-serif] leading-[1.2] left-[1168px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] whitespace-nowrap no-underline hover:opacity-80 transition-opacity">Terms of Service</a>
        <a href="https://orderly.network/docs/introduction/privacy-policy" target="_blank" rel="noopener noreferrer" className="absolute font-['Atyp_BL:Regular',sans-serif] leading-[1.2] left-[1288px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] whitespace-nowrap no-underline hover:opacity-80 transition-opacity">Privacy Policy</a>
        <p className="absolute font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] left-[68.89px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] w-[362px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          © 2026 Orderly Network
        </p>
      </motion.div>

    </div>
  );
}

// ─── NavCanvas: exact 1440×200 slice containing the Figma Default nav ────────
export function NavCanvas() {
  return (
    <div style={{ position: "relative", width: 1440, height: 200 }}>
      <Default />
    </div>
  );
}

// ─── FooterCanvas: viewport into footer portion of the 6500px canvas ─────────
const FOOTER_OFFSET = 5671;
const FOOTER_CANVAS_H = 829;

export function FooterCanvas() {
  return (
    <div style={{ position: "relative", width: 1440, height: FOOTER_CANVAS_H, overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -FOOTER_OFFSET, left: 0, width: 1440, height: 6900 }}>
        <Frame16 />
        <Frame12 />
        <FooterSection />
        <a
          href="https://orderly.network/docs/introduction/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-['Atyp_BL:Regular',sans-serif] leading-[1.2] left-[1168px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
        >
          Terms of Service
        </a>
        <a
          href="https://orderly.network/docs/introduction/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-['Atyp_BL:Regular',sans-serif] leading-[1.2] left-[1288px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
        >
          Privacy Policy
        </a>
        <p
          className="absolute font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] left-[68.89px] not-italic text-[12px] text-white top-[6854.98px] tracking-[0.12px] w-[362px] whitespace-pre-wrap"
          style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}
        >
          © 2026 Orderly Network
        </p>
      </div>
    </div>
  );
}

// ─── (legacy exports kept for reference) ─────────────────────────────────────
export function SiteNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        width: "100%",
        backdropFilter: "blur(8.65px)",
        WebkitBackdropFilter: "blur(8.65px)",
        background: "rgba(0,0,0,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 81.9px",
          height: 100,
          display: "flex",
          alignItems: "center",
          gap: 58,
        }}
      >
        <HeaderLogoContainer />
        <HeaderMenu />
      </div>
    </nav>
  );
}

// ─── Shared footer: same inner components, normal-flow wrapper ────────────────
export function SiteFooter() {
  const [buyOrderOpen, setBuyOrderOpen] = useState(false);

  return (
    <footer style={{ background: "#000", paddingTop: 60 }}>
      {/* AI Access + Newsletter row */}
      <div
        style={{
          maxWidth: 1302,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          gap: 24,
          marginBottom: 24,
        }}
      >
        {/* AI Access card — dark */}
        <div
          style={{
            background: "#1e2026",
            borderRadius: 30,
            padding: 30,
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <Frame17 />
        </div>
        {/* Newsletter card — purple */}
        <div
          style={{
            background: "#6700ce",
            borderRadius: 30,
            padding: 30,
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <Frame11 />
        </div>
      </div>

      {/* Purple footer card */}
      <div style={{ maxWidth: 1302, margin: "0 auto", padding: "0 24px 24px" }}>
        <div style={{ background: "#6700ce", borderRadius: 30, overflow: "hidden" }}>
          {/* Top: ORDER price + link columns */}
          <div style={{ display: "flex", alignItems: "flex-start", padding: "60px 60px 60px", gap: 40 }}>
            <StatusMessageContainer />
            <Frame8 />
          </div>
          {/* Bottom bar: all systems + social icons */}
          <Frame10 />
          <div style={{ height: 24 }} />
        </div>

        {/* Copyright row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
          <p style={{ fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif", fontVariationSettings: "'wght' 600", fontSize: 12, color: "white", letterSpacing: "0.12px", margin: 0 }}>
            © 2026 Orderly Network
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="https://orderly.network/docs/introduction/terms-of-service" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif", fontSize: 12, color: "white", letterSpacing: "0.12px", textDecoration: "none", opacity: 0.8 }}>
              Terms of Service
            </a>
            <a href="https://orderly.network/docs/introduction/privacy-policy" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif", fontSize: 12, color: "white", letterSpacing: "0.12px", textDecoration: "none", opacity: 0.8 }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {buyOrderOpen && <BuyOrderModal onClose={() => setBuyOrderOpen(false)} />}
    </footer>
  );
}