import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig, pageSeo } from "@/data/site-content";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: pageSeo.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageSeo.home.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              description: siteConfig.description,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              url: siteConfig.url,
              areaServed: { "@type": "City", name: "Strasbourg" },
              address: { "@type": "PostalAddress", addressLocality: "Strasbourg", addressCountry: "FR" },
              serviceType: ["Ménage à domicile", "Nettoyage de vitres", "Petit bricolage"],
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
