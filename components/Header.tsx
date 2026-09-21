import { content } from "@/data/content";

const links = [
  { href: "#showreel", label: "Showreel" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { name } = content.profile;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 2xl:max-w-6xl 3xl:max-w-7xl">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {name}
        </a>
        <nav className="hidden gap-7 text-sm text-[var(--color-muted)] sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85 sm:hidden"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
