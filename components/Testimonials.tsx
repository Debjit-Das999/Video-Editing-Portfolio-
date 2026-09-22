import { content } from "@/data/content";

export function Testimonials() {
  const { testimonials, reviewImages } = content;
  const useImages = (reviewImages?.length ?? 0) > 0;

  if (!useImages && testimonials.length === 0) return null;

  return (
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-hidden border-t border-[var(--color-line)] py-16 sm:py-24"
    >
      <div className="glow glow-gold-soft" style={{ top: "0", left: "-8rem", width: "30rem", height: "30rem" }} />

      <div className="shell relative z-10">
        <div className="mb-12 max-w-2xl" data-reveal>
          <span className="eyebrow"><span className="dot" />Reviews</span>
          <h2 className="display mt-5 text-3xl sm:text-5xl">
            What clients <span className="text-gold">say</span>
          </h2>
          <p className="mt-3 text-lg text-[var(--color-muted)]">
            Real words from the creators and founders I get to work with.
          </p>
        </div>

        {useImages ? (
          <div className="columns-1 gap-6 md:columns-2 [&>*]:mb-6">
            {reviewImages!.map((img, i) => (
              <figure
                key={i}
                className="card-glow break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-card)] p-2"
                data-reveal
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full rounded-lg"
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="card-glow flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-card)] p-6"
                data-reveal
              >
                <div className="text-[var(--color-gold)]" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--color-ink)]/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-[var(--color-line)] pt-4">
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-[var(--color-faint)]">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
