import type { Project } from "@/lib/types";
import { YouTubeLite } from "@/components/YouTubeLite";

export function VideoCard({ project }: { project: Project }) {
  return (
    <article className="card-glow group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-card)]">
      <YouTubeLite id={project.youtubeId} title={project.title} />
      <div className="p-5">
        <span className="text-gold text-xs font-bold uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
