import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pt-24 sm:px-8">
      <p className="label-mono">404</p>
      <h1 className="mt-4 text-title font-serif text-ink-strong">
        Page not found
      </h1>
      <p className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-muted">
        The page you are looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-accent-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent"
      >
        Return home
      </Link>
    </div>
  );
}
