'use client';

/**
 * MobileHomePage
 *
 * Source-of-truth for behaviour: Frame1618872018 (desktop).
 * - Modals   → imported directly from the desktop file (PartnershipModal, BuyOrderModal)
 * - Data     → imported from /src/app/shared/orderly.ts (no duplication)
 * - Visuals  → Frame40 (375 px Figma frame), event-delegated via handleClick
 */

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useNewsletterSubscribe } from "@/app/hooks/useNewsletterSubscribe";

// ── Figma mobile frame ───────────────────────────────────────────────────────
import Frame40 from "../../imports/Frame1618872068-142-633";

// ── Desktop modals — single source of truth, reused on mobile ───────────────
import { BuyOrderModal } from "../../imports/Frame1618872018";

// ── Mobile icon paths (same file Frame40 uses for Brandmark) ─────────────────
import svgPathsMobile from "../../imports/svg-4hybjba00c";

// ── Shared constants + utilities (no duplication) ───────────────────────────
import {
  DEX_URLS,
  SOCIAL_LINKS,
  FOOTER_NAV,
  AI_URL,
  NPX_CMD,
  copyToClipboard,
  openUrl,
} from "../shared/orderly";

/* ─────────────────────────── mobile-only constants ─────────────────────────── */

// card width + gap used for carousel scrolling
const WHY_CARD_STEP = 254; // 240 px card + 14 px gap
const BUILD_CARD_STEP = 254;
const WHY_MAX_IDX = 5;
const BUILD_MAX_IDX = 4;

/* ─────────────────────────── mobile-only helper walkers ─────────────────────── */

function walkDataFooterKey(el: HTMLElement | null): string | null {
  while (el) {
    const k = el.getAttribute("data-footer-key");
    if (k) return k;
    el = el.parentElement;
  }
  return null;
}

function walkDataAction(el: HTMLElement | null): string | null {
  while (el) {
    const a = el.getAttribute("data-action");
    if (a) return a;
    el = el.parentElement;
  }
  return null;
}

/* ─────────────────────────── mobile-only UI components ─────────────────────── */

/**
 * Full-screen navigation overlay — mirrors the desktop HeaderMenu exactly.
 * • Accordion sections for Builders / Ecosystem / Traders (same dropdown items as desktop)
 * • Direct link for Docs (matches desktop MenuCell3)
 * • Dual CTA: "Launch Now" (white) + "Start Building" (purple)
 * • Brandmark from svg-4hybjba00c (same paths used by Frame40 top bar)
 */
function MobileNavDrawer({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const NAV_SECTIONS = [
    { key: "Builders", items: FOOTER_NAV.Builders },
    { key: "Ecosystem", items: FOOTER_NAV.Ecosystem },
    { key: "Traders", items: FOOTER_NAV.Traders },
  ];

  const toggle = (key: string) =>
    setOpenSection((prev) => (prev === key ? null : key));

  const fontSectionStyle: React.CSSProperties = {
    fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif",
    fontVariationSettings: "'opsz' 72, 'wght' 600",
    fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'",
    fontSize: "17px",
    letterSpacing: "0.17px",
    color: "white",
  };
  const fontItemStyle: React.CSSProperties = {
    fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif",
    fontVariationSettings: "'wght' 400",
    fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'",
    fontSize: "15px",
  };
  const rowDivider = "1px solid rgba(255,255,255,0.07)";

  return (
    /* stopPropagation prevents portal clicks leaking to wrapperRef's handleClick */
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ backgroundColor: "#0d0d12" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* ── Top bar: Orderly Brandmark + wordmark + close ── */}
      <div
        className="flex items-center justify-between px-[20px] py-[18px]"
        style={{ borderBottom: rowDivider }}
      >
        {/* Brandmark icon (same paths as Frame40 navbar) + "ORDERLY" text */}
        <div className="flex items-center gap-[10px]">
          <div className="relative shrink-0" style={{ width: 28, height: 28 }}>
            <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9999 31.9608">
              <path clipRule="evenodd" d={svgPathsMobile.p2fe0400} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsMobile.p2f88ca00} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsMobile.p22c01780} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsMobile.p527fe00} fill="white" fillRule="evenodd" />
            </svg>
          </div>

        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-[#9c9fae] hover:text-white transition-colors bg-transparent border-0 cursor-pointer rounded-full p-[10px] -mr-[6px]"
          aria-label="Close navigation"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Scrollable nav body ── */}
      <nav className="flex-1 overflow-y-auto">

        {/* Accordion: Builders / Ecosystem / Traders */}
        {NAV_SECTIONS.map(({ key, items }) => (
          <div key={key} style={{ borderBottom: rowDivider }}>

            {/* Section toggle */}
            <button
              onClick={() => toggle(key)}
              className="w-full flex items-center justify-between py-[18px] px-[24px] bg-transparent border-0 cursor-pointer"
              aria-expanded={openSection === key}
            >
              <span style={fontSectionStyle}>{key}</span>
              {/* CSS-animated chevron — no motion dependency */}
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{
                  transition: "transform 0.2s ease",
                  transform: openSection === key ? "rotate(180deg)" : "rotate(0deg)",
                  flexShrink: 0,
                }}
              >
                <path d="M4 6l4 4 4-4" stroke="#9c9fae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Sub-items — AnimatePresence height expand */}
            <AnimatePresence initial={false}>
              {openSection === key && (
                <motion.div
                  key={key + "-items"}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="flex flex-col px-[16px] pb-[14px] gap-[2px]">
                    {items.map((item) =>
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="flex items-center justify-between no-underline rounded-[10px] px-[14px] py-[14px]"
                          style={{ color: "rgba(255,255,255,0.65)", ...fontItemStyle, minHeight: 48 }}
                          onTouchStart={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(103,0,206,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "#9c75ff"; }}
                          onTouchEnd={(e) => { setTimeout(() => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }, 200); }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(103,0,206,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "#9c75ff"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}
                        >
                          <span>{item.label}</span>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.3, flexShrink: 0 }}>
                            <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : (
                        (key === "Ecosystem" || item.label !== "FAQ") && (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="no-underline rounded-[10px] px-[14px] py-[14px] block"
                            style={{ color: "rgba(255,255,255,0.65)", ...fontItemStyle, minHeight: 48 }}
                            onTouchStart={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(103,0,206,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                            onTouchEnd={(e) => { setTimeout(() => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }, 200); }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(103,0,206,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}
                          >
                            {item.label}
                          </Link>
                        )
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Docs — direct link, no dropdown (matches desktop MenuCell3) */}
        <div style={{ borderBottom: rowDivider }}>
          <a
            href="https://orderly.network/docs/introduction/getting-started/what-is-orderly"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between no-underline py-[18px] px-[24px]"
            style={{ ...fontSectionStyle, minHeight: 56 }}
            onTouchStart={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onTouchEnd={(e) => { setTimeout(() => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }, 200); }}
          >
            Docs
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.35, flexShrink: 0 }}>
              <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </nav>

      {/* ── Bottom CTAs ── */}
      <div
        className="px-[20px] pb-[40px] pt-[16px] flex flex-col gap-[10px]"
        style={{ borderTop: rowDivider }}
      >
        {/* Launch Now — white, matches desktop HeaderMenu primary CTA */}
        <a
          href="https://dex.orderly.network/dex/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center justify-center rounded-[46px] py-[16px] no-underline"
          style={{ background: "white", minHeight: 52 }}
        >
          <span style={{ color: "#3f0086", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'wght' 700", fontFeatureSettings: "'ss02','ss03','ss05','ss06'", fontSize: "16px", letterSpacing: "0.16px" }}>
            Launch Now
          </span>
        </a>
      </div>
    </motion.div>
  );
}

/**
 * Slide-up sheet for footer nav sections.
 * Data driven by the shared FOOTER_NAV constant (same links as desktop footer).
 */
function FooterSheet({
  sectionKey,
  onClose,
}: {
  sectionKey: string;
  onClose: () => void;
}) {
  const items = FOOTER_NAV[sectionKey] ?? [];
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        className="w-full rounded-t-[24px] p-[32px] flex flex-col gap-[20px]"
        style={{ background: "#0d0d12" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p style={{ color: "white", fontSize: "16px", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'wght' 700", fontFeatureSettings: "'ss02','ss03','ss05','ss06'", letterSpacing: "0.16px", textTransform: "capitalize" }}>
            {sectionKey}
          </p>
          <button
            onClick={onClose}
            className="text-[#9c9fae] hover:text-white bg-transparent border-0 cursor-pointer p-0 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-[16px]">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="no-underline hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'opsz' 72, 'wght' 500", fontFeatureSettings: "'ss02','ss03','ss05','ss06'", fontSize: "15px" }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="no-underline hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'opsz' 72, 'wght' 500", fontFeatureSettings: "'ss02','ss03','ss05','ss06'", fontSize: "15px" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </motion.div>
    </div>
  );
}

/** Mobile-only newsletter sign-up sheet (no desktop equivalent) */
function SignUpModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const { status, subscribe } = useNewsletterSubscribe();
  const sent = status === "success";
  const fontMedium = { fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'ital' 0, 'opsz' 72, 'wght' 500", fontFeatureSettings: "'ss02','ss03','ss05','ss06'" };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        className="w-full rounded-t-[24px] p-[32px] flex flex-col gap-[16px]"
        style={{ background: "#1a1a1f" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p style={{ color: "white", fontSize: "18px", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'opsz' 72, 'wght' 600", fontFeatureSettings: "'ss02','ss03','ss05','ss06'" }}>
            Stay updated
          </p>
          <button
            onClick={onClose}
            className="text-[#9c9fae] hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="flex flex-col gap-[12px] items-center py-[16px]">
            <p style={{ color: "#6700ce", fontSize: "16px", ...fontMedium }}>✓ You're subscribed!</p>
            <p style={{ color: "#9c9fae", fontSize: "14px", ...fontMedium }}>We'll be in touch with updates.</p>
          </div>
        ) : (
          <>
            <p style={{ color: "#9c9fae", fontSize: "14px", ...fontMedium }}>
              Be the first to hear about launches, token listings, and builder updates.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="satoshi@orderly.network"
              className="rounded-[10px] px-[18px] py-[16px] border-0 outline-none w-full"
              style={{ background: "#7800f0", color: "white", fontSize: "16px", ...fontMedium }}
              autoFocus
            />
            <button
              onClick={() => { if (email.includes("@")) subscribe(email); }}
              className="w-full rounded-[24px] py-[14px] border-0 cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: "black" }}
            >
              <span style={{ color: "white", fontSize: "16px", letterSpacing: "0.16px", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'wght' 700", fontFeatureSettings: "'ss02','ss03','ss05','ss06'" }}>
                Sign Up
              </span>
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}

/** Toast shown after clipboard copy (no desktop equivalent — desktop uses inline state) */
function CopiedToast({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-[32px] left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-[8px] rounded-[24px] px-[20px] py-[12px] shadow-lg"
      style={{ background: "#1e2026", color: "white", fontFamily: "'atyp-bl-variable', 'atyp-bl', sans-serif", fontVariationSettings: "'opsz' 72, 'wght' 500", fontFeatureSettings: "'ss02','ss03','ss05','ss06'", fontSize: "14px", whiteSpace: "nowrap" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#6700ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Copied to clipboard
    </motion.div>
  );
}

/* ─────────────────────────── main component ─────────────────────────── */

export { MobileNavDrawer };

export function MobileHomePage({ onMenuClick }: { onMenuClick?: () => void } = {}) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ── modal / sheet state ──────────────────────────────────────────────────
  // navOpen is managed externally via onMenuClick prop (Home.tsx renders MobileNavDrawer
  // outside the motion.div stacking context so position:fixed works correctly)
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [footerSheet, setFooterSheet] = useState<string | null>(null);
  const [buyOrderOpen, setBuyOrderOpen] = useState(false);

  // ── carousel index state ─────────────────────────────────────────────────
  const [whyIdx, setWhyIdx] = useState(0);
  const [buildIdx, setBuildIdx] = useState(0);

  /* ── enable horizontal scroll on carousels ── */
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const whyCont = wrap.querySelector('[data-name="Why Content List"]') as HTMLElement | null;
    const buildCont = wrap.querySelector('[data-name="Build Content List"]') as HTMLElement | null;
    [whyCont, buildCont].forEach((el) => {
      if (!el) return;
      el.style.overflowX = "scroll";
      (el.style as any).scrollbarWidth = "none";
      (el.style as any).msOverflowStyle = "none";
      // ── smooth native swipe with scroll-snap ──
      // Use "proximity" instead of "mandatory" so the browser doesn't lock the
      // scroll axis during horizontal swipes, which would block vertical scrolling.
      (el.style as any).scrollSnapType = "x proximity";
      // snap each direct child card to the start
      Array.from(el.children).forEach((child) => {
        (child as HTMLElement).style.scrollSnapAlign = "start";
      });
    });

    // ── sync carousel index state from native scroll so dots/arrows stay in sync ──
    // Use rAF to throttle updates and avoid triggering re-renders on every scroll event.
    let whyRaf = 0;
    let buildRaf = 0;
    const onWhyScroll = () => {
      cancelAnimationFrame(whyRaf);
      whyRaf = requestAnimationFrame(() => {
        if (!whyCont) return;
        setWhyIdx(Math.round(whyCont.scrollLeft / WHY_CARD_STEP));
      });
    };
    const onBuildScroll = () => {
      cancelAnimationFrame(buildRaf);
      buildRaf = requestAnimationFrame(() => {
        if (!buildCont) return;
        setBuildIdx(Math.round(buildCont.scrollLeft / BUILD_CARD_STEP));
      });
    };
    whyCont?.addEventListener("scroll", onWhyScroll, { passive: true });
    buildCont?.addEventListener("scroll", onBuildScroll, { passive: true });

    // ── Fix: decorative BackgroundVector SVG overlaps the hero buttons ──────
    // Frame31 (MacBook image section) is pulled up via mb-[-56px] on the hero
    // Frame, causing the 467px-wide BackgroundVector to sit on top of the CTA
    // buttons. We neutralise it for pointer events and ensure the hero section
    // has a higher z-index so clicks always reach the buttons.

    // 1. All [data-name="Background Vector"] divs → non-interactive
    wrap.querySelectorAll('[data-name="Background Vector"]').forEach((el) => {
      (el as HTMLElement).style.pointerEvents = "none";
    });

    // 2. FeatureTags are also absolutely positioned inside Frame30 — make them
    //    non-interactive too (they're purely decorative)
    wrap.querySelectorAll('[data-name="Feature Tag"]').forEach((el) => {
      (el as HTMLElement).style.pointerEvents = "none";
    });

    // 3. Raise the hero Frame ([data-name="Frame"]) above Frame31 so its
    //    buttons are always on top in the stacking order
    const heroFrame = wrap.querySelector('[data-name="Frame"]') as HTMLElement | null;
    if (heroFrame) {
      heroFrame.style.position = "relative";
      heroFrame.style.zIndex = "2";
    }

    return () => {
      cancelAnimationFrame(whyRaf);
      cancelAnimationFrame(buildRaf);
      whyCont?.removeEventListener("scroll", onWhyScroll);
      buildCont?.removeEventListener("scroll", onBuildScroll);
    };
  }, []);

  /* ── scroll Why carousel ── */
  useEffect(() => {
    const el = wrapperRef.current?.querySelector('[data-name="Why Content List"]') as HTMLElement | null;
    el?.scrollTo({ left: whyIdx * WHY_CARD_STEP, behavior: "smooth" });
  }, [whyIdx]);

  /* ── scroll Build carousel ── */
  useEffect(() => {
    const el = wrapperRef.current?.querySelector('[data-name="Build Content List"]') as HTMLElement | null;
    el?.scrollTo({ left: buildIdx * BUILD_CARD_STEP, behavior: "smooth" });
  }, [buildIdx]);

  /* ── direct native listeners for hero CTAs (bypasses synthetic event bubbling) ── */
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    // Small delay so Frame40 has fully mounted its DOM
    const t = setTimeout(() => {
      const buildEls = Array.from(wrap.querySelectorAll('[data-name="build with orderly"]'));
      const partnerEls = Array.from(wrap.querySelectorAll('[data-name="Trade on Orderly"]'));

      const onBuild = (e: Event) => {
        e.stopPropagation();
        openUrl("https://dex.orderly.network/");
      };
      const onPartner = (e: Event) => {
        e.stopPropagation();
        window.location.href = `mailto:midoji@orderly.network?subject=${encodeURIComponent("Partnership Inquiry from Orderly Website")}&body=${encodeURIComponent("First Name:\nLast Name:\nEmail:\nTelegram ID:\nCompany / Project:\nMessage:\n")}`;
      };

      buildEls.forEach(el => el.addEventListener("click", onBuild));
      partnerEls.forEach(el => el.addEventListener("click", onPartner));

      // Stash cleanup refs on the wrap element itself so we can remove them
      (wrap as any).__buildEls = buildEls;
      (wrap as any).__partnerEls = partnerEls;
      (wrap as any).__onBuild = onBuild;
      (wrap as any).__onPartner = onPartner;
    }, 100);

    return () => {
      clearTimeout(t);
      const w = wrap as any;
      w.__buildEls?.forEach((el: Element) => el.removeEventListener("click", w.__onBuild));
      w.__partnerEls?.forEach((el: Element) => el.removeEventListener("click", w.__onPartner));
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── identify which carousel an arrow belongs to ── */
  function getCarouselContext(el: HTMLElement | null): "why" | "build" | null {
    while (el) {
      if (el.getAttribute("data-name") === "Why Content List") return "why";
      if (el.getAttribute("data-name") === "Build Content List") return "build";
      const text = el.textContent ?? "";
      if (text.includes("Why Orderly?")) return "why";
      if (text.includes("What you can build")) return "build";
      el = el.parentElement;
    }
    return null;
  }

  /* ── event delegation ── */
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    /* 1. data-action shortcuts */
    const action = walkDataAction(target);
    if (action === "copy-ai-url") {
      e.preventDefault();
      copyToClipboard(AI_URL).catch(() => { });
      setCopiedToast(true);
      return;
    }
    if (action === "copy-npx") {
      e.preventDefault();
      copyToClipboard(NPX_CMD).catch(() => { });
      setCopiedToast(true);
      return;
    }
    if (action === "sign-up" || action === "email-input") {
      e.preventDefault();
      setSignUpOpen(true);
      return;
    }

    /* 2. footer section accordion via data-footer-key */
    const footerKey = walkDataFooterKey(target);
    if (footerKey) {
      e.preventDefault();
      setFooterSheet(footerKey);
      return;
    }

    /* 3. walk data-name hierarchy — same mapping as desktop handlers */
    let el: HTMLElement | null = target;
    while (el) {
      const name = el.getAttribute("data-name");

      // Logo → home
      if (name === "Brandmark") {
        e.preventDefault();
        router.push("/");
        return;
      }

      // Buy ORDER pill → same BuyOrderModal used on desktop
      if (name === "buy-order") {
        e.preventDefault();
        setBuyOrderOpen(true);
        return;
      }

      // Start Building → same href as desktop button
      if (name === "build with orderly") {
        e.preventDefault();
        openUrl("https://dex.orderly.network/");
        return;
      }

      // Talk to Partnerships
      if (name === "Trade on Orderly") {
        e.preventDefault();
        window.location.href = `mailto:midoji@orderly.network?subject=${encodeURIComponent("Partnership Inquiry from Orderly Website")}&body=${encodeURIComponent("First Name:\nLast Name:\nEmail:\nTelegram ID:\nCompany / Project:\nMessage:\n")}`;
        return;
      }

      // Hamburger menu
      if (name === "menu") {
        e.preventDefault();
        onMenuClick?.();
        return;
      }

      // "View all" on trusted section → same link as desktop TrustedButtonContainer
      if (name === "Trusted Button Container") {
        e.preventDefault();
        openUrl("https://dex.orderly.network/board/");
        return;
      }

      // DEX partner cards → same URL mapping as desktop
      if (name === "DEX Card") {
        e.preventDefault();
        const productName = el.querySelector("[data-name='Product Info'] p")?.textContent?.trim() ?? "";
        openUrl(DEX_URLS[productName] ?? "https://dex.orderly.network/board/");
        return;
      }

      // Social media icons row → same SOCIAL_LINKS order as desktop
      if (name === "Social Media Icons Container") {
        e.preventDefault();
        const children = Array.from(el.children) as HTMLElement[];
        const icon = children.find((c) => c === target || c.contains(target));
        const idx = icon ? children.indexOf(icon) : -1;
        if (idx >= 0 && SOCIAL_LINKS[idx]) openUrl(SOCIAL_LINKS[idx]);
        return;
      }


      // Footer nav accordion rows (data-name="footer-nav-Builders", etc.)
      if (name?.startsWith("footer-nav-")) {
        e.preventDefault();
        setFooterSheet(name.replace("footer-nav-", ""));
        return;
      }

      // AI access URL copy
      if (name === "ai-url" || name === "ai-copy") {
        e.preventDefault();
        copyToClipboard(AI_URL).catch(() => { });
        setCopiedToast(true);
        return;
      }

      // Newsletter sign-up
      if (name === "newsletter-email" || name === "newsletter-signup") {
        e.preventDefault();
        setSignUpOpen(true);
        return;
      }

      // Carousel arrows
      if (name === "Arrow right-circle") {
        e.preventDefault();
        const ctx = getCarouselContext(el.parentElement);
        if (ctx === "why") setWhyIdx((i) => Math.min(i + 1, WHY_MAX_IDX));
        if (ctx === "build") setBuildIdx((i) => Math.min(i + 1, BUILD_MAX_IDX));
        return;
      }
      if (name === "Arrow left-circle") {
        e.preventDefault();
        const ctx = getCarouselContext(el.parentElement);
        if (ctx === "why") setWhyIdx((i) => Math.max(i - 1, 0));
        if (ctx === "build") setBuildIdx((i) => Math.max(i - 1, 0));
        return;
      }

      el = el.parentElement;
    }
  }, [router, onMenuClick]);

  return (
    <div
      ref={wrapperRef}
      onClick={handleClick}
      style={{
        position: "relative",
        cursor: "default",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <Frame40 onMenuClick={onMenuClick} />

      {/* Nav drawer is rendered in Home.tsx outside the motion.div stacking context */}

      {/* ── Buy ORDER modal — exact same component as desktop ── */}
      <AnimatePresence>
        {buyOrderOpen && (
          <BuyOrderModal onClose={() => setBuyOrderOpen(false)} />
        )}
      </AnimatePresence>

      {/* ── Newsletter sheet (mobile-only) ── */}
      <AnimatePresence>
        {signUpOpen && createPortal(
          <SignUpModal onClose={() => setSignUpOpen(false)} />,
          document.body,
        )}
      </AnimatePresence>

      {/* ── Footer nav sheet (mobile-only) ── */}
      <AnimatePresence>
        {footerSheet && createPortal(
          <FooterSheet sectionKey={footerSheet} onClose={() => setFooterSheet(null)} />,
          document.body,
        )}
      </AnimatePresence>

      {/* ── Copied toast (mobile-only) ── */}
      <AnimatePresence>
        {copiedToast && createPortal(
          <CopiedToast onDone={() => setCopiedToast(false)} />,
          document.body,
        )}
      </AnimatePresence>
    </div>
  );
}