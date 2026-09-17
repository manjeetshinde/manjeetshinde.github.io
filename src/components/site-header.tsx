import Link from "next/link";

import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg text-ink-strong transition-colors hover:text-accent-ink"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm sm:gap-7">
            <li>
              <Link className="link-quiet" href="/work/">
                Work
              </Link>
            </li>
            <li>
              <a
                className="link-quiet"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="link-quiet"
                href={site.procillage}
                target="_blank"
                rel="noreferrer"
              >
                Procillage
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
