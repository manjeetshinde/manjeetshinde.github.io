import Image from "next/image";
import Link from "next/link";

import { WorkRow } from "@/components/work-row";
import { featuredProjects, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <section aria-labelledby="hero-name" className="pt-16 sm:pt-24">
        <p className="label-mono rise">
          Software developer · Founder, Procillage
        </p>
        <div className="rise rise-1 mt-6 flex items-center gap-6 sm:gap-10">
          <h1
            id="hero-name"
            className="text-hero font-serif text-ink-strong"
          >
            Manjeet Shinde
          </h1>
          <Image
            src="/images/manjeet-shinde.jpg"
            alt="Portrait of Manjeet Shinde"
            width={176}
            height={176}
            priority
            className="h-16 w-16 shrink-0 rounded-[3px] object-cover grayscale-[25%] sm:h-22 sm:w-22"
          />
        </div>
        <p className="rise rise-2 mt-7 max-w-[58ch] text-lg leading-relaxed text-ink">
          I build web products and infrastructure — healthcare platforms,
          education sites, and business systems — where security and privacy
          are first principles. These days most of that happens through{" "}
          <a
            href={site.procillage}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent"
          >
            Procillage
          </a>
          .
        </p>
        <p className="rise rise-2 mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent"
          >
            GitHub
          </a>
          <a
            href={site.procillage}
            target="_blank"
            rel="noreferrer"
            className="text-accent-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent"
          >
            Procillage
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-accent-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent"
          >
            Email
          </a>
        </p>
      </section>

      <section aria-labelledby="selected-work" className="mt-20 sm:mt-28">
        <div className="flex items-baseline justify-between border-t border-hairline pt-4">
          <h2 id="selected-work" className="label-mono">
            Selected work
          </h2>
          <Link href="/work/" className="link-quiet text-sm">
            All {projects.length} projects
          </Link>
        </div>
        <ol className="mt-3 border-t border-hairline">
          {featuredProjects.map((project) => (
            <WorkRow key={project.name} project={project} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="now" className="mt-16 sm:mt-24">
        <h2 id="now" className="label-mono border-t border-hairline pt-4">
          Now
        </h2>
        <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
          <li>Building Procillage — home of Pathox and its single sign-on platform.</li>
          <li>
            When I am not on my computer,{" "}
            <em className="font-serif italic text-ink">I&rsquo;m nowhere else.</em>
          </li>
        </ul>
      </section>
    </div>
  );
}
