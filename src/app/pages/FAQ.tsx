'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavCanvas, FooterCanvas } from "../../imports/Frame1618872018";
import { MobileNavDrawer } from "../components/MobileHomePage";
import { MobileAIAccessCard, MobileNewsletterCard, MobileFooterCard } from "../../imports/Frame1618872068-142-633";
import svgPathsMobile from "../../imports/svg-4hybjba00c";

// ── ScaledSection: scales Figma nav/footer canvas to viewport ────────────────
const DESIGN_WIDTH = 1440;
const MOBILE_DESIGN_WIDTH = 375;

function ScaledSection({
  children,
  designHeight,
  designWidth = DESIGN_WIDTH,
}: {
  children: React.ReactNode;
  designHeight: number;
  designWidth?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (!outerRef.current) return;
    const vw = outerRef.current.offsetWidth;
    setScale(Math.min(vw / designWidth, 1));
  }, [designWidth]);

  useEffect(() => {
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [updateScale]);

  const scaledHeight = designHeight * scale;

  return (
    <div
      ref={outerRef}
      style={{
        width: "100%",
        height: `${scaledHeight}px`,
        overflow: "visible",
        display: "flex",
        justifyContent: scale === 1 ? "center" : "flex-start",
      }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          flexShrink: 0,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ── Mobile Top Bar ───────────────────────────────────────────────────────────
function MobileTopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div
      className="flex items-center justify-between px-[20px] py-[18px]"
      style={{ background: "#000", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
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
      <button
        onClick={onMenuClick}
        className="bg-transparent border-0 cursor-pointer p-[10px] -mr-[10px]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
          <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
          <rect x="4" y="16" width="16" height="2" rx="1" fill="white" />
        </svg>
      </button>
    </div>
  );
}

// ── Viewport hook ─────────────────────────────────────────────────────────────
type Viewport = "mobile" | "tablet" | "desktop";

function useViewport(): Viewport {
  const [vp, setVp] = useState<Viewport>("desktop");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVp(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return vp;
}

// ── Scroll reveal wrapper ─────────────────────────────────────────────────────
// Smooth ease curve
const smoothEase = [0.22, 0.61, 0.36, 1] as const;

// Hero: title + subtitle stagger on mount
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

// Accordion: staggered reveal when section scrolls into view
const accordionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const accordionChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

// CTA + footer: simple fade-slide on scroll
const revealOnScroll = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: "What is Orderly?",
    answer:
      "Orderly is a combination of an orderbook-based trading infrastructure and a robust liquidity layer offering perpetual futures orderbooks. Unlike traditional platforms, Orderly doesn't have a front end; instead, it operates at the core of the ecosystem, providing essential services to projects built on top of it. Our DEX white-label solution is carefully crafted to save builders time and capital while granting access to bootstrapped liquidity.",
  },
  {
    question: "How do I get started as a trader?",
    answer: (
      <>
        Traders can start using any interface built on Orderly listed on the{" "}
        <a
          href="https://dex.orderly.network"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#9c75ff", textDecoration: "underline" }}
        >
          Live DEX Board
        </a>
        . Simply connect your wallet to any Orderly-powered DEX, deposit
        collateral from 17+ chains, and begin trading perpetual futures with
        deep liquidity across 140+ assets.
      </>
    ),
  },
  {
    question: "How do I get started as a developer?",
    answer:
      "Orderly lets you launch a fully branded perp DEX in minutes with OrderlyOne, or integrate deeply using the SDK and API. Developers can build customizable trading interfaces, aggregators, and bots on top of the shared orderbook. Check out our documentation to get started.",
  },
  {
    question: "What can I build on Orderly?",
    answer:
      "Orderly lets you easily build a fully customizable perp DEX with additional features such as cross-chain swaps, points programs, trading competitions, leaderboards, referral systems, and more. You can also build aggregators, trading bots, and hedging solutions on top of the orderbook infrastructure.",
  },
  {
    question: "How are trading fees calculated?",
    answer:
      "Fees are added to the cost position for perpetual futures (denominated in USDC). Each broker/builder sets their own fee rates, giving builders full control over their revenue model.",
  },
  {
    question: "Can I list my token on Orderly?",
    answer:
      "Yes! Orderly is always looking to list more tokens. Visit the Listing page or reach out directly. There are no listing fees for qualifying projects, and your token will be accessible from 17+ chains across all Orderly-powered DEXs simultaneously.",
  },
  {
    question: "What order types are supported?",
    answer:
      "Orderly supports MARKET orders (execute at best available price), LIMIT orders (execute at a specified price or better), IOC (Immediate or Cancel), FOK (Fill or Kill), POST ONLY (maker-only, canceled if it would take liquidity), and REDUCE ONLY (only reduces an existing position).",
  },
  {
    question: "How does Orderly ensure security?",
    answer:
      "All orders are signed by users' private trading keys and settled on-chain with those signatures. Public keys are stored on the contract and signatures are verified, ensuring that even if the operator is compromised, no fake orders can be executed and all user funds remain safe. The protocol has undergone multiple security audits.",
  },
  {
    question: "Is Orderly omnichain?",
    answer:
      "Yes. Orderly supports 17+ major blockchains including both EVM chains and Solana. All chains share the same unified orderbook, meaning liquidity is not fragmented. Traders on any supported chain access identical depth and pricing.",
  },
  {
    question: "What is the ORDER token?",
    answer:
      "ORDER is Orderly Network's governance and utility token. Holders can stake ORDER to earn protocol revenue sharing, participate in governance votes via Snapshot, and access exclusive ecosystem benefits. The token was launched in August 2024.",
  },
];

// ── Accordion item ─────────────────────────────────────────────────────────────
function AccordionItem({ item, vp }: { item: FAQItem; vp: Viewport }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isMobile = vp === "mobile";
  const isTablet = vp === "tablet";

  return (
    <div
      style={{
        background: "#1a1a1f",
        borderRadius: isMobile ? "10px" : "12px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "16px 18px" : isTablet ? "20px 24px" : "24px 28px",
          background: open ? (hovered ? "#222228" : "#1a1a1f") : (hovered ? "#7b1de6" : "#6700ce"),
          border: "none",
          cursor: "pointer",
          gap: "12px",
          textAlign: "left",
          transition: "background 0.2s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
            fontVariationSettings: "'wght' 500",
            fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
            color: "white",
            letterSpacing: "0.02em",
            lineHeight: 1.3,
            flex: 1,
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "rgba(255,255,255,0.5)",
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
        <p
          style={{
            fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
            fontVariationSettings: "'wght' 300",
            fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'",
            fontSize: isMobile ? "14px" : "16px",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.6,
            padding: isMobile ? "0 18px 20px" : isTablet ? "0 24px 24px" : "0 28px 28px",
            margin: 0,
            letterSpacing: "0.025em",
          }}
        >
          {item.answer}
        </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function FAQ() {
  const vp = useViewport();
  const isMobile = vp === "mobile";
  const isTablet = vp === "tablet";
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div style={{ background: "#000", minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>

      {/* ── Nav ── */}
      {isMobile ? (
        <MobileTopBar onMenuClick={() => setNavOpen(true)} />
      ) : (
        <ScaledSection designHeight={200}>
          <NavCanvas />
        </ScaledSection>
      )}

      {/* ── Hero header ── */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: isMobile ? "40px 20px 48px" : isTablet ? "50px 32px 64px" : "60px 24px 80px",
          textAlign: "center",
        }}
      >
        <motion.h1
          variants={heroChild}
          style={{
            fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
            fontVariationSettings: "'wght' 700",
            fontSize: isMobile ? "32px" : "clamp(40px,6vw,68px)",
            color: "white",
            letterSpacing: "0.01em",
            lineHeight: 1.1,
            margin: isMobile ? "0 0 16px" : "0 0 24px",
          }}
        >
          Frequently
          <br />
          Asked Questions
        </motion.h1>
        <motion.p
          variants={heroChild}
          style={{
            fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
            fontVariationSettings: "'wght' 400",
            fontSize: isMobile ? "14px" : "16px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
            maxWidth: "520px",
            margin: "0 auto",
            letterSpacing: "0.02em",
          }}
        >
          Everything you need to know about Orderly Network, from getting
          started to advanced topics.
        </motion.p>
      </div>
      </motion.div>

      {/* ── FAQ accordion ── */}
      <motion.div
        variants={accordionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "12px" : "16px",
        }}
      >
        {FAQS.map((item, i) => (
          <motion.div key={i} variants={accordionChild}>
            <AccordionItem item={item} vp={vp} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Still Have Questions CTA ── */}
      <motion.div
        variants={revealOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
      <div
        style={{
          maxWidth: "740px",
          margin: isMobile ? "64px auto 80px" : "80px auto 120px",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 24px",
        }}
      >
        <div
          style={{
            background: "#1E2026",
            borderRadius: isMobile ? "16px" : "20px",
            padding: isMobile ? "32px 20px" : isTablet ? "40px 32px" : "48px 40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
              fontVariationSettings: "'wght' 700",
              fontSize: isMobile ? "24px" : "clamp(28px,3.5vw,40px)",
              color: "white",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Still Have Questions?
          </h2>
          <p
            style={{
              fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
              fontVariationSettings: "'wght' 400",
              fontSize: isMobile ? "14px" : "16px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.5,
              maxWidth: "490px",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Check the full documentation or join our Discord community for real-time support.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "10px" : "12px",
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            <a
              href="https://orderly.network/docs/introduction/getting-started/what-is-orderly"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                border: "1.5px solid rgba(255,255,255,0.6)",
                borderRadius: "100px",
                padding: "12px 24px",
                color: "white",
                textDecoration: "none",
                fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
                fontVariationSettings: "'wght' 600",
                fontSize: "15px",
                letterSpacing: "0.02em",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")
              }
            >
              Read the Docs
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 11.5L11.5 2.5M7 2.5h4.5V7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://discord.com/invite/OrderlyNetwork"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                border: "1.5px solid rgba(255,255,255,0.6)",
                borderRadius: "100px",
                padding: "12px 24px",
                color: "white",
                textDecoration: "none",
                fontFamily: "'atyp-bl-variable','atyp-bl',sans-serif",
                fontVariationSettings: "'wght' 600",
                fontSize: "15px",
                letterSpacing: "0.02em",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")
              }
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
      </motion.div>

      {/* ── Footer ── */}
      <motion.div
        variants={revealOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
      {isMobile ? (
        <div
          style={{
            padding: "0 20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <MobileAIAccessCard />
          <MobileNewsletterCard />
          <MobileFooterCard />
        </div>
      ) : (
        <ScaledSection designHeight={829}>
          <FooterCanvas />
        </ScaledSection>
      )}
      </motion.div>

      <AnimatePresence mode="wait">
        {navOpen && (
          <MobileNavDrawer onClose={() => setNavOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}