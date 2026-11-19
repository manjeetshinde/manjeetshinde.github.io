import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Products and projects by Manjeet Shinde across healthcare, education, and business software.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader page="work" />
      <main className="frame work-page" id="content" tabIndex={-1}>
        <h1 className="page-title display">Work</h1>
        <ul className="project-list archive">
          {projects.map((project) => (
            <li className="archive-entry" id={project.slug} key={project.slug}>
              <h2 className="project-title display">
                {project.href ? <a href={project.href}>{project.title}</a> : project.title}
              </h2>
              <p className="project-caption">{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
