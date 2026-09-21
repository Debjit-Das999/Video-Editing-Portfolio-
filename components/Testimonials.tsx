import { content } from "@/data/content";

export function Testimonials() {
  const { testimonials } = content;

  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 2xl:max-w-6xl 3xl:max-w-7xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
          What clients say
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-bg)] p-6"
            >
              <blockquote className="flex-1 text-[15px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-[var(--color-muted)]">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
