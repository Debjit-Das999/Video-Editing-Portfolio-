import { content } from "@/data/content";
import { YouTubeLite } from "@/components/YouTubeLite";

export function Showreel() {
  const { heading, subtext, youtubeId } = content.showreel;

  return (
    <section
      id="showreel"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:py-20 2xl:max-w-6xl 3xl:max-w-7xl"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">{subtext}</p>
      </div>

      <div className="mx-auto max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl">
        <YouTubeLite id={youtubeId} title="Showreel" />
      </div>
    </section>
  );
}
