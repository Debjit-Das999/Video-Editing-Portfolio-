"use client";

import { useState } from "react";
import { content } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
];

export function Header() {
  const { name } = content.profile;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/70 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="text-base font-extrabold tracking-tight">
          {name}
          <span className="text-[var(--color-gold)]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted)] sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold !px-5 !py-2">
            Book A Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-[var(--color-line)] bg-[var(--color-bg)] sm:hidden">
          <div className="shell flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2"
            >
              Book A Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
