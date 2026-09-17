import type { Metadata } from "next";

import { WorkRow } from "@/components/work-row";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client work, products, and experiments by Manjeet Shinde — web platforms across healthcare, education, sports, and business.",
  alternates: {
    canonical: "/work/",
  },
  openGraph: {
    type: "website",
    url: "/work/",
    siteName: "Manjeet Shinde",
    title: "Work — Manjeet Shinde",
    description:
      "Client work, products, and experiments — web platforms across healthcare, education, sports, and business software.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Manjeet Shinde",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
      <h1 className="text-title font-serif text-ink-strong">Work</h1>
      <p className="mt-4 max-w-[55ch] text-[15px] leading-relaxed text-muted">
        Client work, products, and experiments — {projects.length} projects
        across healthcare, education, sports, and business software.
      </p>
      <ol className="mt-12 border-t border-hairline">
        {projects.map((project) => (
          <WorkRow key={project.name} project={project} />
        ))}
      </ol>
    </div>
  );
}
