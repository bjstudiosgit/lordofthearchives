import React from "react";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"; // assuming global styles are here

export const metadata = {
  title: "Lord of the Archives",
  description: "The ultimate rap battle archive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2858435877591429"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-zinc-950 selection:bg-brand selection:text-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
