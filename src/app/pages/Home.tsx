'use client';

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Frame7 from "../../imports/Frame1618872018";
import { MobileHomePage, MobileNavDrawer } from "../components/MobileHomePage";

// Desktop / tablet Figma canvas: 1440 × 6500 px
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 6500;

// Mobile Figma canvas: 375 px wide
const MOBILE_DESIGN_WIDTH = 375;

function ScaledFrame({
  children,
  cap,
  designWidth,
  designHeight,
  autoHeight,
}: {
  children: React.ReactNode;
  cap?: boolean;
  designWidth?: number;
  designHeight?: number;
  autoHeight?: boolean;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [measuredDH, setMeasuredDH] = useState<number | null>(null);

  const dw = designWidth ?? DESIGN_WIDTH;
  const dh = designHeight ?? DESIGN_HEIGHT;

  const updateScale = useCallback(() => {
    if (!outerRef.current) return;
    const vw = outerRef.current.offsetWidth;
    const raw = vw / dw;
    setScale(cap ? Math.min(raw, 1) : raw);
  }, [cap, dw]);

  useEffect(() => {
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [updateScale]);

  useLayoutEffect(() => {
    if (!autoHeight || !innerRef.current) return;
    const h = innerRef.current.scrollHeight;
    if (h > 100) setMeasuredDH(h);
  }, [autoHeight, scale]);

  const effectiveDH = autoHeight && measuredDH ? measuredDH : dh;
  const scaledHeight = effectiveDH * scale;

  return (
    <div
      ref={outerRef}
      style={{
        width: "100%",
        height: `${scaledHeight}px`,
        // visible so nav dropdowns are never clipped by the outer wrapper
        overflow: "visible",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: cap && scale === 1 ? "center" : "flex-start",
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: `${dw}px`,
          height: autoHeight ? "auto" : `${dh}px`,
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

export default function Home() {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [navOpen,  setNavOpen]  = useState(false);

  const handleOpenNav  = useCallback(() => setNavOpen(true), []);
  const handleCloseNav = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setViewport("mobile");
      else if (w < 1024) setViewport("tablet");
      else setViewport("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop & tablet: pixel-perfect ScaledFrame of the 1440 px Figma canvas
  if (viewport === "desktop" || viewport === "tablet") {
    return (
      <div style={{ width: "100vw", overflowX: "hidden", background: "#000" }}>
        <ScaledFrame cap>
          <Frame7 />
        </ScaledFrame>
      </div>
    );
  }

  // Mobile: your custom MobileHomePage design, scaled to fit the 375 px canvas
  // MobileNavDrawer is rendered OUTSIDE the motion.div so position:fixed
  // is always relative to the true viewport (no stacking-context interference).
  return (
    <div style={{ width: "100vw", overflowX: "hidden", background: "#000" }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <ScaledFrame designWidth={MOBILE_DESIGN_WIDTH} autoHeight>
          <MobileHomePage onMenuClick={handleOpenNav} />
        </ScaledFrame>
      </motion.div>

      {/* Nav drawer lives here, outside every transform/willChange ancestor */}
      <AnimatePresence>
        {navOpen && (
          <MobileNavDrawer key="mobile-nav" onClose={handleCloseNav} />
        )}
      </AnimatePresence>
    </div>
  );
}