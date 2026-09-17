import type { Project } from "@/lib/projects";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RowBody({ project }: { project: Project }) {
  const meta = [project.context, ...project.stack].join(" · ");
  return (
    <>
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-serif text-xl leading-snug text-ink-strong transition-colors group-hover:text-accent-ink">
          {project.name}
        </span>
        <span className="label-mono shrink-0 pt-1">
          {project.status === "live" ? (
            <span className="inline-flex items-center gap-1.5">
              Live
              <ArrowUpRight className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            "Internal"
          )}
        </span>
      </span>
      <span className="mt-1.5 block max-w-[62ch] text-sm leading-relaxed text-muted">
        {project.description}
      </span>
      <span className="label-mono mt-2.5 block normal-case tracking-[0.08em]">
        {meta}
      </span>
    </>
  );
}

export function WorkRow({ project }: { project: Project }) {
  // An unlinked row is still a row: same rhythm, no affordance.
  if (project.status !== "live" || !project.href) {
    return (
      <li className="border-b border-hairline py-5">
        <RowBody project={project} />
      </li>
    );
  }

  return (
    <li className="border-b border-hairline">
      <a
        className="group -mx-3 block rounded-[2px] px-3 py-5 transition-colors duration-150 hover:bg-panel"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        <RowBody project={project} />
      </a>
    </li>
  );
}
