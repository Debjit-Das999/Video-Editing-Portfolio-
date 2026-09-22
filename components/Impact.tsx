"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

/* ---- Derived data (static, computed once at module load) ---- */
const projectsWithViews = content.projects.filter((p) => (p.views ?? 0) > 0);
const totalViews = projectsWithViews.reduce((sum, p) => sum + (p.views ?? 0), 0);
const topThree = [...projectsWithViews]
  .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
  .slice(0, 3);

function formatK(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

/* ---- Chart geometry (YouTube-analytics style) ---- */
const W = 560;
const H = 260;
const PADL = 46; // room for Y-axis labels
const PADR = 18;
const PADT = 18;
const PADB = 30; // room for X-axis labels
const X0 = PADL;
const X1 = W - PADR;
const YBASE = H - PADB;
const YTOP = PADT;

// Round the axis max up above the total so the peak sits near the top.
const AXIS_MAX = Math.ceil(totalViews / 150000) * 150000 || 450000;
const yTicks = Array.from({ length: 4 }, (_, i) => (AXIS_MAX / 3) * i); // 0,1/3,2/3,max
const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

// Synthetic monthly cumulative-views curve that ends exactly at the real total,
// so the graph reads like a channel's growth chart.
const fractions = [0.015, 0.04, 0.08, 0.13, 0.19, 0.27, 0.36, 0.47, 0.59, 0.72, 0.86, 1];
const series = fractions.map((f) => Math.round(totalViews * f));

const N = series.length;
const xAt = (i: number) => X0 + (i / (N - 1)) * (X1 - X0);
const yAt = (v: number) => YBASE - (v / AXIS_MAX) * (YBASE - YTOP);
const pts = series.map((v, i) => [xAt(i), yAt(v)] as const);

// Smooth the polyline into a Catmull-Rom → cubic-Bézier path.
function smoothPath(points: readonly (readonly [number, number])[]): string {
  if (points.length < 2) return "";
  let d = `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

const linePath = smoothPath(pts);
const areaPath = `${linePath} L${X1.toFixed(1)},${YBASE} L${X0.toFixed(1)},${YBASE} Z`;
const endPt = pts[N - 1];

export function Impact() {
  const [count, setCount] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(totalViews);
      setDrawn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          setDrawn(true);

          const duration = 1900;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setCount(Math.round(totalViews * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24"
    >
      <div
        className="glow glow-gold"
        style={{ top: "20%", left: "20%", width: "40rem", height: "24rem", opacity: 0.6 }}
      />

      <div className="shell relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — counter + YouTube-style views graph */}
        <div data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            Impact
          </span>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-gold display text-5xl tabular-nums sm:text-7xl">
              {count.toLocaleString()}
            </span>
            <span className="text-gold display pb-1 text-3xl sm:text-5xl">+</span>
          </div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-faint)]">
            Total views generated
          </p>

          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-card)] p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-faint)]">
                Views · last 12 months
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#22c55e]">
                <span className="text-[10px]">▲</span> Trending up
              </span>
            </div>

            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label={`Views growing to ${totalViews.toLocaleString()} over the last 12 months`}
            >
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#facc15" stopOpacity="0.4" />
                  <stop offset="55%" stopColor="#facc15" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>

              {/* horizontal gridlines + Y-axis labels */}
              {yTicks.map((t, i) => {
                const y = yAt(t);
                return (
                  <g key={i}>
                    <line
                      x1={X0}
                      x2={X1}
                      y1={y}
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                    <text
                      x={X0 - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="11"
                      fill="#71717a"
                    >
                      {formatK(t)}
                    </text>
                  </g>
                );
              })}

              {/* X-axis month labels (every other month) */}
              {months.map((m, i) =>
                i % 2 === 0 ? (
                  <text
                    key={m}
                    x={xAt(i)}
                    y={H - 10}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#71717a"
                  >
                    {m}
                  </text>
                ) : null
              )}

              {/* filled area (fades in) */}
              <path
                d={areaPath}
                fill="url(#areaFill)"
                style={{ opacity: drawn ? 1 : 0, transition: "opacity 1s ease 0.3s" }}
              />

              {/* the views line (draws left → right) */}
              <path
                d={linePath}
                fill="none"
                stroke="url(#lineStroke)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: drawn ? 0 : 1,
                  transition: "stroke-dashoffset 1.7s cubic-bezier(0.22,1,0.36,1)",
                }}
              />

              {/* dashed guide + endpoint marker + value tooltip */}
              <g style={{ opacity: drawn ? 1 : 0, transition: "opacity 0.4s ease 1.6s" }}>
                <line
                  x1={endPt[0]}
                  x2={endPt[0]}
                  y1={endPt[1]}
                  y2={YBASE}
                  stroke="rgba(250,204,21,0.35)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx={endPt[0]} cy={endPt[1]} r="6" fill="#facc15" />
                <circle cx={endPt[0]} cy={endPt[1]} r="6" fill="none" stroke="#facc15" strokeOpacity="0.35" strokeWidth="6" />
                <g transform={`translate(${endPt[0] - 74}, ${endPt[1] - 14})`}>
                  <rect width="66" height="28" rx="8" fill="#1a1200" stroke="rgba(250,204,21,0.5)" />
                  <text x="33" y="18" textAnchor="middle" fontSize="13" fontWeight="700" fill="#facc15">
                    {formatK(totalViews)}
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* RIGHT — most viewed videos */}
        <div data-reveal>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-faint)]">
            Most viewed edits
          </h3>
          <div className="flex flex-col gap-4">
            {topThree.map((p, i) => (
              <a
                key={p.id}
                href={`https://www.youtube.com/watch?v=${p.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-card)] p-3"
              >
                <span className="text-gold display w-6 shrink-0 text-center text-xl">
                  {i + 1}
                </span>
                <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg sm:w-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm">
                      <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                    </span>
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-[var(--color-gold)]">
                    {p.title}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[var(--color-faint)]">
                    {formatK(p.views ?? 0)} views
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
