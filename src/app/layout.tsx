import React from "react";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdSenseScript from "../components/AdSenseScript";
import "../index.css"; // assuming global styles are here

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
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `
            window.googlefc = window.googlefc || {};
            window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7YLK7S5HW2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-7YLK7S5HW2');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-zinc-950 selection:bg-brand selection:text-black text-white">
        <Navbar />
        {children}
        <Footer />
        <AdSenseScript />
      </body>
    </html>
  );
}
