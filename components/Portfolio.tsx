"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { VideoCard } from "@/components/VideoCard";

const FEATURED = "Featured";
const ALL = "All";

export function Portfolio() {
  const { categories, projects } = content;
  // Tab order: Featured first, then the real categories, then All last.
  const tabs = [FEATURED, ...categories, ALL];
  const [active, setActive] = useState(FEATURED);

  const filtered =
    active === ALL
      ? projects
      : active === FEATURED
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
      <div className="glow glow-gold-soft" style={{ top: "8rem", right: "-10rem", width: "32rem", height: "32rem" }} />

      <div className="shell relative z-10">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="dot" />Portfolio</span>
            <h2 className="display mt-5 text-3xl sm:text-5xl">
              Featured <span className="text-gold">work</span>
            </h2>
            <p className="mt-3 text-lg text-[var(--color-muted)]">
              Top edits from The AI Architects (Tom Crawshaw) channel. Click any
              thumbnail to play.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "border-transparent bg-gradient-to-br from-[#facc15] to-[#f59e0b] text-[#1a1200]"
                    : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 4xl:grid-cols-3">
          {filtered.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-[var(--color-muted)]">
            No videos in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
