import { content } from "@/data/content";

export function About() {
  const { bio, highlights } = content.profile;

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24"
    >
      <div className="shell grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div data-reveal>
          <span className="eyebrow"><span className="dot" />About</span>
          <h2 className="display mt-5 text-3xl sm:text-5xl">
            Here to help you <span className="text-gold">grow</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-muted)]">
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <ul className="space-y-3 md:pt-2" data-reveal>
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3.5 text-sm font-medium"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)] shadow-[0_0_8px_var(--color-gold)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
