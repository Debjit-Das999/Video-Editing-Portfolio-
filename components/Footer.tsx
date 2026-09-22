import { content } from "@/data/content";

export function Footer() {
  const { name, email, socials } = content.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="shimmer-line" />
      <div className="shell flex flex-col items-center gap-4 py-10 text-sm text-[var(--color-faint)] sm:flex-row sm:justify-between">
        <span className="text-base font-extrabold tracking-tight text-[var(--color-ink)]">
          {name}
          <span className="text-[var(--color-gold)]">.</span>
        </span>

        <p>
          © {year} {name} — Talking Head Video Specialist
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-[var(--color-gold)]"
          >
            {email}
          </a>
          {socials?.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-gold)]"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#top"
            className="transition-colors hover:text-[var(--color-gold)]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
