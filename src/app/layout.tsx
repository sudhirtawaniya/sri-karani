import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.descriptor}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  metadataBase: new URL("https://example.com"), // Replace with your actual domain.
  openGraph: { title: `${site.name} | ${site.descriptor}`, description: site.description, type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
