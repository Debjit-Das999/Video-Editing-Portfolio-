import { content } from "@/data/content";

export function Stats() {
  const { stats } = content;

  if (stats.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="glow glow-gold-soft" style={{ bottom: "-12rem", left: "50%", transform: "translateX(-50%)", width: "40rem", height: "20rem" }} />
      <div
        className="shell relative z-10 grid grid-cols-2 gap-y-10 py-14 sm:grid-cols-4 sm:divide-x sm:divide-[var(--color-line)]"
        data-reveal
      >
        {stats.map((s) => (
          <div key={s.label} className="px-2 text-center sm:px-6">
            <div className="text-gold display text-4xl sm:text-5xl 3xl:text-6xl">
              {s.value}
            </div>
            <div className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
