"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initGoogleAnalytics, trackPageView } from "@/lib/ga";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initGoogleAnalytics();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (initialized.current) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
}
