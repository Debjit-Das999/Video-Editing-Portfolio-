"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly inline scheduling widget — shows the live date/time picker so
 * visitors can book a meeting without leaving the site. Loads Calendly's
 * script once and initializes the widget into our own container (no auto-init
 * class, so it never double-mounts).
 */
export function Calendly({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      if (window.Calendly && ref.current && ref.current.childElementCount === 0) {
        window.Calendly.initInlineWidget({ url, parentElement: ref.current });
      }
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [url]);

  return (
    <div
      ref={ref}
      className="lyt-radius border border-[var(--color-line)] bg-[var(--color-surface)]"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
