import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader page="other" />
      <main className="frame work-page missing" id="content" tabIndex={-1}>
        <h1 className="page-title display">Page not found</h1>
        <a href="/">Back to home</a>
      </main>
    </>
  );
}
