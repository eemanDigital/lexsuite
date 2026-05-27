import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/cormorant-garamond/700-italic.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

export const metadata: Metadata = {
  title: {
    template: "%s | LexSuite Solicitors",
    default: "LexSuite Solicitors — Nigerian Legal-Tech Law Firm",
  },
  description:
    "LexSuite Solicitors: Nigeria's foremost legal-tech solicitors. CAC registration, AI legal compliance, IP protection, NDPA advisory, fintech regulation, and startup legal structuring.",
  keywords: [
    "Nigerian law firm",
    "CAC registration Nigeria",
    "NDPA compliance",
    "startup lawyer Nigeria",
    "AI legal compliance Nigeria",
    "fintech lawyer Nigeria",
    "IP protection Nigeria",
    "legal tech Nigeria",
    "LexSuite Solicitors",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://lexsuite.com.ng",
    siteName: "LexSuite Solicitors",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LexSuiteLaw",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lexsuite.com.ng" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LexSuite Solicitors",
  url: "https://lexsuite.com.ng",
  sameAs: [
    "https://linkedin.com/company/lexsuite",
    "https://twitter.com/LexSuiteLaw",
  ],
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "LexSuite Solicitors",
  description:
    "Nigerian legal-tech law firm specialising in CAC registration, AI legal compliance, IP protection, NDPA advisory, and startup structuring.",
  url: "https://lexsuite.com.ng",
  logo: "https://lexsuite.com.ng/logo-dark.svg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  areaServed: "NG",
  serviceType: [
    "Legal Advisory",
    "AI Compliance",
    "Corporate Law",
    "IP Law",
    "Data Privacy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body
        className="font-body bg-white text-text-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
