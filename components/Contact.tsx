import { content } from "@/data/content";
import { Calendly } from "@/components/Calendly";

export function Contact() {
  const { email, calendlyUrl } = content.profile;

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:py-24 2xl:max-w-6xl 3xl:max-w-7xl"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&rsquo;s work together
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
          Have footage that needs a great edit? Pick a time that works for you
          and book a free 30-minute call below.
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Prefer email?{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            {email}
          </a>
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl 3xl:max-w-4xl">
        <Calendly url={calendlyUrl} />
      </div>
    </section>
  );
}
