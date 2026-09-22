const items = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Talking-Head Edits",
  "Dynamic Captions",
  "B-Roll & Callouts",
  "Sound Cleanup",
  "Color Grade",
  "Retention Pacing",
];

export function Ticker() {
  // Duplicate the list so the -100% loop is seamless.
  const loop = [...items, ...items];

  return (
    <div className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-5">
      <div className="ticker">
        <div className="ticker-track">
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-[var(--color-faint)]"
            >
              {item}
              <span className="text-[var(--color-gold)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
