"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
ScrollTrigger.normalizeScroll(false);

const DESKTOP_FRAMES = 122;
const MOBILE_FRAMES = 61;
// Native resolution of extracted frames
const FRAME_W = 1400;
const FRAME_H = 843;

const BATCH_SIZE = 10;

function getFrameSrc(index: number, mobile: boolean): string {
  const dir = mobile ? "macbook-frames-mobile" : "macbook-frames";
  return `/images/${dir}/${String(index).padStart(4, "0")}.webp`;
}

interface MacbookVideoProps {
  className?: string;
  /** Canvas resolution width (matches container design width) */
  canvasWidth?: number;
  /** Canvas resolution height (matches container design height) */
  canvasHeight?: number;
}

export default function MacbookVideo({
  className,
  canvasWidth = 1125,
  canvasHeight = 838,
}: MacbookVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  const isMobile = canvasWidth < 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const totalFrames = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
    const frameW = isMobile ? 375 : FRAME_W;
    const frameH = isMobile ? Math.round(375 * (FRAME_H / FRAME_W)) : FRAME_H;

    // Precompute "object-fit: cover" crop parameters
    const scale = Math.max(canvasWidth / frameW, canvasHeight / frameH);
    const scaledW = frameW * scale;
    const scaledH = frameH * scale;
    const sx = ((scaledW - canvasWidth) / 2) / scale;
    const sy = ((scaledH - canvasHeight) / 2) / scale;
    const sw = canvasWidth / scale;
    const sh = canvasHeight / scale;

    const images: HTMLImageElement[] = new Array(totalFrames);
    let currentFrame = 0;
    let cancelled = false;

    // Find the closest loaded frame to the target index
    const findNearestLoaded = (index: number): number => {
      // Check target first
      if (images[index]?.complete && images[index]?.naturalWidth) return index;
      // Search outward from target
      for (let d = 1; d < totalFrames; d++) {
        const before = index - d;
        if (before >= 0 && images[before]?.complete && images[before]?.naturalWidth) return before;
        const after = index + d;
        if (after < totalFrames && images[after]?.complete && images[after]?.naturalWidth) return after;
      }
      return -1;
    };

    let lastDrawn = -1;

    const drawFrame = (index: number) => {
      const actual = findNearestLoaded(index);
      if (actual < 0 || actual === lastDrawn) return;
      lastDrawn = actual;
      const img = images[actual];
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
    };

    // Load a single image and return a promise
    const loadImage = (frameIndex: number): Promise<void> => {
      return new Promise((resolve) => {
        if (cancelled) { resolve(); return; }
        const img = new Image();
        img.src = getFrameSrc(frameIndex + 1, isMobile);
        img.onload = () => { images[frameIndex] = img; resolve(); };
        img.onerror = () => resolve(); // skip failed frames
      });
    };

    // Priority: load frame 0 first, draw immediately, then batch-load the rest
    const loadAll = async () => {
      // 1. Load first frame with high priority
      await loadImage(0);
      if (!cancelled) {
        drawFrame(0);
        setCanvasReady(true);
      }

      // 2. Batch-load remaining frames
      for (let start = 1; start < totalFrames; start += BATCH_SIZE) {
        if (cancelled) break;
        const end = Math.min(start + BATCH_SIZE, totalFrames);
        const batch: Promise<void>[] = [];
        for (let i = start; i < end; i++) {
          batch.push(loadImage(i));
        }
        await Promise.all(batch);
        // Redraw current position — may now have a closer frame available
        if (!cancelled) {
          lastDrawn = -1; // force redraw
          drawFrame(currentFrame);
        }
      }
    };

    loadAll();

    // GSAP ScrollTrigger to map scroll → frame index
    const obj = { frame: 0 };
    const tween = gsap.to(obj, {
      frame: totalFrames - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "center center",
        scrub: 0.5,
        preventOverlaps: true,
        fastScrollEnd: true,
      },
      onUpdate: () => {
        const frameIndex = Math.round(obj.frame);
        if (frameIndex !== currentFrame) {
          currentFrame = frameIndex;
          drawFrame(frameIndex);
        }
      },
    });

    return () => {
      cancelled = true;
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, [canvasWidth, canvasHeight, isMobile]);

  const firstFrameSrc = getFrameSrc(1, isMobile);

  return (
    <div ref={containerRef} className={className}>
      {/* Static fallback image — visible instantly before canvas is ready */}
      {!canvasReady && (
        <img
          src={firstFrameSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
