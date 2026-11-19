import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: site.name,
    description: site.description,
    images: [{ url: "/images/manjeet-shinde.jpg", width: 850, height: 850, alt: "Portrait of Manjeet Shinde" }],
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader page="home" />
      <main className="frame" id="content" tabIndex={-1}>
        <div className="hero">
          <h1 className="hero-name display">Manjeet <span>Shinde</span></h1>
          <figure className="portrait">
            <Image
              src="/images/manjeet-shinde.jpg"
              alt="Portrait of Manjeet Shinde"
              width={850}
              height={850}
              preload
            />
          </figure>
          <p className="intro">
            At <a href={site.procillage}>Procillage</a>, I build software for pathology labs and tools shared across our products.
          </p>
        </div>

        <section className="selected" aria-labelledby="selected-title">
          <div className="section-heading">
            <h2 id="selected-title">Selected work</h2>
            <a href="/work/">Full work index</a>
          </div>
          <ul className="project-list">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <a className="feature" href={`/work/#${project.slug}`}>
                  <span className="project-title display">{project.title}</span>
                  <span className="project-caption">{project.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
