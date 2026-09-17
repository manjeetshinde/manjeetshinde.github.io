import { site, socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-hairline">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a className="link-quiet text-sm" href={social.href}>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-xs text-faint">Set in Newsreader &amp; Inter</p>
      </div>
    </footer>
  );
}
