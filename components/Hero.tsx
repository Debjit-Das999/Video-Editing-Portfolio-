import { content } from "@/data/content";

export function Hero() {
  const { intro } = content.profile;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Glow orbs */}
      <div className="glow glow-gold" style={{ top: "-8rem", left: "-6rem", width: "32rem", height: "32rem" }} />
      <div className="glow glow-gold-soft" style={{ top: "10rem", right: "-10rem", width: "34rem", height: "34rem" }} />

      <div className="shell relative z-10 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <p className="eyebrow rise" style={{ animationDelay: "0.05s" }}>
          <span className="dot dot-green" />
          Available for work
        </p>

        <h1 className="display mt-6 max-w-4xl text-5xl sm:text-7xl 3xl:text-8xl">
          <span className="rise block" style={{ animationDelay: "0.15s" }}>
            Video that keeps
          </span>
          <span className="text-gold rise block" style={{ animationDelay: "0.28s" }}>
            viewers locked in.
          </span>
        </h1>

        <p
          className="rise mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          {intro}
        </p>

        <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.52s" }}>
          <a href="#contact" className="btn-gold">
            Book A Call
          </a>
          <a href="#work" className="btn-ghost">
            Watch My Work →
          </a>
        </div>
      </div>
    </section>
  );
}
