import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-line rounded-xl bg-card p-6 md:p-7 hover:border-accent/50 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-[14px] text-muted">{project.summary}</p>
        </div>
        <span className="font-mono text-[12px] text-muted whitespace-nowrap pt-1">
          {project.year}
        </span>
      </div>

      <p className="mt-4 text-[14.5px] leading-relaxed text-ink/80">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11.5px] px-2 py-0.5 rounded border border-line text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 font-mono text-[13px]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1 text-ink hover:text-accent transition-colors"
          >
            live <ArrowUpRight size={14} />
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={14} /> code
          </a>
        )}
      </div>
    </article>
  );
}
