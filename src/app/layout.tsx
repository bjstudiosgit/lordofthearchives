import React from "react";
import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdSenseScript from "../components/AdSenseScript";
import GoogleAnalyticsTracker from "../components/GoogleAnalytics";
import "../index.css"; // assuming global styles are here

const GA_MEASUREMENT_ID = "G-7YLK7S5HW2";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lordofthearchives.co.uk"),
  title: {
    default: "Lord of the Archives | UK Rap Battle Archive",
    template: "%s | Lord of the Archives",
  },
  description: "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap and Prizefighter, with clash analysis, MC profiles and league rankings.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.lordofthearchives.co.uk",
    siteName: "Lord of the Archives",
    title: "Lord of the Archives | UK Rap Battle Archive",
    description: "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap, Prizefighter and Clash Money, with clash analysis, MC profiles and league rankings.",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Lord of the Archives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lord of the Archives | UK Rap Battle Archive",
    description: "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap, Prizefighter and Clash Money, with clash analysis, MC profiles and league rankings.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <head>
        <script
          id="site-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.lordofthearchives.co.uk/#website",
                  "url": "https://www.lordofthearchives.co.uk",
                  "name": "Lord of the Archives",
                  "description": "UK Rap Battle Archive across PenGame, Gzone, Lord of the Mics, Talk Is Cheap and Prizefighter.",
                  "inLanguage": "en-GB",
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.lordofthearchives.co.uk/#organization",
                  "name": "Lord of the Archives",
                  "url": "https://www.lordofthearchives.co.uk",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
                    "width": 1200,
                    "height": 630,
                  },
                },
              ],
            }),
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-2858435877591429" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          id="google-tag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            window.googlefc = window.googlefc || {};
            window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
          `,
          }}
        />
      </head>
      <body className="min-h-screen bg-zinc-950 selection:bg-brand selection:text-black text-white">
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalyticsTracker gaId={GA_MEASUREMENT_ID} />
        <AdSenseScript />
      </body>
    </html>
  );
}
