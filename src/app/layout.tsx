import React from "react";
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
      <body className="min-h-screen bg-zinc-950 selection:bg-brand selection:text-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
