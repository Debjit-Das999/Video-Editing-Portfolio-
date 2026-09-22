import { content } from "@/data/content";
import { Calendly } from "@/components/Calendly";

export function Contact() {
  const { email, calendlyUrl } = content.profile;

  // Theme the inline Calendly widget to match the dark/gold look.
  const themedCalendly = `${calendlyUrl}?hide_gdpr_banner=1&background_color=0d0d0d&text_color=ffffff&primary_color=facc15`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-[var(--color-line)] py-16 sm:py-24"
    >
      <div className="glow glow-gold" style={{ top: "-6rem", left: "50%", transform: "translateX(-50%)", width: "48rem", height: "26rem" }} />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="eyebrow"><span className="dot" />Let&rsquo;s talk</span>
          <h2 className="display mt-5 text-3xl sm:text-5xl">
            Let&rsquo;s make your next video
            <br />
            <span className="text-gold">impossible to scroll past.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            Book a free 30-minute call, or send your footage straight to my
            inbox.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book A Call
            </a>
            <a href={`mailto:${email}`} className="btn-ghost">
              {email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl 3xl:max-w-4xl" data-reveal>
          <Calendly url={themedCalendly} />
        </div>
      </div>
    </section>
  );
}
