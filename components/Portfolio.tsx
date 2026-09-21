"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { VideoCard } from "@/components/VideoCard";

export function Portfolio() {
  const { categories, projects } = content;
  const [active, setActive] = useState(categories[0]);

  const filtered =
    active === categories[0]
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[100rem]">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 text-[var(--color-muted)]">
              A few recent edits. Click any thumbnail to play.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active === cat
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
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
