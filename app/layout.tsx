import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { Navbar } from "@/components/navbar";
import { indexFollow, getSiteUrl } from "@/lib/seo";
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
  metadataBase: new URL(getSiteUrl()),
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
  robots: indexFollow,
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
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
              "document.addEventListener('click',function(e){var t=e.target;if(!t.closest)return;var m=t.closest('.nav-menu');var a=t.closest('.nav-menu a');if(a&&m)m.removeAttribute('open');});(function(){function bind(){document.querySelectorAll('.mobile-loop').forEach(function(vp){if(vp.dataset.bound)return;vp.dataset.bound='1';var track=vp.querySelector('.mobile-loop-track');if(!track)return;var x0=0;vp.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;var a=track.getAnimations&&track.getAnimations()[0];if(a)a.pause();else track.style.animationPlayState='paused';},{passive:true});vp.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-x0;var a=track.getAnimations&&track.getAnimations()[0];if(a&&Math.abs(dx)>40){var t=a.currentTime||0;t=dx<0?Math.min(15990,t+4000):Math.max(0,t-4000);a.currentTime=t;}if(a)a.play();else track.style.animationPlayState='running';},{passive:true});});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();})();",
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
