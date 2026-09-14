import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { Navbar } from "@/components/navbar";
import { faqs, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "defne psikoteknik",
    "antakya psikoteknik",
    "samandağ psikoteknik",
    "hatay psikoteknik",
    "istanbullu psikoteknik",
    "psikoteknik raporu",
    "SRC belgesi hatay",
    "ehliyet iadesi",
    "e-Devlet psikoteknik",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070f1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: site.legalName,
  image: `${site.url}/images/logo.png`,
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.district,
    addressRegion: site.city,
    addressCountry: "TR",
  },
  areaServed: site.areas.map((name) => ({
    "@type": "City",
    name,
  })),
  openingHours: ["Mo-Fr 09:00-18:30", "Sa 09:00-16:00"],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-hidden bg-slate-50 font-sans text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.addEventListener('click',function(e){var t=e.target;if(!t.closest)return;var m=t.closest('.nav-menu');var a=t.closest('.nav-menu a');if(a&&m)m.removeAttribute('open');});",
          }}
        />
        <div id="top" className="flex min-h-dvh flex-col overflow-x-hidden">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <MobileCta />
        </div>
      </body>
    </html>
  );
}
