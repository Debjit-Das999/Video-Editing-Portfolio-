import { content } from "@/data/content";
import { YouTubeLite } from "@/components/YouTubeLite";

export function Showreel() {
  const { heading, subtext, youtubeId } = content.showreel;

  return (
    <section id="showreel" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
      <div className="glow glow-gold" style={{ top: "20%", left: "50%", transform: "translateX(-50%)", width: "44rem", height: "26rem", opacity: 0.7 }} />

      <div className="shell relative z-10">
        <div className="mb-8 max-w-2xl" data-reveal>
          <h2 className="display text-3xl sm:text-5xl">
            <span className="text-gold">{heading}</span>
          </h2>
          <p className="mt-3 text-lg text-[var(--color-muted)]">{subtext}</p>
        </div>

        <div
          className="mx-auto max-w-5xl rounded-[var(--radius-card)] p-1.5"
          style={{ boxShadow: "0 0 120px rgba(250,204,21,0.12), 0 40px 80px rgba(0,0,0,0.8)" }}
          data-reveal
        >
          <YouTubeLite id={youtubeId} title="Showreel" />
        </div>
      </div>
    </section>
  );
}
