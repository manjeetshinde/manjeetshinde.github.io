import { site } from "@/lib/site";

export function SiteHeader({ page }: { page: "home" | "work" | "other" }) {
  return (
    <header className="site-header frame">
      {page !== "home" && <a className="home-link" href="/">{site.name}</a>}
      <nav aria-label="Main">
        <a href="/work/" aria-current={page === "work" ? "page" : undefined}>Work</a>
        <a href={site.github}>GitHub</a>
      </nav>
    </header>
  );
}
