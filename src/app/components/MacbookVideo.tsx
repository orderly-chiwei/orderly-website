"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
ScrollTrigger.normalizeScroll(false);

const TOTAL_FRAMES = 122;
// Native resolution of extracted frames
const FRAME_W = 1400;
const FRAME_H = 843;

function getFrameSrc(index: number): string {
  return `/images/macbook-frames/${String(index).padStart(4, "0")}.webp`;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas resolution to match container design dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Precompute "object-fit: cover" crop parameters
    // Scale frame to cover the canvas, then center-crop
    const scale = Math.max(canvasWidth / FRAME_W, canvasHeight / FRAME_H);
    const scaledW = FRAME_W * scale;
    const scaledH = FRAME_H * scale;
    // Source crop region (in frame pixel coordinates)
    const sx = ((scaledW - canvasWidth) / 2) / scale;
    const sy = ((scaledH - canvasHeight) / 2) / scale;
    const sw = canvasWidth / scale;
    const sh = canvasHeight / scale;

    // Preload all frames
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let currentFrame = 0;

    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img || !img.complete || !img.naturalWidth) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
    };

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === 1 && images[0]?.complete) {
        drawFrame(0);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i + 1);
      img.addEventListener("load", onImageLoad);
      images.push(img);
    }

    // GSAP ScrollTrigger to map scroll → frame index
    const obj = { frame: 0 };
    const tween = gsap.to(obj, {
      frame: TOTAL_FRAMES - 1,
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
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
      images.forEach((img) => img.removeEventListener("load", onImageLoad));
    };
  }, [canvasWidth, canvasHeight]);

  return (
    <div ref={containerRef} className={className}>
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
