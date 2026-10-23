"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VoiceDemoWidget } from "@/components/voice-demo-widget";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("is-night-desk", isHome);
    document.body.classList.toggle("is-night-desk", isHome);
    return () => {
      document.documentElement.classList.remove("is-night-desk");
      document.body.classList.remove("is-night-desk");
    };
  }, [isHome]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const reset = () => window.scrollTo(0, 0);
    reset();
    const frame = window.requestAnimationFrame(reset);
    const timer = window.setTimeout(reset, 50);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {isHome ? null : <SiteHeader />}
      <div id="main-content">{children}</div>
      {isHome ? null : <SiteFooter />}
      {isHome ? null : <VoiceDemoWidget />}
    </>
  );
}
