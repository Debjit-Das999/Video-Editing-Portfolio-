import { content } from "@/data/content";

export function Hero() {
  const { name, tagline, intro } = content.profile;

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:pb-24 sm:pt-28 2xl:max-w-6xl 3xl:max-w-7xl"
    >
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        Available for freelance work
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        {name}
        <span className="block text-[var(--color-muted)]">{tagline}</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
        {intro}
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-ink)]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
