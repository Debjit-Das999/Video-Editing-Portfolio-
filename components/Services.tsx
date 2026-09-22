import { content } from "@/data/content";

export function Services() {
  const { services } = content;

  if (services.length === 0) return null;

  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24"
    >
      <div className="shell">
        <div className="mb-12 max-w-2xl" data-reveal>
          <span className="eyebrow"><span className="dot" />Services</span>
          <h2 className="display mt-5 text-3xl sm:text-5xl">
            What I <span className="text-gold">do</span>
          </h2>
          <p className="mt-3 text-lg text-[var(--color-muted)]">
            I handle the edit end to end so you can stay focused on showing up on
            camera.
          </p>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col gap-3 border-b border-[var(--color-line)] py-7 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:gap-10"
              data-reveal
            >
              <span className="text-gold text-sm font-extrabold tabular-nums sm:w-16">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--color-gold)] sm:w-72 sm:shrink-0">
                {s.title}
              </h3>
              <p className="max-w-2xl text-[var(--color-muted)]">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
