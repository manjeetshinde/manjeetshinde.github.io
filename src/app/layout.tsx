import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s · Manjeet Shinde" },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
