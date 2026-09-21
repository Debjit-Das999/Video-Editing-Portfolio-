import type { Project } from "@/lib/types";
import { YouTubeLite } from "@/components/YouTubeLite";

export function VideoCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <YouTubeLite id={project.youtubeId} title={project.title} />
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
          {project.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
