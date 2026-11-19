import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer frame">
      <a className="contact-link display" href={site.email}>Email</a>
      <nav aria-label="Elsewhere">
        <a href={site.procillage}>Procillage</a>
        <a href={site.x}>X</a>
        <a href={site.instagram}>Instagram</a>
        <a href={site.music}>Apple Music</a>
      </nav>
    </footer>
  );
}
