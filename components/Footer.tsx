import { content } from "@/data/content";

export function Footer() {
  const { name, email, socials } = content.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 text-sm text-[var(--color-muted)] sm:flex-row sm:justify-between 2xl:max-w-6xl 3xl:max-w-7xl">
        <p>
          © {year} {name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-[var(--color-ink)]"
          >
            {email}
          </a>
          {socials?.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <a href="#top" className="transition-colors hover:text-[var(--color-ink)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
