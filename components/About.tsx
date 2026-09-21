import { content } from "@/data/content";

export function About() {
  const { bio, highlights } = content.profile;

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:py-24 2xl:max-w-6xl 3xl:max-w-7xl"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            About
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-[var(--color-muted)]">
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <ul className="space-y-3 md:pt-1">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-[var(--color-line)] pb-3 text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
